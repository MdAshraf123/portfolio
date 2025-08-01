import { Mail, Github, Linkedin, MapPin } from "lucide-react";
import React,{useRef, useEffect, useState} from 'react';
import Skill from './Skill';
const MainPage=()=>{
    const skill=useRef(null);
    const home=useRef(null);
    const about=useRef(null);
    const api=useRef(null);
    const contact=useRef(null);
    const elementsRef=useRef([]);
    const [formData,setFormData]=useState({'name':'','email':'','message':''});
    const HOST_URL='http:localhost:8000//api/';
    function formHandler(e){
        setFormData((prev)=>({...formData,[e.target.name]:e.target.value,}))
    }

    function formSubmit(){
        if(formData.name.trim()==''){
            alert('Please enter name!');
        }
        else if(formData.message.trim()==''){
            alert('Please write message!')
        }
        else if(!'/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/'.test(formData.email.trim())){
             alert('Please enter valid email!')
        }
        try{
            fetch(LOCAL_URL+'post-mail/',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json',
                },
                body:JSON.stringify(formData),
            })
            .then((res)=>{
                return res.json()
            })
            .then((data)=>{
                alert(data.message)
            })
        }
        catch( Error){
            alert('Something went wrong!')
        }
            
    }
    
    useEffect(() => {

    const handleScroll = () => {
        elementsRef.current.forEach((el) => {
        if (!el) return;

        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top > windowHeight - 100) {
            el.classList.add("opacity-0","translate-y-4");
        } else {
            el.classList.remove("opacity-0", "translate-y-4");
        }
        });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run once when page loads

    return () => window.removeEventListener("scroll", handleScroll);
    }, []);

   console.log(formData)
    return(
        <>
            <div className=" w-full h-auto min-h-screen  ">
                <div className="border-1 border-black/10 bg-white w-full h-20 py-2 px-20 flex flex-row items-center fixed top-0 left-0 ">
                    <h2><b>Mohammad Ashraf</b></h2>
                    <ul className="flex space-x-5 h-fit ml-auto">
                        <li><button className="nav-link cursor-pointer border-b-2 border-b-transparent" onClick={(e)=>{home.current?.scrollIntoView({ behavior: 'smooth' }); }}>Home</button></li>
                        <li><button className="nav-link cursor-pointer border-b-2 border-b-transparent" onClick={(e)=>{about.current?.scrollIntoView({ behavior: 'smooth' });}}>About</button></li>
                        <li><button className="nav-link cursor-pointer border-b-2 border-b-transparent" onClick={(e)=>{skill.current?.scrollIntoView({ behavior: 'smooth' });}}>Skills</button></li>
                        <li><button  className="nav-link cursor-pointer border-b-2 border-b-transparent" >Projects</button></li>
                        <li><button className="nav-link cursor-pointer border-b-2 border-b-transparent" onClick={(e)=>{api.current?.scrollIntoView({ behavior: 'smooth' });}}>API</button></li>
                        <li><button  className="nav-link cursor-pointer border-b-2 border-b-transparent" onClick={(e)=>{contact.current?.scrollIntoView({ behavior: 'smooth' });}}>Contact</button></li>                   
                    </ul>
                </div>
                <section ref={home} className="pt-20" id='home'>
                <div  className="h-[85vh] w-full bg-white flex">              
                    <div className=" grow basis-1/2 flex flex-col justify-center items-center p-10 ">                       
                        <h1 className="w-full text-5xl leading-15">Hi,<br/>I'am <span className="text-blue-600">Mohammad Ashraf</span> <br/> Web Designer</h1>
                        <div className="w-full">
                            <button className=" border my-10  self-start p-2 w-fit h-fit rounded-sm cursor-pointer bg-blue-600 text-white font-light">Contact</button>
                        </div>
                        
                    </div>
                    <div className=" grow basis-1/2 flex justify-center items-center ">
                    <img src="" alt="" className="border-1 w-50 h-50" />
                    </div>
                </div>
                </section>
                {/*About section */}
                <section ref={about} className="pt-20" id='about'>
                    <div  className="h-[85vh] w-full bg-white flex flex-col">
                        <h1 className="text-center underline underline-offset-8 text-blue-600 text-3xl w-full">About</h1>
                        <div className=" grow p-10 flex justify-center items-center">
                            <div className="flex justify-end gap-10 w-4/5 max-w-4xl">
                                <img src="" alt="" className="w-50 h-65  transition-all duration-1000  " ref={(el) => (elementsRef.current[0] = el)} />
                                <div className="w-[60%] flex flex-col justify-center transition-all duration-900" ref={(el) => (elementsRef.current[1] = el)}>
                                    <h1><b>I'am Mohammad Ashraf</b></h1>
                                    <p >I am an student of this AGC Lorem ipsum dolor sit Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, laudantium voluptatem accusamus at suscipit fuga ullam nulla ipsum nemo totam soluta corrupti possimus! Excepturi itaque possimus, minima architecto placeat repellendus. </p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </section>

                <section ref={skill} className="pt-20">
                    <div  className="h-[85vh] w-full bg-white flex flex-col">
                        <h1 className="text-center underline underline-offset-8 text-blue-600 text-3xl w-full">Skills</h1>
                        <div className=" grow px-30 flex justify-center items-center gap-10">
                            <div className=" flex flex-col basis-1/2 gap-10">
                                
                                <div className="w-full flex flex-col justify-center gap-4">
                                    <h1><b>Professional Skills</b></h1>
                                    <p className=" ">fuga ullam nulla ipsum nemo totam soluta corrupti possimus! Excepturi itaque possimus, minima architecto placeat repellendus. </p>
                                    <Skill/>
                                    <Skill/>
                                    <Skill/>
                                </div>
                            </div>
                            <img className="border basis-1/2 h-70 rounded-sm"></img>
                        </div>
                    </div>
                </section>

                <section ref={api} className="pt-20">
                    <div  className="h-[85vh] w-full bg-white flex flex-col">
                        <h1 className="text-center underline underline-offset-8 text-blue-600 text-3xl w-full">I'am on API</h1>
                        <div className=" grow px-30 flex justify-center items-center gap-10">
                            <div className=" flex flex-col basis-1/2 gap-3 transition-all duration-900" ref={(el) => (elementsRef.current[2] = el)}>
                               <h1>Find me via API:</h1> 
                               <p>I have created api in DRF, you can make get requests on it</p>
                               <p>/myprofile/</p>
                               <p>/skill/</p>
                               <p>/projects/</p>
                               <p>/qualification/</p>
                               <p>/extra-activity/</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section ref={contact} className="pt-20">
                    <div  className="h-[85vh] w-full bg-white flex flex-col">
                        <h1 className="text-center underline underline-offset-8 text-blue-600 text-3xl w-full">Contact</h1>
                        <div className=" grow px-30 flex justify-center items-center gap-10">
                            <div className=" flex flex-col basis-1/2 gap-5">
                               <input name="name" type="text" onChange={formHandler} placeholder="Name" className="p-2 border rounded-sm border-blue-600/30 outline-blue-600 transition-all duration-900" ref={(el) => (elementsRef.current[3] = el)}/>
                               <input name="email" type="email" onChange={formHandler} placeholder="Your Email" className="p-2 border rounded-sm border-blue-600/30 outline-blue-600 transition-all duration-900" ref={(el) => (elementsRef.current[4] = el)}/>             
                               <textarea  name="message" onChange={formHandler} id="message" rows="7" className="p-2 border rounded-sm border-blue-600/30 outline-blue-600 transition-all duration-900" ref={(el) => (elementsRef.current[5] = el)}></textarea>
                                <input type="button" value="Send" onClick={formSubmit } className="bg-blue-600 w-fit h-fit px-4 py-2 rounded-sm cursor-pointer text-white transition-all duration-900" ref={(el) => (elementsRef.current[6] = el)} />
                            </div>
                        </div>
                    </div>
                </section>
                <footer>
                    <div className="w-full h-50 bg-blue-950 p-10">
                        <h1 className="text-white">Mohammad Ashraf</h1>
                        <a href=""><Mail className="w-5 h-5" /></a>
                        <a href=""><Linkedin className="w-5 h-5 text-blue-600" /></a>
                        <a href=""><Github className="w-5 h-5" /></a>
                        <a href="wa.me 91 9576188048"><svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="currentColor"
                            viewBox="0 0 32 32">
                                    <path d="M16 .396C7.164.396.003 7.559.003 16.396c0 2.891.755 5.645 2.189 8.091L0 32l7.704-2.013a15.96 15.96 0 0 0 8.295 2.296h.006c8.836 0 16-7.163 16-16 0-8.837-7.164-16-16-16zm0 29.157a13.16 13.16 0 0 1-6.683-1.838l-.48-.285-4.578 1.195 1.22-4.455-.31-.513A13.13 13.13 0 0 1 2.87 16.396c0-7.333 5.964-13.298 13.297-13.298S29.463 9.063 29.463 16.396c0 7.332-5.964 13.297-13.297 13.297zm7.388-9.614c-.403-.202-2.38-1.175-2.75-1.309-.369-.134-.638-.202-.908.202-.268.403-1.041 1.309-1.276 1.576-.235.268-.47.302-.874.101-.403-.202-1.705-.628-3.248-2.003-1.2-1.073-2.008-2.396-2.242-2.8-.235-.403-.026-.62.177-.822.182-.182.403-.47.604-.705.201-.235.268-.403.403-.671.134-.268.067-.504-.034-.705-.101-.202-.908-2.188-1.243-2.991-.327-.792-.66-.685-.908-.697-.235-.014-.504-.017-.774-.017s-.705.101-1.075.504c-.369.403-1.411 1.378-1.411 3.36 0 1.982 1.444 3.894 1.644 4.162.201.268 2.837 4.35 6.875 6.102.963.416 1.714.664 2.298.851.964.307 1.84.264 2.535.16.774-.115 2.38-.974 2.716-1.915.336-.94.336-1.748.235-1.915-.101-.167-.369-.268-.772-.47z"/>
                        </svg></a>
                        

                    </div>
                </footer>
            </div>
        </>
    )
}
export default MainPage;