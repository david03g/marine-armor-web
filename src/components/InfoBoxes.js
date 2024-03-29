import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

import image2 from '../art/figure.png';
import image3 from '../art/figure9.png';


export default function InfoBoxes() {
  const boxData = [
    // {
    //     title: "Boating Co-Pilot",
    //     description: "Navigate Florida's complex geography",
    //     buttonText: "Download",
    //     imgSrc: image2, // Placeholder image URL
    //   },
    {
      title: "Speed Watch",
      description: "Monitoring Florida's Manatee Zones",
      buttonText: "Launch",
      imgSrc: image2, // Placeholder image URL
    },
    {
      title: "Research",
      description: "Evidence Based Insights",
      buttonText: "Read",
      imgSrc: image3, // Placeholder image URL
    },
    // {
    //   title: "Certification",
    //   description: "Become and friend of the manatee",
    //   buttonText: "Learn More",
    //   imgSrc: image3, // Placeholder image URL
    // },
  ];

  return (
    <div style={{padding:20}}>
     <Grid container spacing={2}>
      {boxData.map((box, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card sx={{borderRadius:3, maxWidth: 500, height:300 }}>
            <CardMedia
              component="img"
              height="140"
              image={box.imgSrc}
              alt={box.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {box.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {box.description}
              </Typography>
            </CardContent>
            <CardContent>
              <Button href='https://marinealpha-prototype.onrender.com' size="small" variant="contained">
                <b>{box.buttonText}</b>
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid> 

    </div>
  );
}

