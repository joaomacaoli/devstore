import Image from "next/image";
import Link from "next/link";

export default async function Seach() {

  return (
    <section className="flex flex-col gap-4">
      <p className="text-sm">
        Resultados para: <span className="font-semibold">moletom</span>
      </p>

      <section className="grid grid-cols-3 gap-6">
      <Link
            // key={product.id}
            // href={`/product/${product.slug}`}
            className="group relative rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end"
            href={`/product/moletom-never-stop-learning`}
          >
            <Image
              // src={product.image}
              src="/moletom-never-stop-learning.png"
              className="group-hover:scale-105 transition-transform duration-500"
              width={480}
              height={480}
              quality={100}
              alt=""
            />

            <div className="absolute bottom-28 right-28 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
              <span className="text-sm truncate">Moletom never stop learning</span>
              {/* <span className="text-sm truncate">{product.title}</span> */}
              <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
                {/* {product.price.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                })} */} 1234
              </span>
            </div>
          </Link>
      </section>
    </section>
  );
}
