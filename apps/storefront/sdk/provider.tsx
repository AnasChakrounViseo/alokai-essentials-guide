"use client";

import { ReactNode } from "react";
import { SdkProvider } from "./sdk";
import { getSdk } from "./sdk.config";

export function Providers({ children }: { children: ReactNode }) {
  return <SdkProvider sdk={getSdk()}>{children}</SdkProvider>;
}
