import Card from "@/components/Card";
import Link from "next/link";

export const metadata = {
	title: "Chhai-Product",
	description: "Listing All Products",
};

export default async function Products() {
	const products = await fetchProduct();
	return (
		<main className="flex flex-row flex-wrap justify-around">
			{products.products.map((product) => (
				<div>
					<Link href={`products/${product.id}`}>
						<Card key={product.id} product={product} />
					</Link>
				</div>
			))}
		</main>
	);
}

// create async function to getProducts
export async function fetchProduct() {
	// similar to getServersideProps
	const resp = await fetch("https://dummyjson.com/products", {
		cache: "no-store",
	});
	return resp.json();
}
