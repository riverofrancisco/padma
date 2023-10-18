import { Routes, Route } from "react-router-dom";
import React, {useState, useEffect} from "react";
import EmployeesList from "../components/Lists/Employees/EmployeesList";
import CreateEmployee from "../components/Forms/Employees/CreateEmployee";
import EditEmployee from "../components/Forms/Employees/EditEmployee";
import LoginForm from "../components/Forms/Login/Login";

export const AppRouter = () => {

  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const isAuthenticatedString = localStorage.getItem('is_authenticated');

if (isAuthenticatedString !== null) {
  const isAuthenticated = JSON.parse(isAuthenticatedString);
  setIsAuthenticated(isAuthenticated);
} else {
  // Handle the case where 'is_authenticated' is not present in localStorage
  // For example, you might want to set a default value for 'isAuthenticated'.
  setIsAuthenticated(null); // Or any other default value you prefer.
}
  }, []);



  return (
    <div>
      {isAuthenticated ?<Routes>
        <Route path={`/createEmployee`} element={<CreateEmployee />} />
      
        <Route path={`/`} element={<EmployeesList setIsAuthenticated={setIsAuthenticated}/>} />
        
      </Routes>: <LoginForm setIsAuthenticated={setIsAuthenticated} />  }
      
      
    </div>
  );
};
