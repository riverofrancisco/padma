import React, { useState } from "react";
import { useAppSelector, useAppDispatch } from "../../../hooks/hooksRedux";
import { Employee } from "../../../middlewares/employees/add";
import { setEmployee } from "../../../middlewares/employees/edit";



const EditEmployee: React.FC = () => {
  const dispatch = useAppDispatch();
  const currentEmployee = useAppSelector((state) => state.global.selectedEmployee);

  const [employeeData, setEmployeeData] = useState({
    id: currentEmployee.id,
    firstName: currentEmployee.firstName,
    lastName: currentEmployee.lastName,
    role: currentEmployee.role,
    email: currentEmployee.email,
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
    setEmployee(employeeData)
    
  };

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
