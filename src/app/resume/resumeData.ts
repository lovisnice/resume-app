import { Resume } from "./IResume";
import { Education } from "./IEducation";
export const resumeData = {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '555-555-5555',
    dateOfBirth: new Date('1990-01-15'),
    salary: 75000,
    experienceYears: 5,
    skills: ['JavaScript', 'Angular', 'HTML', 'CSS'],
    education: [
      {
        institution: 'University of XYZ',
        degree: 'Bachelor of Science in Computer Science',
        graduationYear: 2012,
      },
    ],
    // Add more fields as needed
  };
  