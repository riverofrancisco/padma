import React from "react";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "../components/Landing/Landing";
import ProductForm from "../components/CreationForm";
import CheckboxList from "../components/ProductsList";

export const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path={`/`} element={<ProductForm />} />
      </Routes>
      <CheckboxList />
    </div>
  );
};
