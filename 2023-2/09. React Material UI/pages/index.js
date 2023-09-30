import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import TheAppBar from '../src/shared/TheAppBar/TheAppBar'

export default function Index() {
  return (
    <Container >
    <TheAppBar />
      <Box sx={{ my: 4 }}>
      </Box>
    </Container>
  );
}
