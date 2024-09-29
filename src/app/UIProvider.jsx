"use client";
import * as React from "react";
import { NextUIProvider } from "@nextui-org/react";

function UIProvider({ children }) {
  return <NextUIProvider>{children}</NextUIProvider>;
}
export default UIProvider;
