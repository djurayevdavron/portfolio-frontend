import axios from "axios";
import type { Project } from "../types/project";

const API_URL = import.meta.env.VITE_API_URL;

export const getProjects = async (): Promise<Project[]> => {
  const response = await axios.get(`${API_URL}/projects`);
  return response.data;
};

export const getProjectById = async (id: string): Promise<Project> => {
  const response = await axios.get(`${API_URL}/projects/${id}`);
  return response.data;
};
