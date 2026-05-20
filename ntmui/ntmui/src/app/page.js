//Tiago Alves de Souza

'use client';

import * as React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';

export default function HomePage() {
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <Typography variant="h2">
          Tiago Alves de Souza
        </Typography>

        <Typography variant="h4" gutterBottom>
          Bem-vindo
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ mb: 3 }}
        >
          Esta é uma página simples feita com Next.js, com o bundler
          Turbopack e com a biblioteca responsiva Material UI.
        </Typography>

        <Button variant="contained" color="primary">
          Começar
        </Button>
      </Box>
    </Container>
  );
}