import React,{useState} from "react";
import "./textButton.css";

const FlushButtons=({type,className,style,isDisabled,value,onPress,successLabel,removeLabel})=>{
  const disableBtn = isDisabled?"btn-disable":"btn-normal"
	const NewclassName=className;
  const [success, setSuccess] = useState(false);

  const handleClick = () => {
   if(success){
    setSuccess(false)
   }else{
    setSuccess(true)
   }
   onPress()
  };
 return(
  
<>
<a 
className="button"
style={style}
href="#" role="button"  
onClick={()=>handleClick()}>
  {success?<span>{removeLabel||"Remove"}</span>:<span style={{backgroundColor:'green'}}>{successLabel||'Done'}</span>}
  <div className="icon">
    {
      success?
      <div >
      <i className="fa fa-remove"></i>
      </div>
      :
      <div style={{backgroundColor:'green'}}>
      <i className="fa fa-check"></i>
      </div>
    }
  </div>
</a>
</>

    );
}


export default FlushButtons;