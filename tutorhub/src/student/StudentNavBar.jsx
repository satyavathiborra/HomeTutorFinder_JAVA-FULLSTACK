import { Routes, Route, Link, useLocation } from 'react-router-dom';
import './StudentNavBar.css';
import StudentHome from './StudentHome';
import StudentLogin from './StudentLogin';
import StudentProfile from './StudentProfile';
import UpdateProfile from './UpdateProfile';
import BookCourse from './BookCourse';
import BookedCourses from './BookedCourses';
import ViewAllCourses from './ViewAllCourses';
import { useAuth } from '../contextapi/AuthContext';

export default function StudentNavBar() {
  const { setIsStudentLoggedIn } = useAuth();
  const location = useLocation(); // Get the current route

  const handleLogout = () => {
    setIsStudentLoggedIn(false);
    sessionStorage.clear();
  };

  return (
    <div>
      <nav className="navbar">
        <div className="logo">Welcome Student</div>
        <ul className="nav-links">
          <li><Link to="/studenthome">Home</Link></li>
          <li><Link to="/studentprofile">Student Profile</Link></li>
          <li><Link to="/updateprofile">Update Profile</Link></li>
          <li><Link to="/viewallcourses">Book a New Course</Link></li>
          <li><Link to="/bookedcourses">Booked Courses</Link></li>
          <li><Link to="/studentlogin" onClick={handleLogout}>Logout</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/studenthome" element={<StudentHome />} />
        <Route path="/studentlogin" element={<StudentLogin />} />
        <Route path="/studentprofile" element={<StudentProfile />} />
        <Route path="/updateprofile" element={<UpdateProfile />} />
        <Route path="/viewallcourses" element={<ViewAllCourses />} />
        <Route path="/bookcourse" element={<BookCourse />} />
        <Route path="/bookedcourses" element={<BookedCourses />} />
      </Routes>

      {/* Conditionally render the main-content only on /studenthome */}
      {location.pathname === '/studenthome' && (
        <div className="main-content">
          <div className="section">
            <h2>Welcome to student Dashboard</h2>
          </div>
        </div>
      )}
    </div>
  );
}