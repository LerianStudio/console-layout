export function getRuntimeEnv(key: string) {
  if (typeof window !== 'undefined' && window.RUNTIME_ENV) {
    return window.RUNTIME_ENV[key]
  }

  return undefined
}
