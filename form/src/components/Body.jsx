import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faComments } from '@fortawesome/free-solid-svg-icons'
import {useState} from "react";
const Body = () => {


  const [name,setName] =useState("Dipesh")
  const[email,setEmail]= useState("123@gmail.com")
  const[text,setText]=useState("Subscribe");

  const onSubmit = (event) => {
    event.preventDefault(); // Prevents the default form submission behavior
    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);

    console.log({name,email,text});
   

    // Add your form submission logic here
  };
  return (
    <>
    <div>
         <div className="contact">
            <h1>CONTACT US</h1>
            <h4> LET'S CONNECT:WE'RE HERE TO HELP,AND WE'D LOVE TO HEAR FROM YOU WHETHER YOU HAVE A QUESTION,COMMENT ,OR<br/>
            JUST WANT TO CHAT,YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE,OR BY PHONE,EMAIL,OR <br/>BY SOCIAL MEDIA. </h4>
         </div>



         <div className="middle">

              <div className="midd1">
                      <div className="chat">
                        
                          <button className='btn1'><FontAwesomeIcon icon={faComment}/>VIA SUPPORT CHAT</button>
                          <button className='btn2' ><FontAwesomeIcon icon={faPhone} />VIA CALL</button>

                        
                      </div>
                      <div className="email">
                        <button className='btn3'> <FontAwesomeIcon icon={faComments} />VIA EMAIL FORM</button>
                      </div>
                   <form  className="formm" onSubmit={onSubmit} >
                      <div className="name">
                      <label for="fname"> Name</label><br/>
                        <input type="text" placeholder=''></input>
                      </div>
                      <div className="gmail">
                      <label for="fgmail">Email</label><br/>

                        <input type="text" placeholder=""></input>
                      </div>
                      <div className="text">
                      <label for="ftext">Text</label><br/>

                        <input type="text" placeholder="" style={{height:'200px',width:'350px'}}></input>
                      </div>
                      <div className="submit">
                        <button onSubmit={onSubmit}className='btnS'>Submit</button>
                      </div>
                      <div>{name + " " +email +" " + text}</div>
                      </form>
              </div>

             
             <div className="midd2">
             <img className='form' src="/form.png"></img>
  
             </div>
         </div>
     


        </div>   
</>
  )
}

export default Body
