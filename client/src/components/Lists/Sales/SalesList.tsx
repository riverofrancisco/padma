import * as React from "react";
import { getSales } from "../../../middlewares/sales/get";
import { deleteSale } from "../../../middlewares/sales/delete";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooksRedux";
import { saleSelector, salesUpdater } from "../../../redux/reducer/actions";
import EditEmployee from "../../Forms/Employees/EditEmployee";
import LogoutButton from "../../Forms/Login/Logout";
import { Link } from "react-router-dom";

import { Box, Button } from "@mui/material/";

interface Props {
  setIsAuthenticated: any;
}

const SalesList = ({ setIsAuthenticated }: Props) => {
  const dispatch = useAppDispatch();
  const sales = useAppSelector((state) => state.global.sales.list)

  const getData = async () => {
    const emp = await getSales();
    dispatch(salesUpdater(emp));
  };

  const handleDelete = (id: string) => {
    const filteredSales = sales.filter((employee: any) => employee.id !== id);
    dispatch(salesUpdater(filteredSales));
    deleteSale(id);
  };

  const handleEdit = (id: string) => {
    const employeeToEdit = sales.filter(
      (employee: any) => employee.id === id
    )[0];
    dispatch(saleSelector(employeeToEdit));
  };

  React.useEffect(() => {
    getData();
  }, []);

  return sales[0] ? (
    <div>
      <Link to={"/addSale"}>
        <Button variant="contained">Add New Sale</Button>
      </Link>
      <LogoutButton setIsAuthenticated={setIsAuthenticated} />
      {sales.map((sale: any) => (
        <div key={sale.id}>
          Client Info
          <div>{sale.client.name}</div>
          <div>{sale.client.lastName}</div>
          <div>{sale.client.address}</div>
          Product Info
          <div>{sale.cart[0].model}</div>
          <div>{sale.cart[0].colour}</div>
          <div>{sale.cart[0].lateral}</div>
          <div>{sale.isDelivered}</div>
          <Link to={"/updateSale"}>
            <Button variant="contained" color="secondary" value={sale.id} onClick={() => handleEdit(sale.id)}>
              Edit
            </Button>
          </Link>
          <Button variant="outlined" color="secondary"  value={sale.id} onClick={() => handleDelete(sale.id)}>
            X
          </Button>
        </div>
      ))}
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default SalesList;
