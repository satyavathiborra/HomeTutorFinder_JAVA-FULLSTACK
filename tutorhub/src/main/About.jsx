// // import './style.css'; 
// export default function About() 
// {
//   return (
//     <div style={{ textAlign: 'center', marginTop: '20px' }}>
//       <h4>I am in About Page</h4>
//       <img 
//         src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png" 
//         alt="About Image"
//         style={{ width: '200px', marginTop: '20px' }} 
//       />
//     </div>
//   );
// }
// import './About.css';

export default function About() {
  return (
    <div className="about-container">
      <h2 className="about-title">About Home Tutor Finder</h2>

      <p className="about-description">
        Home Tutor Finder is your trusted platform designed to connect students with highly qualified and verified tutors across various subjects and levels. Whether you're preparing for exams, improving academic performance, or learning a new skill, our platform ensures personalized one-on-one tutoring at your convenience.
      </p>

      <h3 className="about-subheading">Key Benefits</h3>
      <ul className="benefits-list">
        <li>📘 <strong>Personalized Learning:</strong> Tailor-made lessons to match each student's pace and learning style.</li>
        <li>🧑‍🏫 <strong>Qualified Tutors:</strong> All tutors are verified, experienced, and passionate educators.</li>
        <li>🏠 <strong>Learn from Home:</strong> Study safely and comfortably with in-home or online tutoring options.</li>
        <li>⏰ <strong>Flexible Scheduling:</strong> Book sessions at times that work best for you.</li>
        <li>💰 <strong>Affordable Plans:</strong> High-quality education that doesn’t break the bank.</li>
        <li>📈 <strong>Progress Tracking:</strong> Monitor improvement with regular feedback and session reports.</li>
      </ul>

      <div className="about-call-to-action">
        <h4>Join thousands of students achieving academic success through Home Tutor Finder.</h4>
        <p>Start your journey with us today!</p>
      </div>
    </div>
  );
}