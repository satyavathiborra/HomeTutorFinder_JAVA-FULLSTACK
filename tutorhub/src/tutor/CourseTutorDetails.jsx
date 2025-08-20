import { useParams } from 'react-router-dom';

export default function CourseTutorDetails() {
    const { subject } = useParams();

    const tutors = [
        { name: "John Doe", rating: 4.8, experience: "5 years" },
        { name: "Jane Smith", rating: 4.9, experience: "7 years" },
    ];

    return (
        <div style={{ padding: '2rem', fontFamily: "'Inter', sans-serif" }}>
            <h1 style={{ fontSize: '2rem', fontWeight: '700' }}>
                {subject.charAt(0).toUpperCase() + subject.slice(1)} Course & Tutor Details
            </h1>
            <div style={{ marginTop: '2rem' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '600' }}>Available Tutors</h3>
                {tutors.map((tutor, index) => (
                    <div
                        key={index}
                        style={{
                            padding: '1rem',
                            margin: '1rem 0',
                            border: '1px solid #ccc',
                            borderRadius: '5px',
                        }}
                    >
                        <h4>{tutor.name}</h4>
                        <p>Rating: {tutor.rating} ★</p>
                        <p>Experience: {tutor.experience}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}