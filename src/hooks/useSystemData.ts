import { useState, useEffect } from 'react'
import { SystemData } from '../../shared/system'

const REFRESH_INTERVAL = 2000 // ms

interface UseSystemDataResult {
  data: SystemData | null
  loading: boolean
  error: string | null
}

export function useSystemData(): UseSystemDataResult {
  const [data, setData] = useState<SystemData | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false

    async function fetchData(): Promise<void> {
      try {
        const result = await window.electronAPI.getSystemData()
        if (!cancelled) {
          setData(result)
          setLoading(false)
        }
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : 'Unknown error')
          setLoading(false)
        }
      }
    }

    fetchData()

    const interval = setInterval(fetchData, REFRESH_INTERVAL)

    return () => {
      cancelled = true
      clearInterval(interval)
    }
  }, [])

  return { data, loading, error }
}