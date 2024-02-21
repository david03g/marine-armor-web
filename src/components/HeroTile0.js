import * as React from 'react';import wheel from '../art/wheel.svg'


function HeroTile0() {

  return (
   <div style={{padding:30,backgroundColor:'#081424', borderRadius:10, borderRadius:0 }}>
    
    <p style={{fontSize:30, textAlign:'left', color:'#adddff', fontWeight:'bold'}}>Mission</p>
  
            <p style={{width:'80%', fontWeight:'bold', color:"white", textAlign:'left'}}>

            Roughly 25% of manatee fatalities are due to collisions with watercraft. We aim to halve this mortality rate,
            promoting population growth and ending the cruelty associated with these gruesome vessel encounters.            </p>
             <div style={{display:'flex', alignItems:'flex-end', flexDirection:'row', justifyContent:'space-between', justifyContent:'right'}}>
              {/* <Button variant='contained' style={{height:40}}>Learn More</Button> */}
            <img className='App-logo' height={80} width={80} src={wheel}/>
            </div>

  </div>

  );
}

export default HeroTile0;
