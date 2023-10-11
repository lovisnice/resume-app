import { Education } from "./IEducation";

export interface Resume {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: Date;
  salary: number;
  experienceYears: number;
  skills: string[];
  education: Education[];
  // Add more fields as needed
}