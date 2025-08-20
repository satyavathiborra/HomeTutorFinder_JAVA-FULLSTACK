import { useState } from 'react';
import './StudentLogin.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import config from '../config';
import { useAuth } from '../contextapi/AuthContext';

export default function StudentLogin() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();
  const { setIsStudentLoggedIn } = useAuth();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${config.url}/student/checkstudentlogin`, formData);

      if (response.status === 200) {
        setIsStudentLoggedIn(true);
        sessionStorage.setItem('student', JSON.stringify(response.data));
        navigate('/studenthome');
      } else {
        setMessage(response.data);
      }
    } catch (err) {
      if (err.response) {
        setError(err.response.data);
      } else {
        setError('An unexpected error occurred.');
      }
    }
  };

  return (
    <div className="student-login-container">
      <form onSubmit={handleSubmit} className="student-login-form">
        <h3>Student Login</h3>

        {message && <p className="message success">{message}</p>}
        {error && <p className="message error">{error}</p>}

        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Login</button>

        <p className="switch-link">
          Don't have an account?{' '}
          <span onClick={() => navigate('/studentregister')} style={{ color: 'blue', cursor: 'pointer' }}>
            Register here
          </span>
        </p>
      </form>
    </div>
  );
}
