import { useEffect, useState } from 'react'
import loadFromLocal from '../lib/loadFromLocal'
import saveToLocal from '../lib/saveToLocal'

export default function useLocalStorage(key: any, initialData: any) {
  const [data, setData] = useState(loadFromLocal(key) ?? initialData)

  useEffect(() => {
    saveToLocal(key, data)
  }, [data, key])

  return [data, setData]
}
