import { DynamoDBDocumentClient, DeleteCommand } from "@aws-sdk/lib-dynamodb";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import makeResponse from "../helpers/make-response.mjs";

const ddbClient = new DynamoDBClient({ region: "us-east-2" });
const ddbDocClient = DynamoDBDocumentClient.from(ddbClient);

// Get the DynamoDB table name from environment variables
const tableName = process.env.USER_TABLE;

export const deleteUserHandler = async (event) => {
  if (event.httpMethod !== "DELETE") {
    throw new Error(
      `deleteUser only accepts DELETE method, you tried: ${event.httpMethod} method.`
    );
  }

  // All log statements are written to CloudWatch
  console.info("received:", event);

  /*
    body: {
        user_id: String,
    }
    */

  var result = checkParams(event.body);
  if (result) {
    return result;
  }

  // Defining params for DeleteCommand
  const user = {
    TableName: tableName,
    Key: {
        user_id: event.body.user_id,
    }
  };

  try {
    console.log("About to delete a user");
    const data = await ddbDocClient.send(new DeleteCommand(user));
    console.log(
        `Sucess - ${user.user_id} has been deleted`,
        data
      );
  } catch (err) {
    console.log("Error", err.stack);
  }

  const response = makeResponse(200, `Sucess - ${user.Key.user_id} has been deleted`, user);
  
  // All log statements are written to CloudWatch
  console.info(
    `response from: ${event.path} statusCode: ${response.statusCode} body: ${response.body}`
  );

  return response;



};

const checkParams = (body) => {
  const requiredFields = ["user_id"];

  for (const field of requiredFields) {
    if (!(field in body)) {
      return makeResponse(400, `Error: ${field} not defined`, body);
    }
  }
};
