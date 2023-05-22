async function registerUser(
  email: string,
  fullName: string,
  password: string
): Promise<boolean> {
  try {
    // replace with actual API call
    // const response = await fetch('https://example.com/api/registerUser', {
    //   method: 'POST',
    //   body: JSON.stringify({ email, fullName, password }),
    //   headers: { 'Content-Type': 'application/json' },
    // });

    const response: dummyResponse = dummyAPICall(email, fullName, password);

    if (response.ok) {
      if (response.success) {
        return true;
      } else if (response.message === "Email taken") {
        throw new Error("Email already taken");
      }
    }

    throw new Error("An error occurred during user registration");

  } catch (error) {
    throw error;
  }

  return false;
}

export default registerUser;


// dummy API for User registration

import { getNumUsers, addToUserData } from "./TempUser";
import { UserData } from "../constants/UserData";

interface dummyResponse {
  ok: boolean;
  success: boolean;
  message: string;
}

function dummyAPICall(
  email: string,
  fullName: string,
  password: string
): dummyResponse {
  let user: UserData[string] = {
    userId: getNumUsers(),
    fullName: fullName,
    email: email,
    password: password,
    patient: {},
  };
  addToUserData(user);
  return {
    ok: true,
    success: true,
    message: "New User Created",
  };
}

// let user: UserData[string] = {
//     userId: getNumUsers(),
//     fullName: fullName,
//     email: email,
//     password: password,
//     patient: {},
//   };
//   addToUserData(user);


