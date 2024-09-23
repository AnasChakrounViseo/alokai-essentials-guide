"use client";

import { ReactNode } from "react";
import { SdkProvider } from "./sdk";
import { getSdk } from "./sdk.config";
import CartContextProvider from "../providers/CartContextProvider";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <SdkProvider sdk={getSdk()}>
      <CartContextProvider>{children}</CartContextProvider>
    </SdkProvider>
  );
}
