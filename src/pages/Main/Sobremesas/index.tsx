import { useState, useEffect } from 'react'

import { Head } from "../../../components/Head"
import { Snacks } from '../../../components/Snacks'
import { SnackTitle } from '../../../components/SnackTitle'

import { getSobremesas } from '../../../services/api'
import { SnackData } from '../../../interfaces/SnackData'

export default function Sobremesas() {

  const [Sobremesas, setSobremesas] = useState<SnackData[]>([])

  useEffect(() => {
    (async () => {
      const sobremesasRequest = await getSobremesas()

      setSobremesas(sobremesasRequest.data)
    })()
  }, [])


  return (
    <>
      <Head title='Sobremesas' />
      <SnackTitle>Sobremesas</SnackTitle>
      <Snacks snacks={Sobremesas}></Snacks>
    </>
  )
}
