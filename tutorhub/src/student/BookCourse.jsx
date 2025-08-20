import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import config from '../config';
import './bookcourse.css';

export default function BookCourse() {
  const location = useLocation();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(location.search);
  const courseId = queryParams.get('courseid');

  const [student, setStudent] = useState(null);
  const [formData, setFormData] = useState({
    startdate: '',
    enddate: '',
    bookedcapacity: 1,
  });

  useEffect(() => {
    const storedStudent = sessionStorage.getItem('student');
    if (storedStudent) {
      setStudent(JSON.parse(storedStudent));
    } else {
      alert('Student not logged in!');
      navigate('/studentlogin');
    }
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const bookingData = {
      course: { id: courseId },
      student: { id: student.id },
      ...formData,
      status: 1,
    };

    try {
      const response = await fetch(`${config.url}/student/bookcourse`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bookingData),
      });

      if (response.ok) {
        alert('Course booked successfully!');
        navigate('/bookedcourses');
      } else {
        alert('Failed to book course.');
      }
    } catch (error) {
      console.error('Booking error:', error);
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="book-course">
      <div className="main-content">
        <h3>Book Course</h3>
        <form onSubmit={handleSubmit} className="booking-form">
          <div className="form-group">
            <label>Start Date: </label>
            <input
              type="date"
              name="startdate"
              value={formData.startdate}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>End Date: </label>
            <input
              type="date"
              name="enddate"
              value={formData.enddate}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Capacity: </label>
            <input
              type="number"
              name="bookedcapacity"
              min="1"
              value={formData.bookedcapacity}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <button type="submit">Confirm Booking</button>
          </div>
        </form>
      </div>
    </div>
  );
}