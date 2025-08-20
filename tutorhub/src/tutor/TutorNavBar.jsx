import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import config from '../config';
import { useAuth } from '../contextapi/AuthContext';

export default function TutorLogin() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();
  const { setIsTutorLoggedIn } = useAuth();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${config.url}/tutor/checktutorlogin`, formData);

      // Axios only hits this if response is 2xx
      setIsTutorLoggedIn(true);
      sessionStorage.setItem('tutor', JSON.stringify(response.data));
      navigate('/tutorhome');
    } catch (error) {
      setMessage('');
      if (error.response && error.response.data) {
        setError(error.response.data);
      } else {
        setError('An unexpected error occurred.');
      }
    }
  };

  return (
    <div className="main-content">
      <div className="tutor-login-container">
        <form onSubmit={handleSubmit} className="tutor-login-form">
          <h3 style={{ textAlign: 'center', textDecoration: 'underline' }}>Tutor Login</h3>

          {message && <p style={{ color: 'green', textAlign: 'center' }}>{message}</p>}
          {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}

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

          <button type="submit" className="button">Login</button>
        </form>
      </div>
    </div>
  );
}
