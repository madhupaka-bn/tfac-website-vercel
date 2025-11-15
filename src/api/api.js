// mockApi.js
export const createOrder = async (amount) => {
  // Simulate backend Razorpay order creation
  return {
    id: "order_" + Math.random().toString(36).substr(2, 9),
    amount: amount * 100, // in paise
    currency: "INR",
  };
};

export const verifyPayment = async (paymentData) => {
  console.log("Verifying payment on backend:", paymentData);
  return { success: true };
};
