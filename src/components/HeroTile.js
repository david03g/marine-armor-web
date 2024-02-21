import { Button } from "@mui/material";

function HeroTile({}) {
    return (
  
        <div style={{paddingBottom:0}}>
        <div>
            <div style={{padding:30,  backgroundColor:'#03615a', minHeight:280  }}>
            
           
            <p style={{fontSize:30, textAlign:'left', color:'#54ffac', fontWeight:'bold'}}>Monitor Your Fleet</p>
          
                    <p style={{width:'80%', fontWeight:'bold', color:"white", textAlign:'left'}}>
        
                    
              Manatee protection zones are established under Florida Statutes 379.2431(2), detailed in Chapter 68C-22 of the Florida Administrative Code (FAC).Federal manatee protection areas are designated under CFR Title 50 Part 17.108. 

              <br/>
              <br/>
              Avoid fines up to $50,000 and/or jail time

             
                    </p>
                     <div style={{marginTop:30, display:'flex', alignItems:'flex-end', flexDirection:'row', justifyContent:'space-between', justifyContent:'left'}}>
                      {/* <Button variant='contained' style={{height:40}}>Learn More</Button> */}
                    <Button style={{marginRight:20, height:45, border:'1px solid white'}} variant="outlined"><p style={{color:'white'}}>Learn More</p></Button>

                    {/* <img className='App-logo' height={80} width={80} src={wheel}/> */}
                    </div>
        
          </div>
        
              </div>
        
            </div>
        
  
  
    );
  }
  
  
  
  export default HeroTile;
  


