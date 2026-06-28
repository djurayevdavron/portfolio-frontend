import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const sendContactMessage = async (data: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) => {
  const response = await axios.post(`${API_URL}/contact`, data);

  return response.data;
};
