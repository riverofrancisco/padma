import React, { useState } from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import { useAppSelector, useAppDispatch } from "../../../hooks/hooksRedux";
import { salesUpdater } from "../../../redux/reducer/actions";
import { Link, useNavigate } from "react-router-dom";
import {
  Sale,
  Product,
  Client,
  provinciasArgentinas,
} from "../../../interfaces/interfaces";
import { addSale } from "../../../middlewares/sales/add";
import { current } from "@reduxjs/toolkit";

import {
  blankClient,
  blankSaleState,
  blankProduct,
} from "../../../interfaces/interfaces";
import {
  Box,
  InputAdornment,
  TextField,
  Button,
  FilledInput,
  FormHelperText,
  FormControl,
  Switch,
  FormControlLabel,
  Autocomplete,
  Stack,
  Grid,
} from "@mui/material/";

const AddSale: React.FC = () => {
  const defaultProvince = {
    options: provinciasArgentinas,
    getOptionLabel: (option: any) => option.title,
  };

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const sales = useAppSelector((state) => state.global.sales.list);

  const [clientData, setClientData] = useState<Client>(blankClient);
  const [deliveryData, setDeliveryData] = useState(blankSaleState.delivery);
  const [productData, setProductData] = useState<Product>(blankProduct);
  const [saleData, setSaleData] = useState<Sale>(blankSaleState);

  const handleSaleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === "isDelivered") {
      setSaleData({
        ...saleData,
        [name]: !saleData.isDelivered,
      });
    } else {
      setSaleData({
        ...saleData,
        [name]: value,
      });
    }
  };

  const handleProductChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === "lateral") {
      setProductData({
        ...productData,
        lateral: !productData.lateral,
      });
    } else {
      setProductData({
        ...productData,
        [name]: value,
      });
    }
    console.log(saleData.product.lateral);
  };

  const handleClientChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setClientData({
      ...clientData,
      [name]: value,
    });
  };
  const handleDeliveryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setDeliveryData({
      ...deliveryData,
      [name]: value,
    });
    console.log(typeof value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const newSales = [...sales, saleData];
    addSale(saleData);
    dispatch(salesUpdater(newSales));
    setSaleData(blankSaleState);
    navigate("/sales");
  };

  React.useEffect(() => {
    setSaleData({
      ...saleData,
      client: clientData,
      product: productData,
      delivery: deliveryData,
    });
  }, [productData, clientData, deliveryData]);

  return (
    <Grid
      container
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Grid
        item
        sx={{
          px: { xs: "5%", md: "15%" },
          py: "5%",
          mt: 6,
          borderRadius: 3,
          p: 2,
          backgroundColor: "whitesmoke",
        }}
        id="clientInfo"
      >
        <Grid
          item
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <form onSubmit={handleSubmit}>
            Client Info
            <Grid item>
              <TextField
                label="Name"
                type="text"
                name="name"
                value={clientData.name}
                onChange={handleClientChange}
                variant="standard"
                sx={{ my: 2, mx: 1 }}
                required
              />
            </Grid>
            <Grid item>
              <TextField
                label="Last Name"
                type="text"
                name="lastName"
                value={clientData.lastName}
                onChange={handleClientChange}
                variant="standard"
                sx={{ my: 2, mx: 1, width: "45%" }}
                required
              />
            </Grid>
            <Grid item sx={{ display: "flex" }}>
              <Box width="30%">
                <Autocomplete
                  {...defaultProvince}
                  id="province"
                  openOnFocus
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Province"
                      name="province"
                      onChange={handleClientChange}
                      variant="standard"
                    />
                  )}
                  sx={{ my: 2, mx: 1 }}
                />
              </Box>
              <TextField
                label="Location"
                type="text"
                name="location"
                value={clientData.location}
                onChange={handleClientChange}
                variant="standard"
                sx={{ my: 2, mx: 1, width: "30%" }}
                required
              />
              <TextField
                label="Address"
                type="text"
                name="address"
                value={clientData.address}
                onChange={handleClientChange}
                variant="standard"
                sx={{ my: 2, mx: 1, width: "30%" }}
                required
              />
            </Grid>
            <Grid item>
              <TextField
                label="Postal Code"
                type="number"
                name="postalcode"
                value={clientData.postalcode}
                onChange={handleClientChange}
                variant="filled"
                size="small"
                sx={{ my: 2, mx: 0.5, width: "10%" }}
                required
              />

              <TextField
                label="Phone Number"
                type="text"
                name="phone"
                value={clientData.phone}
                onChange={handleClientChange}
                variant="standard"
                sx={{ my: 2, mx: 0.5, width: "30%" }}
                required
              />
            </Grid>
            <Grid item
              sx={{ display: "flex", flexDirection: "column" }}
              id="productInfo"
            >
              Product Info
              <Box>
                <TextField
                  label="Creation Date"
                  type="date"
                  name="date"
                  value={saleData.date}
                  onChange={handleSaleChange}
                  variant="filled"
                  size="small"
                  sx={{ my: 2, mx: 0.5, width: "30%" }}
                  required
                />
                <TextField
                  label="Model"
                  type="text"
                  name="model"
                  value={productData.model}
                  onChange={handleProductChange}
                  variant="filled"
                  size="small"
                  sx={{ my: 2, mx: 0.5, width: "30%" }}
                  required
                />{" "}
              </Box>
              <Box>
                <TextField
                  label="Tela"
                  type="text"
                  name="fabric"
                  value={productData.fabric}
                  onChange={handleProductChange}
                  variant="filled"
                  size="small"
                  sx={{ my: 2, mx: 0.5, width: "30%" }}
                  required
                />
                <TextField
                  label="Colour"
                  type="text"
                  name="colour"
                  value={productData.colour}
                  onChange={handleProductChange}
                  variant="filled"
                  size="small"
                  sx={{ my: 2, mx: 0.5, width: "30%" }}
                  required
                />
              </Box>
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "50%",
                    border: 1,
                  }}
                >
                  <FormControl>
                    <FilledInput
                      type="number"
                      name="height"
                      value={productData.height}
                      onChange={handleProductChange}
                      size="small"
                      sx={{ mx: 0.5 }}
                      endAdornment={
                        <InputAdornment position="end">cm</InputAdornment>
                      }
                      required
                    />{" "}
                    <FormHelperText>Height</FormHelperText>{" "}
                  </FormControl>
                  <FormControl>
                    <FilledInput
                      type="number"
                      name="length"
                      value={productData.length}
                      onChange={handleProductChange}
                      size="small"
                      sx={{ mx: 0.5 }}
                      endAdornment={
                        <InputAdornment position="end">cm</InputAdornment>
                      }
                      required
                    />{" "}
                    <FormHelperText>Length</FormHelperText>{" "}
                  </FormControl>{" "}
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "20%",
                    border: 1,
                  }}
                >
                  <FormControlLabel
                    sx={{ mx: 1 }}
                    control={
                      <Switch
                        name="lateral"
                        checked={productData.lateral}
                        onChange={handleProductChange}
                      />
                    }
                    label="Lateral"
                  />
                  <FormControlLabel
                    sx={{ mx: 1 }}
                    label="Delivered"
                    control={
                      <Switch
                        name="isDelivered"
                        checked={saleData.isDelivered}
                        onChange={handleSaleChange}
                        color="success"
                      />
                    }
                  />
                </Box>
              </Box>
              Delivery Info
              <Box>
                <TextField
                  label="Company"
                  type="text"
                  name="company"
                  value={deliveryData.company}
                  onChange={handleDeliveryChange}
                  variant="filled"
                  size="small"
                  sx={{ my: 2, mx: 0.5, width: "30%" }}
                  required
                />

                <TextField
                  label="Price"
                  type="number"
                  name="cost"
                  value={deliveryData.cost}
                  onChange={handleDeliveryChange}
                  variant="filled"
                  size="small"
                  sx={{ my: 2, mx: 0.5, width: "30%" }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">$</InputAdornment>
                    ),
                  }}
                  required
                />
                <TextField
                  label="Date to Deliver"
                  type="date"
                  name="date"
                  value={deliveryData.date}
                  onChange={handleDeliveryChange}
                  variant="filled"
                  size="small"
                  sx={{ my: 2, mx: 0.5, width: "30%" }}
                  required
                />
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
                <Button type="submit" variant="contained" color="success">
                  Confirm New Sale
                </Button>
                <Link to={"/sales"}>
                  <Button variant="outlined" color="secondary">
                    Go Back To List
                  </Button>
                </Link>
              </Box>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AddSale;
