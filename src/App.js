import './App.css';
import NavBar from './components/NavBar';
import { Button } from '@mui/material';
import InfoBoxes from './components/InfoBoxes';
import badge from './art/badge.webp';
import VideoHero from './components/VideoHero';
import HeroTile from './components/HeroTile';
import HeroTile0 from './components/HeroTile0';
function App() {
  return (
    <div className="App">

      <VideoHero src={require('./art/licensed1.mp4')} overlaycontent={

        <>
          <div style={{marginTop:50}}/>
          <NavBar/>
          <div style={{marginTop:150}}>
            <p style={{fontSize:30, width:'80%', textAlign:'left', color:'white', fontWeight:'bold'}}>
              Protect Edangered Marine Mammals From Vessel Strikes
            </p>
          {/* <p style={{width:'80%', fontWeight:'bold', color:"white", textAlign:'left'}}>
          About 1/4 manatees die from vessel strikes a year. Those 
          </p> */}
          </div>
          </>

      }/>
      <HeroTile0/>

      <VideoHero src={require('./art/licensed2.mp4')} overlaycontent={
          <>
            <div style={{marginTop:50}}/>

            <div style={{display:'flex',  flexDirection:'row', justifyContent:'left', alignItems:'center'}}>
                <img src={badge} style={{marginRight:50}} width={110} height={110} />
            </div>      

            <div style={{marginTop:100}}/>


            <p style={{fontSize:30, width:'100%', textAlign:'center', color:'white', fontWeight:'bold'}}>
              Get Certified Today
            </p>

            <div style={{display:'flex', alignItems:'flex-end', flexDirection:'row', justifyContent:'space-between', justifyContent:'center'}}>
            <Button variant='contained'><b>Learn More</b></Button>
            </div>
        
        </>} />

        <HeroTile/>

        <VideoHero src={require('./art/timelapse3.mp4')} overlaycontent={
          <>
            <div style={{marginTop:50}}/>

            <div style={{display:'flex',  flexDirection:'row', justifyContent:'left', alignItems:'center'}}>
                <img src={badge} style={{marginRight:50}} width={110} height={110} />
            </div>      

            <div style={{marginTop:100}}/>


            <p style={{fontSize:30, width:'100%', textAlign:'center', color:'white', fontWeight:'bold'}}>
              Get Certified Today
            </p>

            <div style={{display:'flex', alignItems:'flex-end', flexDirection:'row', justifyContent:'space-between', justifyContent:'center'}}>
            <Button variant='contained'><b>Learn More</b></Button>
            </div>
        
        </>} />
     
        <InfoBoxes/>

 

    </div>
  );
}

export default App;
