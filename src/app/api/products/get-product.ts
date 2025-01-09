import { api } from "@/data/api";
import { Product } from "@/data/types/product";

export default async function getProduct(slug: string): Promise<Product> {
  const response = await api(`/products/${slug}`, {
    next: {
      revalidate: 60 * 60, // 1h
    }
  })

  return await response.json();
}
