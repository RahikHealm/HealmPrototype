import { DynamoDBDocumentClient, ScanCommand } from "@aws-sdk/lib-dynamodb";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import makeResponse from "../helpers/make-response.mjs";

// Used for decrypting password
import bcrypt from "bcryptjs";

const ddbClient = new DynamoDBClient({ region: "us-east-2" });
const ddbDocClient = DynamoDBDocumentClient.from(ddbClient);

// Get the DynamoDB table name from environment variables
const tableName = process.env.USER_TABLE;

export const verifyUserHandler = async (event) => {
  if (event.httpMethod !== "HEAD") {
    throw new Error(
      `verifyUser only accepts HEAD method, you tried: ${event.httpMethod} method.`
    );
  }

  // All log statements are written to CloudWatch
  console.info("received:", event);

  /*
    body: {
      email: String,
      password: String,
    }
    */

  var result = checkParams(event.body);
  if (result) {
    return result;
  }

  const scanParams = {
    TableName: tableName,
    FilterExpression: "#email = :email",
    ExpressionAttributeNames: { "#email": "email" },
    ExpressionAttributeValues: {
      ":email": event.body.email,
    },
  };

  console.log("About to SCAN");
  const scanResult = await ddbDocClient.send(new ScanCommand(scanParams));
  const doesEmailExist = undefined !== scanResult.Items[0];
  console.log("Finsihed SCAN");

  if (!doesEmailExist) {
    return makeResponse(400, "Error: Email does not exist");
  }

  // Password exists, storing it
  const userPassword = scanResult.Items[0].password;

  // Compare with the client input
  const passwordIsCorrect = bcrypt.compareSync(event.body.password, userPassword);

  if(!passwordIsCorrect){
    return makeResponse(400, "Error: Password is incorrect");
  }

  const response = makeResponse(200, "Password is correct");

  // All log statements are written to CloudWatch
  console.info(
    `response from: ${event.path} statusCode: ${response.statusCode}`
  );

  return response;
};

const checkParams = (body) => {
  const requiredFields = ["email", "password"];

  for (const field of requiredFields) {
    if (!(field in body)) {
      return makeResponse(400, `Error: ${field} not defined`, body);
    }
  }
};
