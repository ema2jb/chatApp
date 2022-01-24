import React from 'react'

import './infoBar.css'
//import closeIcon from './closeIcon'

const InfoBar =({room})=>{

    return(
        <div className="infoBar">
            <div className="leftInnerContainer">
                <i className="fas fa-globe-africa"></i>
                <h3>{room}</h3>
            </div>
            <div className="rightInnerContainer">
                <a href="/"><i className="far fa-times-circle"></i></a>
            </div>
        </div>
    )
    
}

export default InfoBar