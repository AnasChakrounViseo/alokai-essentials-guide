"use client";

import { createSdkContext } from "@vue-storefront/next/client";

import type { Sdk } from "./sdk.config";

export const [SdkProvider, useSdk] = createSdkContext<Sdk>();
