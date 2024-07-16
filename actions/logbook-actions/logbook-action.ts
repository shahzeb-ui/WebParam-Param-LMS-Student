import { CheckinResponse, CheckoutResponse, CHECKIN_URL, CHECKOUT_URL, GET_LOGBOOKS_URL, Logbook} from "@/interfaces/logbook-interface/logbook-interface"
//The end points for the logbook
export const CheckIn = async (userId: string, classId: string): Promise<CheckinResponse> => {
    try {
        const response = await fetch(CHECKIN_URL, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({userId, classId})
        })
        if (!response.ok) {
            throw new Error("Failed to check in.");
        }
        const data = response.json();
        console.log("check in data: ", data);
        return data
    } catch (error) {
        console.log("checking-in error: ", error)
        throw error;
    }   
}

export const CheckOut = async (id: string, feedback: string, rating: string, classId: string): Promise<CheckoutResponse> => {
    try {
      const response = await fetch(CHECKOUT_URL, {
        method: 'POST',
        headers: {
          'Accept': 'text/plain',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id, feedback, rating, classId }),
      });
  
      if (!response.ok) {
        throw new Error('Failed to check out');
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Check-out error:", error);
      throw error;
    }
};

export const getLogbooks = async (userId: string): Promise<Logbook[]> => {
  try {
      const response = await fetch(`${GET_LOGBOOKS_URL}${userId}`, {
          method: 'GET',
          headers: {
              'Accept': 'text/plain',
          },
      });

      if (!response.ok) {
          throw new Error('Failed to fetch logbooks');
      }

      const data = await response.json();
      console.log("get logbooks data: ", data);
      return data.data;
  } catch (error) {
      console.error('Error fetching logbooks:', error);
      throw error;
  }
};


import { CheckinResponse, CheckoutResponse, CHECKIN_URL, CHECKOUT_URL } from "@/interfaces/logbook-interface/logbook-interface"
//The end points for the logbook
export const CheckIn = async (userId: string, classId: string): Promise<CheckinResponse> => {
    try {
        const response = await fetch(CHECKIN_URL, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({userId, classId})
        })
        if (!response.ok) {
            throw new Error("Failed to check in.");
        }
        const data = response.json();
        console.log("check in data: ", data);
        return data
    } catch (error) {
        console.log("checking-in error: ", error)
        throw error;
    }   
}

export const CheckOut = async (id: string, feedback: string, rating: string, classId: string): Promise<CheckoutResponse> => {
    try {
      const response = await fetch(CHECKOUT_URL, {
        method: 'POST',
        headers: {
          'Accept': 'text/plain',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id, feedback, rating, classId }),
      });
  
      if (!response.ok) {
        throw new Error('Failed to check out');
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Check-out error:", error);
      throw error;
    }
  };