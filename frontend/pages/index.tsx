import { Box, Dialog, DialogActions, Grid, TextField, Button, Snackbar } from '@mui/material'
import type { NextPage } from 'next'
import Lista from '../src/components/Lista/Lista'
import { useIndex } from '../src/hooks/pages/useIndex'



const Home: NextPage = () => {
  const { 
    listaProfessores, 
    nome,
    setEmail,
    setNome,
    email,
    professorSelicionado,
    setProfessorSelicionado,
    marcarAula,
    mensagem,
    setMensagem
   } = useIndex();

  return (
    <>
      <Box sx={{backgroundColor: 'secondary.main'}}>
      <Lista
        professores={listaProfessores}
        onSelect={(professor) => setProfessorSelicionado(professor)}
        ></Lista>
      </Box>

      <Dialog onClose={() => setProfessorSelicionado(null)} open={professorSelicionado != null} fullWidth PaperProps={{sx: {p: 5}}}>

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField 
            label="Digite o nome" 
            type = "text"
            fullWidth
            value = {nome}
            onChange={(e) => setNome(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
          <TextField 
            label="Digite o email" 
            type = "email"
            fullWidth
            value = {email}
            onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
        </Grid>

        <DialogActions sx={{mt: 5}}>
          <Button onClick={() => setProfessorSelicionado(null)}>Cancelar</Button>
          <Button onClick={() => marcarAula()}>Marcar</Button>
        </DialogActions>

      </Dialog>

      <Snackbar 
      message={mensagem} 
      open={mensagem.length > 0}
      autoHideDuration={2500}
      onClose={() => setMensagem('')}/>
    </>
  )
}

export default Home
