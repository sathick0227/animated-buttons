import React from "react";
import "./styles/HoverButton.css";

const HoverButton=({type,className,style,hoverColor,isDisabled,value,onPress})=>{
  const disableBtn = isDisabled?"btn-disabled":"btn-normal"
  const styles={
    '--hover-color':hoverColor,
    
  }
  const nothing=()=>{}
  const totalStyle ={...styles,...style};
  
  return(
    <>
    <a type={type} className={isDisabled? `${className} ${disableBtn}` :className} style={totalStyle} onClick={isDisabled?nothing():onPress} disabled={isDisabled}><span>{value}</span><span className="span"></span></a>
    </>
    );
}


export default HoverButton;