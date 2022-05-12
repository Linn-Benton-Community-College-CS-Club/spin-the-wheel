// import the react frame work  and the use state hook to set the state of our wheel
import React, {useState} from 'react'
//import our style sheet
import "./App.css";
//import the rocky logo in our pictures folder
import Rocky from "./pictures/rocky.png"
//import the arrow icon
import { FaLongArrowAltLeft } from 'react-icons/fa';
//import the squares for the prize key
import { BsFillSquareFill } from "react-icons/bs";
//our home function 
function Home() {
    //syntax for use state where our wheelState variable will be the one that will be 
    //either true or false (true if it is stationary, false if it is spinning)
    const [wheelState, setWheelState] = useState(true)
    //function that will begin the rotation of the wheel. Activated when rocky is clicked
    let Rotate = () => {
        //set the state of wheelState to false
        setWheelState(!wheelState);
        //set random timeout for randomized spin
        setTimeout(()=> {
            setWheelState(true);
        },Math.floor(Math.random()* 10000) + 1);
    }
    //potential function for signing up! (probably better for smaller events. Will activate depending on attendence)
    // let signUp = () => {
    //     window.location.href = 'https://docs.google.com/forms/d/1scvJbf9TrvrXip7iQgj-k2V6jA7hvice7P1662CyaWU/edit?usp=sharing';
    // }

    //react semantics for returning elements
  return (
    <>
        <head>
            {/* viewport defines how the app should be viewed
            content is set to the width of the device displayed
            scale content in website to match the device */}
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        </head>
            
            {/* main container */}
            <div className="wheel-container">
                {/* the prize key container */}
                <div className="flex key-container">
                    {/* prompt user to spin the wheel by clicking on rocky, using a header 2 tag */}
                    
                    <h2 className = "title flex">Click on Rocky to Spin the wheel!</h2>
                    <h3 className="key">Prize Key!</h3>
                    <h3 className="dash">__________________________</h3>
                    {/* set the key for the blue prizes */}
                    <p className="blue-square"><BsFillSquareFill color="blue"/> </p>
                    <p className="blue-square-text">Mouse Pad or Rubix Cube </p>
                        
                    {/* replace paragraph tags with a list and make the list different colors */}


                    {/* set the key for the yellow prizes */}
                    <p className="yellow-square"><BsFillSquareFill/>    </p>
                    <p className="yellow-square-text"> 3-D Printed Slug</p>

                    {/* set the key for the white prizes */}
                    <p className="white-square"><BsFillSquareFill/> </p>
                    <p className="white-square-text"> 3 Stickers</p>
                    {/* <button className="glow-on-hover" onClick={signUp}>Click to sign up for the CS Club!</button>                 */}
                </div>
                {/* wheel and arrow container */}
                <div className="flex wheel-and-arrow">
                    {/* arrow using the react icons library */}
                    <div className="arrow"><FaLongArrowAltLeft size={70}/></div>
                    {/* wheel make from an unordered list. Each list entry will be a section of the wheel. 
                    The class name of the wheel will be set to wheel begin-rotation stop-rotation 
                    if it is true. If false, then it will be set to wheel begin-rotation */}
                    <ul className = {wheelState ? "wheel begin-rotation stop-rotation" : "wheel begin-rotation"}>
                        <li>
                            <div className="text"
                            contentEditable = "false"
                            spellCheck='false'> |</div>
                        </li>


                        <li>
                            <div className="text"
                            contentEditable = "false"
                            spellCheck='false'> |</div>
                        </li>

                        <li>
                            <div className="text"
                           contentEditable = "false"
                            spellCheck='false'> |</div>
                        </li>

                        <li>
                            <div className="text"
                            contentEditable = "false"
                            spellCheck='false'> |</div>
                        </li>

                        <li>
                            <div className="text"
                            contentEditable = "false"
                            spellCheck='false'> |</div>
                        </li>

                        <li>
                            <div className="text"
                            contentEditable = "false"
                            spellCheck='false'> |</div>
                        </li>

                        <li>
                            <div className="text"
                            contentEditable = "false"
                            spellCheck='false'> |</div>
                        </li>
                        
                        <li>
                            <div className="text"
                            contentEditable = "false"
                            spellCheck='false'> |</div>
                        </li>

                        <li>
                            <div className="text"
                            contentEditable = "false"
                            spellCheck='false'> |</div>
                        </li>

                        <li>
                            <div className="text"
                            contentEditable = "false"
                            spellCheck='false'> |</div>
                        </li>

                        <li>
                            <div className="text"
                            contentEditable = "false"
                            spellCheck='false'> |</div>
                        </li>

                        <li>
                            <div className="text"
                            contentEditable = "false"
                            spellCheck='false'> |</div>
                        </li>

                    </ul>
                    {/* rocky image */}
                    <img src={Rocky} className="rocky" onClick={()=> Rotate()}/>
                </div>
                
            </div>
                
        </>
  )
}

export default Home;
