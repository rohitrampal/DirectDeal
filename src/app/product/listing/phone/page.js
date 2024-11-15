import CommonListing from "@/components/CommonListing";
import { productByCategory } from "@/services/product";

export default async function WomenAllProducts() {
  const getAllProducts = await productByCategory("phone");

  return <CommonListing data={getAllProducts && getAllProducts.data} />;
}
