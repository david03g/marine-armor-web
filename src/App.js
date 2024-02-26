import './App.css';
import { Button } from '@mui/material';
import InfoBoxes from './components/InfoBoxes';
import badge from './art/badge.webp';
import VideoHero from './components/VideoHero';
import HeroTile from './components/HeroTile';
import HeroTile0 from './components/HeroTile0';

import Logo from './components/Logo';
import Footer from './components/Footer';

const CalendlyButton = () => {
  const openCalendly = () => {
    window.open('https://calendly.com/marinearmor', '_blank');
  };

  return (
    <Button onClick={openCalendly} variant='contained'><b>Learn More</b></Button>
  );
};



function App() {
  return (
    <div className="App">

      <VideoHero src={require('./art/licensed1.mp4')} overlaycontent={

        <div >
          <div style={{display:'flex',marginTop:40, paddingLeft:25, paddingRight:25, flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
            <Logo size={115}/>
            <p style={{ textAlign:'left', fontSize:25, color:'white'}}><b>MARINE ARMOR </b></p>
        </div>
          <div style={{marginTop:125, paddingLeft:25}}>
            <p style={{fontSize:30, width:'80%', textAlign:'left', color:'white', fontWeight:'bold'}}>
              Protect Edangered Marine Mammals From Vessel Strikes
            </p>
          {/* <p style={{width:'80%', fontWeight:'bold', color:"white", textAlign:'left'}}>
          About 1/4 manatees die from vessel strikes a year. Those 
          </p> */}
          </div>
          </div>

      }/>
      <HeroTile0/>

      <VideoHero src={require('./art/licensed2.mp4')} overlaycontent={
          <>
          <div style={{ height:'100%', width:'100%', display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center'}}> 
            

            <p style={{ fontSize:30, width:'80%', textAlign:'center', color:'white', fontWeight:'bold'}}>
              Have AIS equiped vessels?
            </p>

           
          
            </div>
        
        </>} />

        <HeroTile/>

        <VideoHero src={require('./art/licensed3.mp4')} overlaycontent={
          <div style={{display:'flex', height:'100%', width:'100%', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
          

            {/* <div style={{display:'flex',  flexDirection:'row', justifyContent:'left', alignItems:'center'}}>
                <img src={badge} style={{marginRight:50}} width={110} height={110} />
            </div>      

        */}

            <p style={{fontSize:30, padding:20, width:'100%', textAlign:'center', color:'white', fontWeight:'bold'}}>
              Get Protected Today
                          </p>

                          <CalendlyButton variant='contained'><b>Learn More</b></CalendlyButton>

            {/* <div style={{display:'flex', alignItems:'flex-end', flexDirection:'row', justifyContent:'space-between', justifyContent:'center'}}>
            <Button variant='contained'><b>Learn More</b></Button>
            </div> */}

            
        
        </div>} />
     
        <InfoBoxes/>

        <Footer/>

    </div>
  );
}

export default App;
