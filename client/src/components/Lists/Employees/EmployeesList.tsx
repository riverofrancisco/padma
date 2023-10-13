import * as React from "react";
import { getEmployees } from "../../../middlewares/employees/get";
import { deleteEmployee } from "../../../middlewares/employees/delete";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooksRedux";
import { employeeSelector, employeesUpdater } from "../../../redux/reducer/actions";

const EmployeesList: React.FC = () => {
  const dispatch = useAppDispatch();
  const employees = useAppSelector((state) => state.global.employees);
  
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
    const selectedEmployee = employees.filter((employee: any)=> employee.id === id);
    dispatch(employeeSelector(selectedEmployee))
  }

  React.useEffect(() => {
    getData();
  }, []);
  return employees[0] ? (
    employees.map((emp: any) => (
      <div key={emp.id}>
        <div>{emp.role}</div>
        <div>{emp.firstName}</div>
        <div>{emp.lastName}</div>
        <div>{emp.email}</div>

        <button value={emp.id} onClick={()=> handleEdit(emp.id)} >Edit</button>
        <button value={emp.id} onClick={()=> handleDelete(emp.id)}>X</button>
      </div>
    ))
  ) : (
    <div>Loading...</div>
  );
};

export default EmployeesList;
