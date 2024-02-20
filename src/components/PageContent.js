import React from 'react';
import { Container, Box, Typography, Paper, Grid } from '@mui/material';

// Import your images
import goalImage from '../art/boat.png'
import problemImage from '../art/boat.png'
import solutionImage from '../art/boat.png'



const PageContent = () => {
  return (

    <div>
    <div style={{backgroundColor:'#081424'}}>
      <p>asdsa</p>


    </div>

    <Container maxWidth="lg" sx={{ my: 4 }}>
      <Paper elevation={3} sx={{ p: 2 }}>
        <Typography variant="h3" gutterBottom align="center">
          Protect Endangered Marine Mammals
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box sx={{ p: 2, textAlign: 'center' }}>
              <Typography variant="h4" gutterBottom>
                Goal
              </Typography>
              <Typography variant="body1" gutterBottom>
                Cut the manatee watercraft collision death rate in half...
              </Typography>
              <Box
                component="img"
                sx={{
                  height: 233,
                  width: '100%',
                  maxHeight: { xs: 233, md: 167 },
                  maxWidth: { xs: 350, md: 250 },
                  mb: 2,
                }}
                alt="Goal"
                src={goalImage}
              />
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Box sx={{ p: 2, textAlign: 'center' }}>
              <Typography variant="h4" gutterBottom>
                Current Problem
              </Typography>
              <Typography variant="body1" gutterBottom>
                The beloved manatee population in Florida...
              </Typography>
              <Box
                component="img"
                sx={{
                  height: 233,
                  width: '100%',
                  maxHeight: { xs: 233, md: 167 },
                  maxWidth: { xs: 350, md: 250 },
                  mb: 2,
                }}
                alt="Current Problem"
                src={problemImage}
              />
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Box sx={{ p: 2, textAlign: 'center' }}>
              <Typography variant="h4" gutterBottom>
                Proposed Solution
              </Typography>
              <Typography variant="body1" gutterBottom>
                Marine Alpha is a versatile technology designed...
              </Typography>
              <Box
                component="img"
                sx={{
                  height: 233,
                  width: '100%',
                  maxHeight: { xs: 233, md: 167 },
                  maxWidth: { xs: 350, md: 250 },
                  mb: 2,
                }}
                alt="Proposed Solution"
                src={solutionImage}
              />
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Box sx={{ p: 2, textAlign: 'center' }}>
              <Typography variant="h4" gutterBottom>
                Technology Overview
              </Typography>
              <Typography variant="body1" gutterBottom>
                Proceed to the next page.
              </Typography>
              {/* Placeholder for additional content */}
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Container>
    </div>
  );
};

export default PageContent;
