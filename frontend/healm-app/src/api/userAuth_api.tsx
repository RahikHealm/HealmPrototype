async function authenticateUser(
  username: string,
  password: string
): Promise<boolean> {
  try {
    // replace with actual API call
    // const response = await fetch('https://example.com/api/login', {
    //   method: 'POST',
    //   body: JSON.stringify({ username, password }),
    //   headers: { 'Content-Type': 'application/json' },
    // });

    const response: dummyResponse = dummyApiCall(username, password);

    if (response.ok) {
      if (response.success) {
        return true;
      } else if (response.message === "Invalid Username or Password") {
        throw new Error("Invalid username or password");
      }
    } else {
      throw new Error("An error occurred during authentication");
    }
  } catch (error) {
    throw error;
  }
  return false;
}

// dummy api call and interface

import { checkUsername_password } from "./TempUser";

interface dummyResponse {
  ok: boolean;
  success: boolean;
  message: string;
}

function dummyApiCall(username: string, password: string): dummyResponse {
  if (username !== "" && password !== "") {
    if (checkUsername_password(username, password) !== -1) {
      return {
        ok: true,
        success: true,
        message: "Authentication successful",
      };
    } else
      return {
        ok: true,
        success: false,
        message: "Invalid Username or Password",
      };
  } else
    return {
      ok: true,
      success: false,
      message: "Username or Password Incomplete",
    };
}

export default authenticateUser;
