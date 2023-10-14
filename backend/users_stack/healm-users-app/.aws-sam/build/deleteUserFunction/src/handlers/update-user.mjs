import { DynamoDBDocumentClient, UpdateCommand } from "@aws-sdk/lib-dynamodb";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import makeResponse from "../helpers/make-response.mjs";

const ddbClient = new DynamoDBClient({ region: "us-east-2" });
const ddbDocClient = DynamoDBDocumentClient.from(ddbClient);

// Get the DynamoDB table name from environment variables
const tableName = process.env.USER_TABLE;

export const updateUserHandler = async (event) => {
  if (event.httpMethod !== "PUT") {
    throw new Error(
      `updateUser only accepts PUT method, you tried: ${event.httpMethod} method.`
    );
  }

  // All log statements are written to CloudWatch
  console.info("received:", event);

  /*
    body: {
      user_id: String,
      attribute_name: String,
      attribute_value: any
    }
    */

  var result = checkParams(event.body);
  if (result) {
    return result;
  }

  // Defining params for UpdateCommand
  const user = {
    TableName: tableName,
    Key: {
      user_id: event.body.user_id,
    },
    ConditionExpression: "attribute_exists(user_id)",
    UpdateExpression: "set #V = :v",
    ExpressionAttributeNames: {
      "#V": event.body.attribute_name,
    },
    ExpressionAttributeValues: {
      ":v": event.body.attribute_value,
    },
    ReturnValues: "ALL_NEW",
  };

  try {
    console.log("About to update a user");
    const data = await ddbDocClient.send(new UpdateCommand(user));
    console.log(
      `Sucess - ${event.body.attribute_name} has been updated wtih ${event.body.attribute_value}`,
      data
    );
  } catch (err) {
    console.log("Error", err.stack);
  }

  const response = makeResponse(
    200,
    `Sucess - ${event.body.attribute_name} has been updated wtih ${event.body.attribute_value}`,
    user
  );

  // All log statements are written to CloudWatch
  console.info(
    `response from: ${event.path} statusCode: ${response.statusCode} body: ${response.body}`
  );

  return response;
};

const checkParams = (body) => {
  const requiredFields = ["user_id", "attribute_name", "attribute_value"];

  for (const field of requiredFields) {
    if (!(field in body)) {
      return makeResponse(400, `Error: ${field} not defined`, body);
    }
  }
};
