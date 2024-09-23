import { SfButton } from "@storefront-ui/react";
import { getSdk } from "../sdk/sdk.config";

const sdk = getSdk();

export default async function Page() {
  const { products } = await sdk.sapcc.searchProduct({});

  console.log(products?.map((product) => product.name));

  return (
    <div>
      <h1>Products</h1>
      <SfButton>Click me</SfButton>
    </div>
  );
}
