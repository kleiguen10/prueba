"use client"
import {Button, Grid} from '@mui/material/'

export default function Home() {
  return (
  <div className='container'>
    <Grid container>
      <Grid item xs={12} justifyContent='center' alignItems='center' display='flex' marginTop={30}>
        <Button variant='contained'>Probando</Button>
      </Grid>
    </Grid>
  </div>
  )
}
