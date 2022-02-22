import React, { useState } from "react";
import "./styles.scss";
import Container from "./components/container.jsx";
import FuturesProvider from "../../components/provider/futures-provider.jsx";

const vepr = () => {
  const [isFilterPanelVisble, toggleFilterPanel] = useState(true);
  return (
    <FuturesProvider>
      <Container></Container>
    </FuturesProvider>
  );
};

export default vepr;
