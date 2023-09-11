"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { Typography, Button, Grid } from "@mui/material";

export default function Home() {
  return (
    <Grid container>
      <Grid item xs={12} display = 'flex' justifyContent='center' alignItems='center'>
        <Button variant='contained'> Hello World</Button>
      </Grid>
    </Grid>
  );
}