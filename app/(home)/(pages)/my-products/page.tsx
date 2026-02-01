import { getOwnerProducts } from "@/lib/server-actions";
import Link from "next/link";
import { PiPlus } from "react-icons/pi";

const MyProducts = async () => {

  const products = await getOwnerProducts();

  return (
    <div className="mx-auto lg:w-3/5 py-10 px-6">
        {products.length === 0 ? (
            <div>
                <h1 className="text-3xl font-bold">No products found</h1>
                <p className="text-gray-500">
                    Looks like you have not submitted any products yet. Start by adding your first product!
                </p>

                <Link href={"/new-product"}>
                <div className="bg-[#ff6154] text-white p-4 rounded-md mt-4 w-60 h-56 flex items-center flex-col">
                    <PiPlus className="text-3xl mb-4" />
                    <p className="text-lg">Create a product</p>
                </div>
                </Link>
            </div>
            ) : (
            <div>
                has products
            </div>
            )}

    </div>
  );
};

export default MyProducts;
