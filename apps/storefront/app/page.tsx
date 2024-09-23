import { getSdk } from "../sdk/sdk.config";
import Link from "next/link";

const sdk = getSdk();

export default async function Page() {
  const { products } = await sdk.unified.searchProducts({});
  return (
    <div className="flex flex-col gap-3">
      {products?.map((product) => (
        <Link
          href={`/product/${product.id}`}
          key={product.id}
          className="text-blue-500 underline"
        >
          - {product.name}
        </Link>
      ))}
    </div>
  );
}
