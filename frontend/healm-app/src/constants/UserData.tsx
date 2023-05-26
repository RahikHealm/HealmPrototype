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
  history: {
    labels: string[];
    datasets: {
      data: number[];
      color?: () => string;
      strokeWidth?: number;
    }[];
  };
}