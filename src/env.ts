// src/env.mjs
import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    APP_URL: z.string().url(),
  },
  client: {
    NEXT_PUBLIC_API_BASE_URL: z.string().url(),
  },
  runtimeEnv: {
    APP_URL: process.env.APP_URL,
    NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
  },
});


// import { z } from "zod";

// const envSchema = z.object({
//   NEXT_PUBLIC_API_BASE_URL: z.string().url(),
//   APP_URL: z.string().url(),
// })

// const parsedEnv = envSchema.safeParse(process.env)

// if(!parsedEnv.success) {
//   console.error(
//     'Variáveis ambiente inválidas',
//     parsedEnv.error.flatten().fieldErrors,
//   )

//   throw new Error('Variáveis ambiente inválidas.')
// }

// export const env = parsedEnv.data
