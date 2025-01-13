'use client'

import Skeleton from "@/components/skeleton"

export default function HomeLoading() {
  return (
    <section className="flex flex-col gap-4">
      <p className="text-sm">Carregando resultados...</p>
      <section className="grid grid-cols-3 gap-6">
        <Skeleton className="h-[380px]" />
        <Skeleton className="h-[380px]" />
        <Skeleton className="h-[380px]" />
        <Skeleton className="h-[380px]" />
        <Skeleton className="h-[380px]" />
        <Skeleton className="h-[380px]" />
      </section>
    </section>
  )
}
