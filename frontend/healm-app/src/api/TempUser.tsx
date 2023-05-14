import { UserData, VitalInfo } from "../constants/UserData";


export let userData: UserData = {
  user1: {
    userId: 0,
    fullName: "Testing User",
    email: "Test@validemail.com",
    password: "password",
    patient: {
      patient1: {
        patientId: 1,
        heartCategoryInfo: {
          heartRate: {
            lastRecordedDate: "Today",
            lastRecordedTime: "9:30 AM",
            trendSummery: "Higher than usual for this time of day",
            value: "100",
            units: "BPM",
            history: [],
          },
          bloodPressure: {
            lastRecordedDate: "Today",
            lastRecordedTime: "9:30 AM",
            trendSummery: "Unavailable",
            value: "120/80",
            units: "mmHg",
            history: [],
          },
          bloodSugar: {
            lastRecordedDate: "Today",
            lastRecordedTime: "9:30 AM",
            trendSummery: "Lower than usual for this time of day",
            value: "120",
            units: "mg/dL",
            history: [],
          },
        },
      },
    },
  },
};

let numUsers: number = 1; // initialize with the number of default users
let currentUserId: number; // Creating a variable to store the current user that is signed in

export function checkUsername_password(userName: string, password: string) {
  for (const user in userData) {
    let currUser = userData[user];
    if (currUser.email.toLowerCase() === userName.toLowerCase()) {
      if (currUser.password === password) {
        currentUserId = currUser.userId;
        return currentUserId;
      }
    }
  }
  return -1;
}

export function getNumUsers() {
  return numUsers;
}

export function getCurrentUserId() {
  return currentUserId;
}

export function addToUserData(user: UserData[string]) {
  user.userId = numUsers;
  userData["user" + numUsers] = user;
  numUsers++;
}
export function getUserData() {
  for (const user in userData) {
    let currUser = userData[user];
    if (currUser.userId === getCurrentUserId()) {
      return currUser;
    }
  }
  return null;
}
