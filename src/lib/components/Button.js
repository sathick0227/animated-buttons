import React from 'react'
import './styles/buttonStyle.css';
import PropTypes from 'prop-types';

const Button=({type,className,style,isDisabled,value,onPress}) =>{
	const disableBtn = !isDisabled?"btn-normal":"btn-disable"
	const NewclassName=className;
	console.log("done")
	console.log(onPress)
	return (
		<button
		type={type}
		className={NewclassName!=null?`${className} ${disableBtn}`:"default-btn"}
		style={style}
		disabled={isDisabled}
		onClick={onPress}
		>{value}</button>
	)
}

Button.propTypes = {
  onPress: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,

};

Button.defaultProps = {
  value: 'button',
};

export default Button;