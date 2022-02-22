import React, { useState } from "react";
import "./styles.scss";
import Container from "./components/container.jsx";
import StProvider from "../../components/provider/peo-provider.jsx";

const vepr = () => {
  const [isFilterPanelVisble, toggleFilterPanel] = useState(true);
  return (
    <StProvider>
      <Container></Container>
    </StProvider>
  );
};

export default vepr;
