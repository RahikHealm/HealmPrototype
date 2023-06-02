import { UserData, PatientData, VitalInfo } from "../constants/UserData";

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
        reminders: [
          "Take Acetaminophen (2 pills)",
          "Doctor's appointment in 3 days at 2:30 PM",
        ],
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
                  color: () => '#F43F5E',
                  strokeWidth: 2
                }
              ]
            }
          },
          bloodPressure: {
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
                  color: () => '#F43F5E',
                  strokeWidth: 2
                }
              ]
            }
          },
          bloodSugar: {
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
                  color: () => '#F43F5E',
                  strokeWidth: 2
                }
              ]
            }
          }
        },
        medications: {
          medication1: {
            lastRecordedDate: "Today",
            lastRecordedTime: "10:00 AM",
            trendSummery: "Sample medication trend summary",
            value: "50",
            units: "mg",
            history: {
              labels: ["6:00 AM", "12:00 PM", "6:00 PM", "12:00 AM"],
              datasets: [
                {
                  data: [65, 78, 85, 72, 80, 68],
                  color: () => "#F43F5E",
                  strokeWidth: 2
                }
              ]
            }
          }
        }
      }
    }
  }
};

let numUsers = 1;
let currentUser = 0;

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

export function getUserData(): any {
  for (const user in userData) {
    let currUser = userData[user];
    if (currUser.userId === getCurrentUserId()) {
      return currUser;
    }
  }
  return null;
}

export function getPatientData(patientId: string): PatientData | null {
  const user = getUserData();
  if (user && user.patients && user.patients[patientId]) {
    return user.patients[patientId];
  }
  return null;
}

export function getMedicationInfo(patientId: string, medicationId: string): VitalInfo | null {
  if(medicationId === "medication1")
    return (getUserData().patient.patient1.medications.medication1)
  else if(medicationId === "medication2")
    return (getUserData().patient.patient1.medications.medication2)
  else if(medicationId === "medication3")
    return (getUserData().patient.patient1.medications.medication3)
  return null;
}