import * as React from 'react';
import Logo from './Logo';

export default function NavBar() {

    return (
        <div style={{display:'flex',  flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
            <Logo size={110}/>
            <p style={{marginRight:60, textAlign:'left', fontSize:25, color:'white'}}><b>MARINE ARMOR </b></p>
        </div>
    );

}
