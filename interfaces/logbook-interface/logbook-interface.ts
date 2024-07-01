//This need to go into an env
export const CHECKIN_URL = 'https://khumla-development-logbook-write.azurewebsites.net/api/LogBooks/CheckIn';
export const CHECKOUT_URL = 'https://khumla-development-logbook-write.azurewebsites.net/api/LogBooks/CheckOut';

// interfaces.ts

export interface CheckinResponse {
    data: {
      id: string;
      userId: string;
      classId: string;
      checkInTime: string;
    };
    message: string | null;
    error: boolean;
}
  
export interface CheckoutResponse {
    data: {
      id: string;
      userId: string;
      classId: string;
      checkInTime: string;
      checkOutTime: string;
      feedback: string;
      rating: string;
    };
    message: string | null;
    error: boolean;
}
