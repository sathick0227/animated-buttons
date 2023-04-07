import React from "react";
import "./styles/blobButton.css";
import PropTypes from 'prop-types';


const BlobButton=({type,className,style,isDisabled,value,onPress})=>{
  const NewclassName=className;
  const disableBtn = !isDisabled?"btn-normal":"btn-disable"
return(

<div className="buttons">
  <button
  type={type}
  className={NewclassName!=null?`${className} ${disableBtn} blob-btn`:"blob-btn"}
  style={style}
  disabled={isDisabled}
  onClick={onPress}
 >
    {!!value?value:"button"}
    <span className="blob-btn__inner">
      <span className="blob-btn__blobs">
        <span className="blob-btn__blob"></span>
        <span className="blob-btn__blob"></span>
        <span className="blob-btn__blob"></span>
        <span className="blob-btn__blob"></span>
      </span>
    </span>
  </button>
  <br/>

<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
  <defs>
    <filter id="goo">
      <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10"></feGaussianBlur>
      <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7" result="goo"></feColorMatrix>
      <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
    </filter>
  </defs>
</svg>

</div>
    );
}

BlobButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,

};

BlobButton.defaultProps = {
  value: 'button',
};

export default BlobButton;