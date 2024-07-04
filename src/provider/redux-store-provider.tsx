"use client";

import store from "@/store/store";
import React, { ReactNode } from "react";
import { Provider } from "react-redux";

const ReduxStoreProvider = ({ children }: { children: ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxStoreProvider;
