import { useState, useEffect } from 'react';
import './StudentProfile.css';

export default function StudentProfile() {
  const [student, setStudent] = useState('');

  useEffect(() => {
    const storedStudent = sessionStorage.getItem('student');
    if (storedStudent) {
      setStudent(JSON.parse(storedStudent));
    }
  }, []);

  if (!student) {
    return (
      <div className="student-profile">
        <div className="main-content">
          <div className="loading">Loading profile...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="student-profile">
      <div className="main-content">
        <h2>Student Profile</h2>
        <div className="profile-card">
          <p><strong>Name:</strong> <span>{student.name}</span></p>
          <p><strong>Gender:</strong> <span>{student.gender}</span></p>
          <p><strong>Date of Birth:</strong> <span>{student.dob}</span></p>
          <p><strong>Email:</strong> <span>{student.email}</span></p>
          <p><strong>Username:</strong> <span>{student.username}</span></p>
          <p><strong>Contact No:</strong> <span>{student.contactno}</span></p>
          <p><strong>Location:</strong> <span>{student.location}</span></p>
        </div>
      </div>
    </div>
  );
}
