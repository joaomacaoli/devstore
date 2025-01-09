'use client'

import { useCart } from "@/context/cart-context";
import { FiShoppingBag } from "react-icons/fi";

export function CartWidget() {
  const { items } = useCart()

  return (
    <div className="flex items-center gap-2">
      <FiShoppingBag className="h-4 w-4" />
      <span className="text-sm">Cart ({items.length})</span>
    </div>
  )
}
