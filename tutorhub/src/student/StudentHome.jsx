import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function StudentHome() {
    const [student, setStudent] = useState({ name: '' });
    const [searchQuery, setSearchQuery] = useState("");
    const [isVisible, setIsVisible] = useState(false);
    const [suggestions, setSuggestions] = useState([]);

    const navigate = useNavigate();

    const popularSubjects = [
        { name: "Mathematics", icon: "π" },
        { name: "Science", icon: "⚗" },
        { name: "English", icon: "✍" },
        { name: "Programming", icon: "💻" },
        { name: "History", icon: "🏛" },
        { name: "Languages", icon: "🌍" }
    ];

    useEffect(() => {
        const storedStudent = sessionStorage.getItem('student');
        if (storedStudent) setStudent(JSON.parse(storedStudent));
        setIsVisible(true);
    }, []);

    const handleSearch = (e) => {
        e.preventDefault();
        navigate(searchQuery.trim() ? `/tutors?search=${searchQuery}` : "/tutors");
    };

    const handleLogout = () => {
        sessionStorage.removeItem('student');
        navigate('/login');
    };

    const handleInputChange = (e) => {
        const value = e.target.value;
        setSearchQuery(value);
        const matches = popularSubjects.filter(subject =>
            subject.name.toLowerCase().includes(value.toLowerCase())
        );
        setSuggestions(value.length > 0 ? matches : []);
    };

    const handleSuggestionClick = (subject) => {
        navigate(`/courses/${subject.name.toLowerCase()}`);
    };

    return (
        <div style={{ fontFamily: "'Inter', sans-serif", lineHeight: '1.6', color: '#212529' }}>
            {/* Navigation */}
            <nav style={{
                backgroundColor: '#5c6b73',
                padding: '1rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <div style={{ color: 'white', fontWeight: '700' }}>
                    Welcome {student.name || 'Student'}
                </div>
                <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                    {[
                        { to: '/', label: 'Home' },
                        { to: '/student-profile', label: 'Student Profile' },
                        { to: '/update-profile', label: 'Update Profile' },
                        { to: '/book-course', label: 'Book a New Course' },
                        { to: '/booked-courses', label: 'Booked Courses' },
                    ].map((item, index) => (
                        <Link key={index} to={item.to} style={{ color: 'white', textDecoration: 'none' }}>{item.label}</Link>
                    ))}
                    <button
                        onClick={handleLogout}
                        style={{
                            background: 'none',
                            border: 'none',
                            color: 'white',
                            cursor: 'pointer',
                            fontSize: '1rem'
                        }}
                        aria-label="Logout"
                    >
                        Logout
                    </button>
                </div>
            </nav>

            {/* Hero + Search */}
            <div style={{
                padding: '8rem 2rem 4rem',
                background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)'
            }}>
                <h1 style={{ fontSize: '2.5rem', fontWeight: '700', lineHeight: '1.2' }}>
                    <span style={{ color: '#4361ee' }}>Master</span> Your Future with Expert Online Tutors
                </h1>
                <p style={{ fontSize: '1.2rem', color: '#6c757d', margin: '1.5rem 0' }}>
                    Personalized online learning with top-tier educators at your fingertips
                </p>

                {/* 🔍 Search with Suggestions */}
                <form onSubmit={handleSearch} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
                    <input
                        type="text"
                        placeholder="What do you want to learn?"
                        value={searchQuery}
                        onChange={handleInputChange}
                        style={{
                            padding: '0.8rem 1.5rem',
                            borderRadius: '5px',
                            width: '80%',
                            border: '1px solid #ccc',
                            marginBottom: '0.5rem'
                        }}
                        aria-label="Search tutors"
                    />
                    {suggestions.length > 0 && (
                        <ul style={{
                            listStyle: 'none',
                            padding: '0',
                            marginTop: '0',
                            backgroundColor: '#fff',
                            border: '1px solid #ccc',
                            borderRadius: '5px',
                            width: '80%',
                            position: 'absolute',
                            top: '3.4rem',
                            zIndex: 10,
                            maxHeight: '200px',
                            overflowY: 'auto'
                        }}>
                            {suggestions.map((s, index) => (
                                <li key={index}
                                    onClick={() => handleSuggestionClick(s)}
                                    style={{
                                        padding: '0.8rem',
                                        cursor: 'pointer',
                                        borderBottom: '1px solid #eee',
                                        transition: 'background-color 0.2s ease'
                                    }}
                                    onMouseEnter={(e) => e.target.style.backgroundColor = '#f1f1f1'}
                                    onMouseLeave={(e) => e.target.style.backgroundColor = 'white'}
                                >
                                    {s.icon} {s.name}
                                </li>
                            ))}
                        </ul>
                    )}
                    <button
                        type="submit"
                        style={{
                            padding: '0.8rem 1.5rem',
                            backgroundColor: '#4361ee',
                            color: 'white',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer'
                        }}
                    >
                        🔍 Search Tutors
                    </button>
                </form>

                {/* Popular Subjects */}
                <div style={{ marginTop: '3rem', textAlign: 'center' }}>
                    <h3 style={{ fontWeight: '700', fontSize: '1.5rem' }}>Explore Popular Subjects</h3>
                    <div style={{
                        display: 'flex',
                        gap: '1.5rem',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        marginTop: '1.5rem'
                    }}>
                        {popularSubjects.map((subject, index) => (
                            <Link key={index} to={`/courses/${subject.name.toLowerCase()}`} style={{
                                textDecoration: 'none',
                                padding: '1.5rem',
                                backgroundColor: '#f4f4f9',
                                borderRadius: '10px',
                                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                                textAlign: 'center',
                                width: '140px',
                                transition: 'transform 0.2s ease',
                            }}
                                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                            >
                                <div style={{ fontSize: '2rem' }}>{subject.icon}</div>
                                <div style={{ fontSize: '1rem', color: '#333', marginTop: '1rem' }}>{subject.name}</div>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Call-to-Actions */}
                <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', marginTop: '2.5rem' }}>
                    <Link to="/signup" style={{
                        padding: '0.8rem 1.5rem',
                        background: '#4361ee',
                        color: 'white',
                        borderRadius: '5px',
                        fontWeight: '600',
                        textDecoration: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                    }}>
                        Start Learning <span style={{ fontSize: '1.2rem' }}>→</span>
                    </Link>
                    <Link to="/tutors" style={{
                        padding: '0.8rem 1.5rem',
                        border: '1px solid #4361ee',
                        color: '#4361ee',
                        borderRadius: '5px',
                        fontWeight: '600',
                        textDecoration: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                    }}>
                        Browse Tutors <span style={{ fontSize: '1.2rem' }}>→</span>
                    </Link>
                </div>
            </div>

            {/* Greeting Section */}
            <div style={{
                background: 'white',
                padding: '2rem',
                boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                marginTop: '2rem',
                textAlign: 'center'
            }}>
                <h3 style={{ fontWeight: '700', fontSize: '1.5rem' }}>
                    Hello {student.name || 'Student'}
                </h3>
            </div>

            {/* Feature Cards */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '2rem',
                marginTop: '3rem',
                padding: '2rem'
            }}>
                {[
                    { title: "Live Sessions", desc: "Real-time video tutoring", icon: "🎥" },
                    { title: "Flexible Scheduling", desc: "Learn on your time", icon: "⏰" },
                    { title: "Verified Tutors", desc: "Certified experts", icon: "✅" }
                ].map((feature, index) => (
                    <div key={index} style={{
                        backgroundColor: '#f8f9fa',
                        padding: '2rem',
                        borderRadius: '10px',
                        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                        textAlign: 'center',
                        transition: 'transform 0.3s ease',
                    }}
                        onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-5px)'}
                        onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
                    >
                        <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{feature.icon}</div>
                        <h4 style={{ fontWeight: '700' }}>{feature.title}</h4>
                        <p>{feature.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
