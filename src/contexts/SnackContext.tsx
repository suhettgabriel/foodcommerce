import { createContext, ReactNode, useEffect, useState } from 'react'

import { SnackData } from '../interfaces/SnackData'

import { getBebidas, getBurgers, getPizzas, getSobremesas } from '../services/api'

interface SnackContextProps {
  bebidas: SnackData[]
  burgers: SnackData[]
  pizzas: SnackData[]
  sobremesas: SnackData[]
}

interface SnackProviderProps {
  children: ReactNode
}

export const SnackContext = createContext({} as SnackContextProps)

export function SnackProvider({ children }: SnackProviderProps) {
  const [bebidas, setBebidas] = useState<SnackData[]>([])
  const [burgers, setBurgers] = useState<SnackData[]>([])
  const [pizzas, setPizzas] = useState<SnackData[]>([])
  const [sobremesas, setSobremesas] = useState<SnackData[]>([])

  useEffect(() => {
    ;(async () => {
      try {
        const bebidaRequest = await getBebidas()
		const burgerRequest = await getBurgers()
        const pizzaRequest = await getPizzas()
        const sobremesaRequest = await getSobremesas()

        const requests = [burgerRequest, pizzaRequest, bebidaRequest, sobremesaRequest]

        const [
		  { data: bebidaResponse },
          { data: burgerResponse },
          { data: pizzaResponse },
          { data: sobremesaResponse },
        ] = await Promise.all(requests)
        
		setBebidas(bebidaResponse)
        setBurgers(burgerResponse)
        setPizzas(pizzaResponse)
        setSobremesas(sobremesaResponse)
      } catch (error) {
        console.error(error)
      }
    })()
  }, [])

  return (
    <SnackContext.Provider value={{ bebidas, burgers, pizzas, sobremesas }}>
      {children}
    </SnackContext.Provider>
  )
}
