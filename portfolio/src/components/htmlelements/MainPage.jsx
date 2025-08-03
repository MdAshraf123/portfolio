import { Mail, Github, Linkedin, MapPin } from "lucide-react";
import React,{useRef, useEffect, useState} from 'react';
import me1 from '../../assets/me1.png';
import me2 from '../../assets/me2.png';
import me3 from '../../assets/me3.png';
import mefull from '../../assets/mefull.png';
import skillimg from '../../assets/skill.jpg';
import drflogo from '../../assets/drf.png';
import reactlogo from '../../assets/react.svg';
import djangologo from '../../assets/Django.svg';
import barbtn from '../../assets/bars.svg';
import closebtn from '../../assets/close.png';
import Skill from './Skill';

const MainPage=()=>{
    const [menubtn, setMenubtn]=useState(false)
    const skill=useRef(null);
    const home=useRef(null);
    const about=useRef(null);
    const project=useRef(null);
    const api=useRef(null);
    const activity=useRef(null);
    const elementsRef=useRef([]);
    const [formData,setFormData]=useState({'name':'','email':'','message':''});
    const HOST_URL='http:localhost:8000//api/';
    // function formHandler(e){
    //     setFormData((prev)=>({...formData,[e.target.name]:e.target.value,}))
    // }

    // function formSubmit(){
    //     if(formData.name.trim()==''){
    //         alert('Please enter name!');
    //     }
    //     else if(formData.message.trim()==''){
    //         alert('Please write message!')
    //     }
    //     else if(!'/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/'.test(formData.email.trim())){
    //          alert('Please enter valid email!')
    //     }
    //     try{
    //         fetch(LOCAL_URL+'post-mail/',{
    //             method:'POST',
    //             headers:{
    //                 'Content-Type':'application/json',
    //             },
    //             body:JSON.stringify(formData),
    //         })
    //         .then((res)=>{
    //             return res.json()
    //         })
    //         .then((data)=>{
    //             alert(data.message)
    //         })
    //     }
    //     catch( Error){
    //         alert('Something went wrong!')
    //     }
            
    // }
    
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
            <div className=" w-full h-auto min-h-screen  ">{/* main div */}

                {/* Nav bar  */}
                <div className="border-1 border-black/10 bg-white w-full min-h-20  flex flex-col items-center fixed top-0 left-0 z-50 ">
                    <div className="flex w-full h-20 py-2 px-20 items-center  ">
                        <h2 className="mr-auto text-transparent bg-gradient-to-r from-blue-600 to-red-500 bg-clip-text"><b>Mohammad Ashraf</b></h2>
                        <ul className="hidden md:flex space-x-5 h-fit ml-auto">
                            <li><button className="nav-link cursor-pointer border-b-2 border-b-transparent" onClick={(e)=>{home.current?.scrollIntoView({ behavior: 'smooth' }); }}>Home</button></li>
                            <li><button className="nav-link cursor-pointer border-b-2 border-b-transparent" onClick={(e)=>{about.current?.scrollIntoView({ behavior: 'smooth' });}}>About</button></li>
                            <li><button className="nav-link cursor-pointer border-b-2 border-b-transparent" onClick={(e)=>{skill.current?.scrollIntoView({ behavior: 'smooth' });}}>Skills</button></li>
                            <li><button  className="nav-link cursor-pointer border-b-2 border-b-transparent" onClick={(e)=>{project.current?.scrollIntoView({ behavior: 'smooth' });}} >Projects</button></li>                       
                            <li><button  className="nav-link cursor-pointer border-b-2 border-b-transparent" onClick={(e)=>{activity.current?.scrollIntoView({ behavior: 'smooth' });}}>Extra-Activity</button></li>                   
                            <li><button className="nav-link cursor-pointer border-b-2 border-b-transparent" onClick={(e)=>{api.current?.scrollIntoView({ behavior: 'smooth' });}}>API</button></li>
                        
                        </ul>
                        <button className="ml-auto w-6 h-6 " onClick={()=>{ setMenubtn((prev)=>!prev)}}><img src={!menubtn? barbtn : closebtn } alt="menu" /></button>
                    </div>
                     <div className={ menubtn ? "w-full  bg-white" : "hidden" } >
                        <ul className="w-full">
                        <li><button  className="nav-link cursor-pointer border-y p-4 w-full border-transparent hover:border-black/10 " onClick={(e)=>{home.current?.scrollIntoView({ behavior: 'smooth' }); setMenubtn(false); }}>Home</button></li>
                        <li><button  className="nav-link cursor-pointer border-y p-4 w-full border-transparent hover:border-black/10" onClick={(e)=>{about.current?.scrollIntoView({ behavior: 'smooth' }); setMenubtn(false); }}>About</button></li>
                        <li><button  className="nav-link cursor-pointer border-y p-4 w-full border-transparent hover:border-black/10" onClick={(e)=>{skill.current?.scrollIntoView({ behavior: 'smooth' }); setMenubtn(false);}}>Skills</button></li>
                        <li><button  className="nav-link cursor-pointer border-y p-4 w-full border-transparent hover:border-black/10" onClick={(e)=>{project.current?.scrollIntoView({ behavior: 'smooth' }); setMenubtn(false);}} >Projects</button></li>                       
                        <li><button  className="nav-link cursor-pointer border-y p-4 w-full border-transparent hover:border-black/10" onClick={(e)=>{activity.current?.scrollIntoView({ behavior: 'smooth' }); setMenubtn(false);}}>Extra-Activity</button></li>                   
                        <li><button  className="nav-link cursor-pointer border-y p-4 w-full border-transparent hover:border-black/10" onClick={(e)=>{api.current?.scrollIntoView({ behavior: 'smooth' }); setMenubtn(false);}}>API</button></li>
                    
                    </ul>
                    </div>

                </div>

                  

                {/* Home section */}
                <section ref={home} className="pt-20" id='home'>
                <div  className="md:h-[85vh] w-full bg-white flex flex-col md:flex-row-reverse"> 
                    <div className=" md:pt-0 grow basis-1/2 flex justify-center items-center ">
                        <img src={me3} alt="profile" className=" w-70 h-70 lg:w-110 lg:h-110 my-5" />
                    </div>             
                    <div className=" grow basis-1/2 flex flex-col justify-center items-center px-7 md:pl-30 ">                       
                        <h1 className="w-full  text-2xl leading-7 lg:text-5xl lg:leading-15">Hi,<br/>I'am <span className="text-blue-600">Mohammad Ashraf</span> <br/> Full-Stack Developer</h1>
                        <div className="w-full">
                            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=mdashraf6776@gmail.com" target="_blank" rel="noopener noreferrer" className="inline-block border mt-10  self-start p-2 w-fit h-fit rounded-sm cursor-pointer bg-blue-600 text-white font-light hover:text-white">Contact</a>
                        </div>                 
                    </div>
                    
                </div>
                </section>


                {/*About section */}
                <section ref={about} className="pt-20" id='about'>
                    <div  className="md:h-[85vh] w-full bg-white flex flex-col">
                        <h1 className="mb-4 text-center underline underline-offset-8 text-blue-600 text-3xl w-full">About</h1>
                        <div className=" grow border-box px-7 md:p-10 flex justify-center items-center">
                            <div className="flex flex-col items-center md:flex-row lg:justify-end gap-10 w-full md:w-4/5 max-w-4xl">
                                <img src={mefull} alt="my_img" className="w-50 h-65  transition-all duration-1000  " ref={(el) => (elementsRef.current[0] = el)} />
                                <div className="w-full md:w-[60%] flex flex-col justify-center transition-all duration-900" ref={(el) => (elementsRef.current[1] = el)}>
                                    <h1><b>I'am Mohammad Ashraf</b></h1>
                                    <p >I am a Computer Science Engineering student with a strong interest in full-stack web development and artificial intelligence. I enjoy learning new technologies and building real-world projects. My goal is to master Data Structures and Algorithms and become a skilled full-stack developer using React for the frontend and Django REST Framework (DRF) for the backend.

I have a goo                        d understanding of Django and I’m currently focusing on building REST APIs with DRF. I am also exploring the fields of AI and machine learning to expand my knowledge and skills. I love solving problems, creating useful applications, and continuously improving through hands-on projects and practice.

</p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </section>


                {/*Skill section */}
                <section ref={skill} className="pt-20">
                    <div  className="md:h-[85vh] w-full bg-white flex flex-col">
                        <h1 className="text-center underline underline-offset-8 text-blue-600 text-3xl w-full mb-4">Skills</h1>
                        <div className=" grow px-7 md:px-30 flex flex-col md:flex-row-reverse justify-center items-center gap-10">
                            <img src={skillimg} alt="skill_img" className=" basis-1/2 w-65 lg:w-120  aspect-[5/3] rounded-sm"/>
                            <div className=" flex flex-col basis-1/2 gap-10">
                                
                                <div className="w-full flex flex-col justify-center gap-4 transition-all duration-1000" ref={(el) => (elementsRef.current[2] = el)} >
                                    <h1><b>Professional Skills</b></h1>
                                    {/* (Django Rest Framework) */}
                                    <p className=" ">Proficient in building REST APIs using Django and Django REST Framework. Comfortable with frontend development using React and integrating it with backend services for full-stack applications.</p>
                                    <Skill logo={drflogo} skill={'DRF '} ref={(el) => (elementsRef.current[3] = el)} />
                                    <Skill logo={djangologo} skill={'Django'} ref={(el) => (elementsRef.current[4] = el)} />
                                    <Skill logo={reactlogo} skill={'React'} ref={(el) => (elementsRef.current[5] = el)} />
                                   
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </section>


                {/**project section */}
                <section ref={project} className="pt-20">
                    <div  className="md:h-[85vh] w-full bg-white flex flex-col">
                        <h1 className="text-center underline underline-offset-8 text-blue-600 text-3xl w-full">Projects</h1>
                        <div className="p-7 md:p-0 md:px-30 transition-all duration-1000" ref={(el) => (elementsRef.current[6] = el)}>
                            <ol className="w-full max-w-screen">

                                <li className="my-4 md:my-4">
                                    <h1><b>Project: </b>AGC ERP</h1>
                                    <p><b>Synopsis: </b>AGC ERP is a centralized system designed to manage academic, administrative, and student-related activities efficiently at AGC.</p>
                                    <p><b>Technology: </b>DRF (Django Rest Framework), React, SQLite</p>
                                    <p><b>GitHub: </b><a className="underline break-words" href="https://github.com/MdAshraf123/djangoReact">https://github.com/MdAshraf123/djangoReact</a></p>
                                </li>

                                <li className="my-4 md:my-4">
                                    <h1><b>Project: </b>DoctorsHub</h1>
                                    <p><b>Synopsys: </b>To provide an easy-to-use platform for patients to search, view, and book appointments with doctors online anytime.</p>
                                    <p><b>Technology: </b>Django, JS, HTML5, CSS3, SQLite</p>
                                    <p><b>GitHub: </b><a className="underline break-words"  href="https://github.com/MdAshraf123/Medicare_Django">https://github.com/MdAshraf123/Medicare_Django</a></p>
                                </li>
                                
                                <li className="my-4 md:my-4">
                                    <h1><b>Project: </b>LMS</h1>
                                    <p><b>Synopsis: </b>Learning management system</p>
                                    <p><b>Technology: </b>C++, File Handling</p>
                                    <p className=" text-wrap"><b>GitHub: </b><a className="underline break-words" href="https://github.com/MdAshraf123/cpp_projects/tree/main/3rd%20sem%20projects%20in%20c%2B%2B/Learning%20management%20system">https://github.com/MdAshraf123/cpp_projects/tree/main/3rd%20sem%20projects%20in%20c%2B%2B/Learning%20management%20system</a></p>
                                </li>
                            </ol>
                        </div>
                       
                    </div>
                </section>
                
                
                {/* Activity section */}
                <section ref={activity} className="pt-20">
                    <div  className="md:h-[85vh] w-full bg-white flex flex-col">
                        <h1 className="text-center underline underline-offset-8 text-blue-600 text-3xl w-full">Extra-Activity</h1>
                        
                            <div className="px-7 md:px-30 transition-all duration-1000" ref={(el) => (elementsRef.current[7] = el)}>
                               <ul className="list-disc list-inside" >
                                    <li className="my-9">Actively participated in college-level technical and creative events like CodeBrain and LogoQuest, earning certificates of participation.</li>
                                    
                                    <li className="my-9">
                                        Mini Hackathon organized by Hostel Technical Committee.
                                        <p><b>Position: </b>🏅  1st</p>
                                    </li>

                                    <li className="my-9">
                                        Video Editing Contest held by Applied Science Department at AGC.
                                        <p><b>Position: </b>🏅 2nd</p>
                                    </li>
                                </ul>                            
                            </div>
                     
                    </div>
                </section>


                <section ref={api} className="pt-20">
                    <div  className="h-[85vh] w-full bg-white flex flex-col">
                        <h1 className="mb-4 text-center underline underline-offset-8 text-blue-600 text-3xl w-full">I'am on API</h1>
                    
                        <div className="px-7 md:px-30 transition-all duration-1000" ref={(el) => (elementsRef.current[8] = el)}>
                            
                            <p>I have created api's in DRF, you can make get requests on them.</p>
                            <p><b>BaseURL: </b> https://ashrafporfolio.onrender.com/<br/>api</p>
                            <p><b>Routs- </b></p>
                            <ul className="list-disc list-inside">
                                <li>/profile/</li>
                                <li>/skills/</li>
                                <li>/projects/</li>
                                <li>/qualifications/</li> 
                                <li>/extra-activities/</li>
                            </ul>
                        </div>
                       
                    </div>
                </section>



                {/* <section ref={contact} className="pt-20">
                    <div  className="h-[85vh] w-full bg-white flex flex-col">
                        <h1 className="text-center underline underline-offset-8 text-blue-600 text-3xl w-full">Contact</h1>
                        <div className=" grow px-30 flex justify-center items-center gap-10">
                            <div className=" flex flex-col basis-1/2 gap-5">
                               <input name="name" type="text" onChange={formHandler} placeholder="Name" className="p-2 border rounded-sm border-blue-600/30 outline-blue-600 transition-all duration-900" ref={(el) => (elementsRef.current[8] = el)}/>
                               <input name="email" type="email" onChange={formHandler} placeholder="Your Email" className="p-2 border rounded-sm border-blue-600/30 outline-blue-600 transition-all duration-900" ref={(el) => (elementsRef.current[9] = el)}/>             
                               <textarea  name="message" onChange={formHandler} id="message" rows="7" className="p-2 border rounded-sm border-blue-600/30 outline-blue-600 transition-all duration-900" ref={(el) => (elementsRef.current[10] = el)}></textarea>
                                <input type="button" value="Send" onClick={formSubmit } className="bg-blue-600 w-fit h-fit px-4 py-2 rounded-sm cursor-pointer text-white transition-all duration-900" ref={(el) => (elementsRef.current[11] = el)} />
                            </div>
                        </div>
                    </div>
                </section> */}
                <footer>
                    <div className="flex flex-col  gap-10 items-center w-full h-50 bg-blue-950 p-10">
                        <h1 className="text-white">Mohammad Ashraf</h1>
                        <div className="flex gap-10">
                            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=mdashraf6776@gmail.com" target="_blank" rel="noopener noreferrer"><Mail className="w-5 h-5 text-red-600" /></a>
                            <a href="https://www.linkedin.com/in/mdashraf123" target="_blank" rel="noopener noreferrer"><Linkedin className="w-5 h-5 text-blue-600" /></a>
                            <a href="https://github.com/MdAshraf123" target="_blank" rel="noopener noreferrer"><Github className="w-5 h-5 text-black" /></a>
                            <a href="https://wa.me/+919576188048" target="_blank" rel="noopener noreferrer"><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                className="stroke-green-500 fill-green-500"
                                fill="currentColor"
                                viewBox="0 0 32 32">
                                        <path d="M16 .396C7.164.396.003 7.559.003 16.396c0 2.891.755 5.645 2.189 8.091L0 32l7.704-2.013a15.96 15.96 0 0 0 8.295 2.296h.006c8.836 0 16-7.163 16-16 0-8.837-7.164-16-16-16zm0 29.157a13.16 13.16 0 0 1-6.683-1.838l-.48-.285-4.578 1.195 1.22-4.455-.31-.513A13.13 13.13 0 0 1 2.87 16.396c0-7.333 5.964-13.298 13.297-13.298S29.463 9.063 29.463 16.396c0 7.332-5.964 13.297-13.297 13.297zm7.388-9.614c-.403-.202-2.38-1.175-2.75-1.309-.369-.134-.638-.202-.908.202-.268.403-1.041 1.309-1.276 1.576-.235.268-.47.302-.874.101-.403-.202-1.705-.628-3.248-2.003-1.2-1.073-2.008-2.396-2.242-2.8-.235-.403-.026-.62.177-.822.182-.182.403-.47.604-.705.201-.235.268-.403.403-.671.134-.268.067-.504-.034-.705-.101-.202-.908-2.188-1.243-2.991-.327-.792-.66-.685-.908-.697-.235-.014-.504-.017-.774-.017s-.705.101-1.075.504c-.369.403-1.411 1.378-1.411 3.36 0 1.982 1.444 3.894 1.644 4.162.201.268 2.837 4.35 6.875 6.102.963.416 1.714.664 2.298.851.964.307 1.84.264 2.535.16.774-.115 2.38-.974 2.716-1.915.336-.94.336-1.748.235-1.915-.101-.167-.369-.268-.772-.47z"/>
                                </svg>
                            </a>
                        </div>
                        
                        

                    </div>
                </footer>
            </div>
        </>
    )
}
export default MainPage;