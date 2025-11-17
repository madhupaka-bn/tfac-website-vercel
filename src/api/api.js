// mockApi.js
import axios from 'axios';

const serverUrl = import.meta.env.VITE_SERVER_URL;


export const createOrder = async (data) => {
  try {
    // Simulate backend Razorpay order creation
    const response = await axios.post(`${serverUrl}/tfac/add-order`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log(response, "RESPONSE") ; 

    return response?.data ;

  } catch (error) {
    console.error("Error creating order:", error);
    throw error;
  }
};



export const verifyPayment = async (paymentData) => {
  console.log("Verifying payment on backend:", paymentData);
  const response = await axios.post(`${serverUrl}/tfac/verify-payment`, paymentData);
  return response?.data ;
};
