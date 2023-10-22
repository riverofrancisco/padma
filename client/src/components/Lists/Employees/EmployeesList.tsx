import * as React from "react";
import { getEmployees } from "../../../middlewares/employees/get";
import { deleteEmployee } from "../../../middlewares/employees/delete";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooksRedux";
import { employeesUpdater } from "../../../redux/reducer/actions";
import EditEmployee from "../../Forms/Employees/EditEmployee";
import LogoutButton from "../../Forms/Login/Logout";

interface Props {
  setIsAuthenticated: any;
}

const EmployeesList = ({ setIsAuthenticated }: Props) => {
  const dispatch = useAppDispatch();
  const employees = useAppSelector((state) => state.global.employees);
  const [selectedEmployee, setSelectedEmployee] = React.useState({ id: "",
  firstName: "",
  lastName: "",
  role: "",
  email: "",})
  
  
  const getData = async () => {
    const emp = await getEmployees();
    dispatch(employeesUpdater(emp));
  };

  const handleDelete = (id: string) => {
    const filteredEmployees = employees.filter((employee: any)=> employee.id !== id)
    dispatch(employeesUpdater(filteredEmployees))
    deleteEmployee(id)
  }

  const handleEdit = (id: string) => {
    const employeeToEdit = employees.filter((employee: any)=> employee.id === id)[0];
    setSelectedEmployee(employeeToEdit)
  }

  React.useEffect(() => {
    getData();
  }, []);
  return employees[0] ? (
    <div>
      <LogoutButton setIsAuthenticated={setIsAuthenticated}/>
{employees.map((emp: any) => (
      <div key={emp.id}>
        <div>{emp.role}</div>
        <div>{emp.firstName}</div>
        <div>{emp.lastName}</div>
        <div>{emp.email}</div>

        <button value={emp.id} onClick={()=> handleEdit(emp.id)} >Edit</button>
        <button value={emp.id} onClick={()=> handleDelete(emp.id)}>X</button>
      </div>
    ))}
    <EditEmployee selectedEmployee={selectedEmployee} refresh={getData}/>
   
    </div>
    
  ) : (
    <div>Loading...</div>
  );
};

export default EmployeesList;
