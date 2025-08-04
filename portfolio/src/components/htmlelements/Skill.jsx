import { forwardRef } from "react";
const Skill=forwardRef((props, ref)=>{
    return(
        <>
            <div ref={ref} className="flex  w-full h-10  rounded-md py-2 px-5 transition-all duration-1000" style={{ 'boxShadow':'0 0 10px #0000005c'}}>
                
                    <img src={props.logo} alt="drf" className=" h-full w-8 mr-3" />
                    <p>{props.skill}</p>
                
                
            </div>
        </>
    )
})
export default Skill;