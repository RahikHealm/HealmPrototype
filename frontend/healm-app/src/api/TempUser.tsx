import { UserData, VitalInfo } from "../constants/UserData";


export let userData: UserData;
userData = {
  user1: {
    userId: 0,
    fullName: "Testing User",
    email: "Test@validemail.com",
    password: "password",
    patient: {
      patient1:{
        patientId: 1,
        heartCategoryInfo: {
          heartRate: {
            lastRecordedDate: "Today",
            lastRecordedTime: "9:30 AM",
            trendSummery: "Higher than usual for this time of day",
            value: "100",
            units: "BPM",
            history: {
              labels: ["6:00 AM", "12:00 PM", "6:00 PM", "12:00 AM"],
              datasets: [
                {
                  data: [65, 78, 85, 72, 80, 68],
                  color: () => '#F43F5E', // optional
                  strokeWidth: 2 // optional
                }
              ]
            }
          },
          bloodPressure:{
            lastRecordedDate: "Today",
            lastRecordedTime: "9:30 AM",
            trendSummery: "Unavailable",
            value: "120/80",
            units: "mmHg",
            history: {
              labels: ["6:00 AM", "12:00 PM", "6:00 PM", "12:00 AM"],
              datasets: [
                {
                  data: [65, 78, 85, 72, 80, 68],
                  color: () => '#F43F5E', // optional
                  strokeWidth: 2 // optional
                }
              ]
            }
          },
          bloodSugar:{
            lastRecordedDate: "Today",
            lastRecordedTime: "9:30 AM",
            trendSummery: "Lower than usual for this time of day",
            value: "120",
            units: "mg/dL",
            history: {
              labels: ["6:00 AM", "12:00 PM", "6:00 PM", "12:00 AM"],
              datasets: [
                {
                  data: [65, 78, 85, 72, 80, 68],
                  color: () => '#F43F5E', // optional
                  strokeWidth: 2 // optional
                }
              ]
            }
          }
        }
      }
    },
  },
};



let numUsers = 1; // initialize with the number of default users
let currentUser: number; // Creating a variable to store the current user that is signed in

export function checkUsername_password(userName: string, password: string) {
  for (const user in userData) {
    let currUser = userData[user];
    if (currUser.email.toLowerCase() === userName.toLowerCase()) {
      if (currUser.password === password) {
        currentUser = currUser.userId;
        return currentUser;
      }
    }
  }
  return -1;
}

export function getNumUsers() {
  return numUsers;
}

export function getCurrentUserId() {
  return currentUser;
}

export function addToUserData(user: any) {
  user.userid = numUsers;
  userData["user" + numUsers] = user;
  numUsers++;
}
export function getUserData() : any {
  for (const user in userData) {
    let currUser = userData[user];
    if (currUser.userId === getCurrentUserId()) {
      return currUser;
    }
  }
  return null;
}
