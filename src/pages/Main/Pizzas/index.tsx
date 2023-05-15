import { useState, useEffect } from 'react'
import { getPizzas } from '../../../services/api'
import { Head } from "../../../components/Head"
import { Snacks } from '../../../components/Snacks'
import { SnackTitle } from '../../../components/SnackTitle'
import { SnackData } from '../../../interfaces/SnackData'

export default function Pizzas() {

  const [pizzas, setPizzas] = useState<SnackData[]>([])
  useEffect(() => {
    (async () => {
      const pizzaRequest = await getPizzas()

      setPizzas(pizzaRequest.data)
    })()
  }, [])

  return (
    <>
      <Head title='Pizzas' />
      <SnackTitle>Pizzas</SnackTitle>
      <Snacks snacks={pizzas}></Snacks>
    </>
  )
}
