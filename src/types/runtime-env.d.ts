declare global {
  interface Window {
    RUNTIME_ENV: Record<string, string>
  }
}

export {}
