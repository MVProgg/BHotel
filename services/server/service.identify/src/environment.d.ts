declare global {
    namespace NodeJS {
      interface ProcessEnv {
        LISTEN_PORT: number
        LISTEN_HOST: string
      }
    }
  }
  
  export {}