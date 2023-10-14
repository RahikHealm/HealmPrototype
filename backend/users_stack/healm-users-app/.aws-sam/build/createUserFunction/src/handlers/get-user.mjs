import {
    DynamoDBDocumentClient,
    GetCommand,
  } from "@aws-sdk/lib-dynamodb";
  import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
  import makeResponse from "../helpers/make-response.mjs";
  
  const ddbClient = new DynamoDBClient({ region: "us-east-2" });
  const ddbDocClient = DynamoDBDocumentClient.from(ddbClient);
  
  // Get the DynamoDB table name from environment variables
  const tableName = process.env.USER_TABLE;
  
  export const getUserHandler = async (event) => {
    if (event.httpMethod !== "GET") {
      throw new Error(
        `getUser only accepts GET method, you tried: ${event.httpMethod} method.`
      );
    }
  
    // All log statements are written to CloudWatch
    console.info("received:", event);
  
    /*
      body: {
          user_id,
      }
      */
  
    var result = checkParams(event.body);
    if (result) {
      return result;
    }
    
    // Set the params for GetCommand
    const user = {
        TableName: tableName,
        Key: {
            user_id: event.body.user_id
        }
    }
  
    // Perform the Scan Command
    let data = null;
    try {
      console.log("About to get user");
      data = await ddbDocClient.send(new GetCommand(user));
      console.log(
          `Sucess - ${user.Key.user_id} was found`,
          data
        );
    } catch (err) {
      console.log("Error", err.stack);
    }
  
    const response = makeResponse(200, `Sucess - user query was performed`, data);
    
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