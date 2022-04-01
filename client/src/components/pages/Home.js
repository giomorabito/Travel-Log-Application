import React from 'react';
import { Container } from '@mui/material';
import { Box } from '@mui/system';

function Home() { 
  document.title = "Home | Pausing Moments";
  return (
    <Container align='center'>
    <h1 style={{marginTop: '4rem'}}>Tell us your travel story</h1>
    <h2 style={{fontWeight: '300', maxWidth: '75%'}}>Here at Pausing Moments, we believe in a platform that is meant to share travels to inspire and be inspired by others without social metrics such as likes and comments involved. Whether it is a visit to a local park or a favorite restaurant, Pausing Moments is a place where you can share all your journies.</h2>
    <Box component="img" src={require('../../images/homeImage.png')} sx={{maxWidth: { xs: 450, sm: 600, md: 765 }}} />
    </Container>
  );
}

export default Home;