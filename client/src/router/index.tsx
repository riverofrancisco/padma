import { Routes, Route } from "react-router-dom";
import EmployeesList from "../components/Lists/Employees/EmployeesList";
import CreateEmployee from "../components/Forms/Employees/CreateEmployee";
import EditEmployee from "../components/Forms/Employees/EditEmployee";

export const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path={`/`} element={<CreateEmployee />} />
      </Routes>
      <EmployeesList />
      <EditEmployee />
    </div>
  );
};
