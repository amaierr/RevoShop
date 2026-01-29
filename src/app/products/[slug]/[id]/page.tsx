import Card from "@/app/components/card";
import { Product } from "@/app/types/products";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

var product: Product;


async function DetailPage({ params }: PageProps) {
    const { id } = await params

    const res = await fetch(
      `https://api.escuelajs.co/api/v1/products/${id}`,
      { cache: "no-store" }
    )

    product = await res.json()
    console.log(product)

    return <>
        <Card product={product} />
    </>
}

export default DetailPage