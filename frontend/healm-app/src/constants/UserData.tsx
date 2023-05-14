export interface UserData {
  [user: string]: {
    userId: number;
    fullName: string;
    email: string;
    password: string;
    patient: {
      [patientId: string]: {
        patientId: number;
        heartCategoryInfo: {
          heartRate: VitalInfo;
          bloodPressure: VitalInfo;
          bloodSugar: VitalInfo;
        };
      };
    };
  };
}

export interface VitalInfo {
  lastRecordedDate: string;
  lastRecordedTime: string;
  trendSummery: string;
  value: string;
  units: string;
  history: any[]; // You can replace `any` with a specific type for the `history` array if needed
}