import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// component
import { HomePages } from "component/pages/homePages";
import { DetailPages } from "component/pages/detailPages";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/detail" element={<DetailPages />} />
      </Routes>
    </BrowserRouter>
  );
};
