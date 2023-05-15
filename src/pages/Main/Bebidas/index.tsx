import { useState, useEffect } from 'react'

import { Head } from '../../../components/Head'
import { Snacks } from '../../../components/Snacks'
import { SnackTitle } from '../../../components/SnackTitle'

import { getBBebidas } from '../../../services/api'
import { SnackData } from '../../../interfaces/SnackData'


export default function Bebidas() {

  const [bebidas, setBebidas] = useState<SnackData[]>([])

  useEffect(() => {
    (async () => {
      const bebidasRequest = await getBBebidas()

      setBebidas(bebidasRequest.data)
    })()
  }, [])


  const data = [
    {
      id: 1,
      snack: 'bebidas',
      name: 'Coca-Cola 2L',
      description: 'A tradicional Coca-Cola que a família brasileira adora.',
      price: 12,
      image: 'https://i.imgur.com/Lg3aKhf.jpg',
    },
    {
      id: 2,
      snack: 'bebidas',
      name: 'Guaraná Antarctica',
      description: 'O irresistível e saboroso Guaraná Antarctica em sua versão de latinha.',
      price: 6.5,
      image: 'https://i.imgur.com/hOBrOIm.jpg',
    },
    {
      id: 3,
      snack: 'bebidas',
      name: 'Suco de Abacaxi',
      description:
        'Suco natural de abacaxi com leves incrementos de algumas hortaliças para fortificar sua saúde.',
      price: 8,
      image: 'https://i.imgur.com/VV9qTMh.jpg',
    },
  ]

  return (
    <>
      <Head title='Bebidas' />
      <SnackTitle>Bebidas</SnackTitle>
      <Snacks snacks={bebidas}></Snacks>
    </>
  )
}
