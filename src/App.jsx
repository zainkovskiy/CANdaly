import React from "react";

import "./App.scss";

import { LayoutContext } from "components/LayoutContext";
import { Layout } from "components/Layout";

export const App = () => {
  return (
    <LayoutContext>
      <Layout />
    </LayoutContext>
  );
};
