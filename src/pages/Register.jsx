import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
function Register() {

    const handle = (e)=>{
        e.preventDefault()
        console.log('console')
    }
  return (
    <div>
      <NavBar />
      <div className="flex justify-center h-screen ">
        
            <img src="s4.jpg" className="fixed bottom-0 left-0 right-0 w-screen h-screen z-[-50] object-cover" alt="" />
        {/* <div classNam="">
            <img src="" alt="" />
        </div> */}
        <form onSubmit={handle} className='flex flex-col h-fit border w-8/12 md:w-5/12 lg:w-4/12 shadow-lg p-4 bg-white opacity-70 rounded-lg [&>*]:m-6   [&>input]:bg-gray-200 [&>input]:rounded [&>input]:px-3 [&>input]:py-2'>
          <h1 className='font-bold text-xl ps-6'>Sign up</h1>
          <input type="text" className="border-red-500 border-b-6" placeholder="Your name"/> 
          <input type="email" placeholder="Your Email"/>
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Repeat your password"/>
          <span className='[&>*]:m-2'>
          <input type="checkbox" /><span>I agree all statements in <Link to='' className='underline'>Term of service</Link></span> 
          </span>
          <button type='submit' className='w-10/12 shadow-md  p-2 bg-blue-600 text-white hover:white hover:bg-blue-800 rounded-lg'>Register</button>
        </form>
        </div>
    
      {/* <Footer /> */}
    </div>
  );
}

export default Register;
