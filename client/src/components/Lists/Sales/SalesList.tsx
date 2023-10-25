import * as React from "react";
import { getSales } from "../../../middlewares/sales/get";
import { deleteSale } from "../../../middlewares/sales/delete";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooksRedux";
import { saleSelector, salesUpdater } from "../../../redux/reducer/actions";
import EditEmployee from "../../Forms/Employees/EditEmployee";
import LogoutButton from "../../Forms/Login/Logout";
import { Link } from "react-router-dom";

import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  IconButton

} from "@mui/material/";
import DeleteIcon from '@mui/icons-material/Delete';

interface Props {
  setIsAuthenticated: any;
}

interface Column {
  id: "name" | "address" | "model" | "colour" | "lateral" | "isDelivered";
  label: string;
  minWidth?: number;
  align?: "right" | "center" | "left";
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: "name", label: "Full Name",  align: "left",  minWidth: 170 },
  { id: "address", label: "Address", align: "left", minWidth: 100 },
  {
    id: "model",
    label: "Model",
    minWidth: 170,
    align: "center",
    format: (value: number) => value.toLocaleString("en-US"),
  },
  {
    id: "colour",
    label: "Colour",
    minWidth: 170,
    align: "center",
    format: (value: number) => value.toLocaleString("en-US"),
  },
  {
    id: "lateral",
    label: "With Lateral",
    minWidth: 170,
    align: "center",
    format: (value: number) => value.toFixed(2),
  },
  {
    id: "isDelivered",
    label: "Estado",
    minWidth: 170,
    align: "center",
    format: (value: number) => value.toFixed(2),
  },
];

const SalesList = ({ setIsAuthenticated }: Props) => {
  const dispatch = useAppDispatch();
  const sales = useAppSelector((state) => state.global.sales.list);

  const getData = async () => {
    const emp = await getSales();
    dispatch(salesUpdater(emp));
  };

  const handleDelete = (id: string) => {
    const filteredSales = sales.filter((sale: any) => sale.id !== id);
    dispatch(salesUpdater(filteredSales));
    deleteSale(id);
  };

  const handleEdit = (id: string) => {
    const saleToEdit = sales.filter((sale: any) => sale.id === id)[0];
    dispatch(saleSelector(saleToEdit));
  };

  React.useEffect(() => {
    getData();
  }, []);

  return sales[0] ? (
    <Box sx={{display: "flex", flexDirection:"column", alignItems: "center"}}>
    <Box sx={{py:2, display: "flex", justifyContent:"space-between", width:"40%"}}><Link to={"/addSale"}>
        <Button variant="contained">Add New Sale</Button>
      </Link>
      <LogoutButton setIsAuthenticated={setIsAuthenticated} />
      </Box>  
      <Paper sx={{ width: "90%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <TableHead>
            <TableRow>
            
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
              <TableCell
              key="actions"
              align="center"
              style={{ minWidth: 100}}
            >
              Actions
            </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {sales.map((row: any) => {
              return (
                <TableRow
                  hover
                  style={{
                    height: 20,
            
                  }}
                  role="checkbox"
                  tabIndex={-1}
                  key={row.client.name}
                  
                >
                  
                
                  <TableCell key={row.id} align={"left"}>
                  {row.client.lastName}, {row.client.name}
                  </TableCell>
                  <TableCell key={row.id} align={"left"}>{row.client.address}</TableCell>
                  <TableCell key={row.id} align={"center"}>{row.cart[0].model}</TableCell>
                  <TableCell key={row.id} align={"center"}>{row.cart[0].colour}</TableCell>
                  <TableCell key={row.id} align={"center"}>{row.cart[0].lateral ? "Sí" : ""}</TableCell>
                  <TableCell key={row.id} align={"center"}>
                    {row.isDelivered ? "Entregado" : "Pendiente de Entrega"}
                  </TableCell >
                  <Box sx={{ display: "flex",  alignItems: "center", py:1}}>
                  <Link to={"/updateSale"}>
                    <Button
                      variant="contained"
                      color="secondary"
                      value={row.id}
                      onClick={() => handleEdit(row.id)}
                      size="small"
                      sx={{borderRadius: 5, mx: 0.5}}
                    >
                      Edit
                    </Button>
                  </Link>
                  <IconButton
                    value={row.id}
                    onClick={() => handleDelete(row.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                  </Box>
                </TableRow>
              );
            })}
          </TableBody>
        </TableContainer>
      </Paper>

    </Box>
  ) : (
    <div>Loading...</div>
  );
};

export default SalesList;
