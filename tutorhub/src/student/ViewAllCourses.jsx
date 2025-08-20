import React, { useState } from 'react';
import './ViewAllCourses.css';

const coursesData = [
  { id: 1, name: 'Web Development', price: 5000, description: 'Learn how to build websites and web apps.', duration: '3 months', instructor: 'John Doe' },
  { id: 2, name: 'Data Science', price: 7000, description: 'Master data analysis, machine learning, and more.', duration: '6 months', instructor: 'Jane Smith' },
  { id: 3, name: 'Machine Learning', price: 9000, description: 'Deep dive into machine learning algorithms.', duration: '4 months', instructor: 'Albert Einstein' },
];

export default function ViewAllCourses() {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: '',
    cardholderName: '',
    expiry: '',
    cvv: '',
    billingAddress: '',
    paymentMethod: 'creditCard',
  });
  const [paymentHistory, setPaymentHistory] = useState([]);

  const handleCourseClick = (course) => {
    setSelectedCourse(course);
    setShowPaymentForm(false);
    setPaymentSuccess(false);
  };

  const handlePayNowClick = () => {
    setShowPaymentForm(true);
  };

  const handleInputChange = (e) => {
    setPaymentDetails({ ...paymentDetails, [e.target.name]: e.target.value });
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setPaymentSuccess(true);
      setShowPaymentForm(false);
      setPaymentHistory([
        ...paymentHistory,
        { course: selectedCourse.name, price: selectedCourse.price, date: new Date().toLocaleString() },
      ]);
    }, 1000);
  };

  return (
    <div className="view-all-courses">
      <div className="main-content">
        <div className="course-payment-horizontal">
          <div className="course-list-section">
            <h2>Available Courses</h2>
            <ul className="course-list">
              {coursesData.map((course) => (
                <li key={course.id}>
                  <button onClick={() => handleCourseClick(course)} className="course-button">
                    {course.name} - ₹{course.price}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="course-details-section">
            {selectedCourse && !showPaymentForm && !paymentSuccess && (
              <div className="selected-course">
                <h3>{selectedCourse.name}</h3>
                <p><strong>Description:</strong> {selectedCourse.description}</p>
                <p><strong>Duration:</strong> {selectedCourse.duration}</p>
                <p><strong>Instructor:</strong> {selectedCourse.instructor}</p>
                <p>Price: ₹{selectedCourse.price}</p>
                <button onClick={handlePayNowClick} className="pay-now-btn">
                  Pay Now
                </button>
              </div>
            )}

            {showPaymentForm && (
              <form onSubmit={handlePaymentSubmit} className="payment-form">
                <h4>Enter Payment Details</h4>
                <input
                  type="text"
                  name="cardholderName"
                  placeholder="Cardholder Name"
                  value={paymentDetails.cardholderName}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="text"
                  name="cardNumber"
                  placeholder="Card Number"
                  value={paymentDetails.cardNumber}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="text"
                  name="expiry"
                  placeholder="Expiry Date (MM/YY)"
                  value={paymentDetails.expiry}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="text"
                  name="cvv"
                  placeholder="CVV"
                  value={paymentDetails.cvv}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="text"
                  name="billingAddress"
                  placeholder="Billing Address"
                  value={paymentDetails.billingAddress}
                  onChange={handleInputChange}
                  required
                />
                <label>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="creditCard"
                    checked={paymentDetails.paymentMethod === 'creditCard'}
                    onChange={handleInputChange}
                  />
                  Credit Card
                </label>
                <label>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="paypal"
                    checked={paymentDetails.paymentMethod === 'paypal'}
                    onChange={handleInputChange}
                  />
                  PayPal
                </label>
                <p><strong>Amount to Pay:</strong> ₹{selectedCourse ? selectedCourse.price : 0}</p>
                <button type="submit">Submit Payment</button>
              </form>
            )}

            {paymentSuccess && (
              <div className="success-message">
                ✅ Payment Successful!
                <p>You have successfully enrolled in {selectedCourse.name}.</p>
              </div>
            )}
          </div>

          <div className="payment-history-section">
            <h3>Payment History</h3>
            <ul>
              {paymentHistory.length === 0 ? (
                <li>No payments made yet.</li>
              ) : (
                paymentHistory.map((payment, index) => (
                  <li key={index}>
                    <p>{payment.course} - ₹{payment.price} - {payment.date}</p>
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}