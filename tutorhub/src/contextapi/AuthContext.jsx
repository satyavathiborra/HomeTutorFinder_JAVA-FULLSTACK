// import { createContext, useContext, useState, useEffect } from "react";

// const AuthContext = createContext();

// export function AuthProvider({ children }) {
//   const [isTutorLoggedIn, setIsTutorLoggedIn] = useState(false);
//   const [isStudentLoggedIn, setIsStudentLoggedIn] = useState(false);

//   useEffect(() => {
//     localStorage.setItem('isTutorLoggedIn', isTutorLoggedIn);
//     localStorage.setItem('isStudentLoggedIn', isStudentLoggedIn);
//   }, [isTutorLoggedIn, isStudentLoggedIn]);

//   return (
//     <AuthContext.Provider
//       value={{
//         isTutorLoggedIn,
//         setIsTutorLoggedIn,
//         isStudentLoggedIn,
//         setIsStudentLoggedIn,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// }

// export const useAuth = () => useContext(AuthContext);
import { createContext, useState, useContext, useEffect } from 'react';

// Create the context
const AuthContext = createContext();

// Provider component to manage login states and user data
export function AuthProvider({ children }) 
{
  // Load initial state from localStorage or default to false/null
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(() => {
    return localStorage.getItem('isAdminLoggedIn') === 'true';
  });

  const [isStudentLoggedIn, setIsStudentLoggedIn] = useState(() => {
    return localStorage.getItem('isStudentLoggedIn') === 'true';
  });
  
//   const [isManagerLoggedIn, setIsManagerLoggedIn] = useState(() => {
//     return localStorage.getItem('isManagerLoggedIn') === 'true';
//   });

  // Save state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('isAdminLoggedIn', isAdminLoggedIn);
    localStorage.setItem('isStudentLoggedIn', isStudentLoggedIn);
    // localStorage.setItem('isManagerLoggedIn', isManagerLoggedIn);
  }, [isAdminLoggedIn, isStudentLoggedIn]);

  return (
    <AuthContext.Provider
      value={{
        isAdminLoggedIn,
        setIsAdminLoggedIn,
        isStudentLoggedIn,
        setIsStudentLoggedIn,
        // isManagerLoggedIn,
        // setIsManagerLoggedIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook to access the context
export const useAuth = () => useContext(AuthContext);