import { useEffect } from 'react'

const useHello = () => {
  useEffect(() => {
    console.log('Hello!')
  }, [])
}

export default useHello
