import { Box } from '@mui/material'
import type { NextPage } from 'next'
import { Professor } from '../src/@types/professor'
import Cabecalho from '../src/components/Cabecalho/Cabecalho'
import Lista from '../src/components/Lista/Lista'



const Home: NextPage = () => {
  const professores: Professor[] = [
    {
      id: 1,
      nome: "Professor 1",
      descricao: "Descrição do professor 1",
      valor_hora: 50,
      foto: "http://www.github.com/imtavin.png",
    },

    {
      id: 2,
      nome: "Professor 2",
      descricao: "Descrição do professor 2",
      valor_hora: 50,
      foto: "http://www.github.com/imtavin.png",
    },

    {
      id: 3,
      nome: "Professor 3",
      descricao: "Descrição do professor 3",
      valor_hora: 50,
      foto: "http://www.github.com/imtavin.png",
    },

    {
      id: 4,
      nome: "Professor 4",
      descricao: "Descrição do professor 4",
      valor_hora: 50,
      foto: "http://www.github.com/imtavin.png",
    }
  ]

  return (
    <>
      <Box sx={{backgroundColor: 'secondary.main'}}>
      <Lista professores={professores}></Lista>
      </Box>
    </>
  )
}

export default Home
