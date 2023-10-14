const makeResponse = (statusCode, message, body) => {
    return {
        statusCode: statusCode,
        message: JSON.stringify(message),
        body: body
      } 
};

export default makeResponse;