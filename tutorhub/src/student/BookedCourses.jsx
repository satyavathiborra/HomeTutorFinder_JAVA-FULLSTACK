import React from 'react';
import './BookedCourses.css'; // Optional CSS
import { FaEdit, FaTrashAlt } from 'react-icons/fa'; // Adding icons

export default function BookedCourses() {
  const bookedCourses = [
    {
      id: 1,
      title: "Mathematics - Algebra & Geometry",
      tutor: "Mr. John Doe",
      date: "2025-05-15",
      time: "10:00 AM - 11:30 AM",
      status: "Upcoming"
    },
    {
      id: 2,
      title: "Physics - Mechanics",
      tutor: "Ms. Jane Smith",
      date: "2025-05-17",
      time: "2:00 PM - 3:30 PM",
      status: "Upcoming"
    },
    {
      id: 3,
      title: "English Literature - Poetry Analysis",
      tutor: "Mr. Alan Brown",
      date: "2025-05-20",
      time: "5:00 PM - 6:00 PM",
      status: "Completed"
    }
  ];

  return (
    <div className="booked-courses">
      <h2>My Booked Courses</h2>
      {bookedCourses.length > 0 ? (
        <ul className="course-list">
          {bookedCourses.map(course => (
            <li key={course.id} className={`course-card ${course.status.toLowerCase()}`}>
              <div className="course-header">
                <h3>{course.title}</h3>
                <span className="status-label">{course.status}</span>
              </div>
              <p><strong>Tutor:</strong> {course.tutor}</p>
              <p><strong>Date:</strong> {course.date}</p>
              <p><strong>Time:</strong> {course.time}</p>
              <div className="actions">
                <button className="action-btn edit-btn"><FaEdit /></button>
                <button className="action-btn delete-btn"><FaTrashAlt /></button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No courses booked yet.</p>
      )}
    </div>
  );
}
