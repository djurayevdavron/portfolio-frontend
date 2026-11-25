import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
}

export const sendContactMessage = async (
  data: ContactFormData
): Promise<ContactResponse> => {
  const response = await axios.post<ContactResponse>(`${API_URL}/contact`, data);
  return response.data;
};
