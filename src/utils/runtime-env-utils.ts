export function getRuntimeEnv(key: string, defaultValue?: string) {
  if (process.env.NODE_ENV === 'development' && defaultValue) {
    return defaultValue
  }

  if (typeof window !== 'undefined' && window.RUNTIME_ENV) {
    return window.RUNTIME_ENV[key]
  }

  return process.env[key]
}
