import React, { useState } from "react";
import { useAppSelector, useAppDispatch } from "../../../hooks/hooksRedux";
import { Employee } from "../../../middlewares/employees/add";
import { setEmployee } from "../../../middlewares/employees/edit";

interface Props {
  selectedEmployee: any;
  refresh: any
}

const EditEmployee = ({ selectedEmployee, refresh }: Props) => {
  const dispatch = useAppDispatch();
  const id = selectedEmployee.id;

  const [employeeData, setEmployeeData] = useState({
    id: selectedEmployee.id,
    firstName: selectedEmployee.firstName,
    lastName: selectedEmployee.lastName,
    role: selectedEmployee.role,
    email: selectedEmployee.email,
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setEmployeeData({
      ...employeeData,
      [name]: value,
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setEmployee(id, employeeData);
    setEmployeeData({
      id: "",
      firstName: "",
      lastName: "",
      role: "",
      email: "",
    });
    refresh()
  };

  React.useEffect(()=>{
    setEmployeeData(selectedEmployee)
  }, [selectedEmployee])

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={employeeData.firstName}
            onChange={handleInputChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={employeeData.lastName}
            onChange={handleInputChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Role:
          <input
            type="text"
            name="role"
            value={employeeData.role}
            onChange={handleInputChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          email:
          <input
            type="text"
            name="email"
            value={employeeData.email}
            onChange={handleInputChange}
            required
          />
        </label>
      </div>
      <button type="submit">Update employee</button>
    </form>
  );
};

export default EditEmployee;
