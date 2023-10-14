import {
  DynamoDBDocumentClient,
  ScanCommand,
} from "@aws-sdk/lib-dynamodb";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import makeResponse from "../helpers/make-response.mjs";

const ddbClient = new DynamoDBClient({ region: "us-east-2" });
const ddbDocClient = DynamoDBDocumentClient.from(ddbClient);

// Get the DynamoDB table name from environment variables
const tableName = process.env.USER_TABLE;

export const findUserHandler = async (event) => {
  if (event.httpMethod !== "GET") {
    throw new Error(
      `findUser only accepts GET method, you tried: ${event.httpMethod} method.`
    );
  }

  // All log statements are written to CloudWatch
  console.info("received:", event);

  /*
    body: {
        email || username: email || username,
    }
    */

  var result = checkParams(event.body);
  if (result) {
    return result;
  }
  
  // Set the correct scan parameters
  let scanParams = {};
  if ("username" in event.body) {
    scanParams = {
      TableName: tableName,
      FilterExpression: "#username = :username",
      ExpressionAttributeNames: { "#username": "username" },
      ExpressionAttributeValues: {
        ":username": event.body.username,
      },
    };
  } else {
    scanParams = {
        TableName: tableName,
        FilterExpression: "#email = :email",
        ExpressionAttributeNames: { "#email": "email" },
        ExpressionAttributeValues: {
          ":email": event.body.email,
        },
      };
  }

  // Perform the Scan Command
  let data = null;
  try {
    console.log("About to scna for a user / users");
    data = await ddbDocClient.send(new ScanCommand(scanParams));
    console.log(
        `Sucess - scan was performed`,
        data
      );
  } catch (err) {
    console.log("Error", err.stack);
  }

  const response = makeResponse(200, `Sucess - scan was performed`, data);
  
  // All log statements are written to CloudWatch
  console.info(
    `response from: ${event.path} statusCode: ${response.statusCode} body: ${response.body}`
  );

  return response;

};

const checkParams = (body) => {
  if (!("email" in body) && !("username" in body)) {
    return makeResponse(400, `Error: username or email not defined`, body);
  }
};
