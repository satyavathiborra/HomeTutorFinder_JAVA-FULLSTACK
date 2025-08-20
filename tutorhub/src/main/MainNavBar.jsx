import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import TutorLogin from './../tutor/TutorLogin';
import StudentLogin from './../student/StudentLogin';
import StudentRegister from './../student/StudentRegister';
import AdminLogin from './../admin/AdminLogin';
import './MainNavBar.css';

export default function MainNavBar() {
  return (
    <div>
      <nav className="navbar">
        <div className="logo"><i>TUTORHUB</i></div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li className="dropdown">
            <span>Login ▾</span>
            <ul className="dropdown-menu">
              <li><Link to="/studentlogin">Student</Link></li>
              <li><Link to="/tutorlogin">Tutor</Link></li>
              <li><Link to="/adminlogin">Admin</Link></li>
            </ul>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/studentregister" element={<StudentRegister />} />
        <Route path="/studentlogin" element={<StudentLogin />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/tutorlogin" element={<TutorLogin />} />
          <Route path="/" element={<TutorLogin />} />
      </Routes>
    </div>
  );
}













