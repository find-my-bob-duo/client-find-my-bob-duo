import { Button } from "@mui/material";
import React from "react";
import { Route, Routes } from "react-router-dom";

function RoutesScreen() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/temp" element={<Temp />} />
    </Routes>
  );
}

// 임시 컴퍼넌트
const Home: React.FC = () => {
  return (
    <div>
      home
      <Button variant="text">test</Button>
    </div>
  );
};

const Temp: React.FC = () => {
  return <div>temp</div>;
};

export default RoutesScreen;
