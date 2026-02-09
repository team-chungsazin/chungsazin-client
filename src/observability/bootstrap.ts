type Env = {
  gaId?: string
  sentryDsn?: string
  clarityId?: string
  otelEndpoint?: string
}

function readEnv(): Env {
  return {
    gaId: import.meta.env.VITE_GA_MEASUREMENT_ID,
    sentryDsn: import.meta.env.VITE_SENTRY_DSN,
    clarityId: import.meta.env.VITE_CLARITY_PROJECT_ID,
    otelEndpoint: import.meta.env.VITE_OTEL_EXPORTER_OTLP_ENDPOINT,
  }
}

export function bootstrapObservability(): void {
  const env = readEnv()
  const enabled = Object.values(env).some(Boolean)

  if (import.meta.env.DEV) {
    console.info('[observability] bootstrap', {
      enabled,
      ga: Boolean(env.gaId),
      sentry: Boolean(env.sentryDsn),
      clarity: Boolean(env.clarityId),
      otel: Boolean(env.otelEndpoint),
    })
  }
}
