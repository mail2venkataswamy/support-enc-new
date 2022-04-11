import React, { useState } from "react";
import "./styles.scss";
import Container from "./components/container.jsx";
import StProvider from "../../components/provider/futures-provider1.jsx";

const vepr = () => {
  const [isFilterPanelVisble, toggleFilterPanel] = useState(true);
  return (
    <StProvider>
      <Container></Container>
    </StProvider>
  );
};

export default vepr;
