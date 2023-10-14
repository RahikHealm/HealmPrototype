import { DynamoDBDocumentClient, PutCommand, ScanCommand } from "@aws-sdk/lib-dynamodb";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import makeResponse from "../helpers/make-response.mjs";

// Used for encrypting password
import bcrypt from "bcryptjs";

// Used for generating an id
import { randomUUID } from "crypto";

const ddbClient = new DynamoDBClient({ region: "us-east-2" });
const ddbDocClient = DynamoDBDocumentClient.from(ddbClient);

// Get the DynamoDB table name from environment variables
const tableName = process.env.USER_TABLE;

export const createUserHandler = async (event) => {
  if (event.httpMethod !== "POST") {
    throw new Error(
      `createUser only accepts POST method, you tried: ${event.httpMethod} method.`
    );
  }

  // All log statements are written to CloudWatch
  console.info("received:", event);

  // Check if event has all the necessary params
  var result = checkParams(event.body);
  if (result) {
    return result;
  }

  // Check if a user with that email already exists
  result = await doesUserExist(event.body.email);
  if (result) {
    return result;
  }


  // Defining params for PutCommand
  // Should not modify any exisitng user because user_id will always be completely new
  const user = {
    TableName: tableName,
    Item: {
      // user_id: generated below with uuid
      user_type: event.body.user_type,
      email: event.body.email,
      username: event.body.username,
      // password: will be added on below with encryption
      fullname: event.body.fullname,
      phone_number: event.body.phone_number,
      // date_created: added below
    },
  };

  // Creates a unique id
  user.Item.user_id = randomUUID();

  // Creates encrypted password
  const saltRounds = 10;
  user.Item.password = bcrypt.hashSync(event.body.password, saltRounds);

  console.log("password: ")
  console.log(user.Item.password);

  // Adds the date and time of creation
  const dateObj = new Date();
  user.Item.date_created = dateObj.toLocaleString("en-GB", { timeZone: "CST" });

  try {
    console.log("About to create a user");
    const data = await ddbDocClient.send(new PutCommand(user));
    console.log("Success - user has been created", data);
  } catch (err) {
    console.log("Error", err.stack);
  }

  const response = makeResponse(200, "User Success - user has been created", user);

  // All log statements are written to CloudWatch
  console.info(
    `response from: ${event.path} statusCode: ${response.statusCode} body: ${response.body}`
  );

  return response;
};

const checkParams = (body) => {
  const requiredFields = [
    "user_type",
    "email",
    "username",
    "password",
    "fullname",
    "phone_number",
  ];

  for (const field of requiredFields) {
    if (!(field in body)) {
      return makeResponse(400, `Error: ${field} not defined`, body);
    }
  }
};

const doesUserExist = async (email) => {
  // Check if user already exists
  // A user already exists if an another user has the same email
  // return 400 if true
  const scanParams = {
    TableName: tableName,
    FilterExpression: "#email = :email",
    ExpressionAttributeNames: { "#email": "email" },
    ExpressionAttributeValues: {
      ":email": email,
    },
  };

  console.log("About to SCAN");
  const scanResult = await ddbDocClient.send(new ScanCommand(scanParams));
  const doesEmailExist = undefined !== scanResult.Items[0];
  console.log("Finsihed SCAN");

  if (doesEmailExist) {
    return makeResponse(400, "Error: email is already taken");
  }
};
