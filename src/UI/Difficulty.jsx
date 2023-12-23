import React, { useEffect, useState } from 'react';
import '../style/difficulty.css';
import { useNavigate } from "react-router-dom";
import {useSelector,useDispatch} from 'react-redux';
import { setdifficulty } from '../UI/Home/HomeSlice';
const Difficulty = () => {
    const {username} = useSelector((data)=>data.home);
    const navigate =useNavigate();
    const [diffic,setdiffic]=useState('');
    const dispatch =useDispatch();

    const handleDifficulty =()=>{
        if(diffic){
            dispatch(setdifficulty(diffic))
            navigate('/game');
        }
    }
    useEffect(()=>{
        console.log(diffic)
        if(!username){
            navigate('/');
        }
        handleDifficulty()
    },[diffic])
   
    

    return (
       <div className='container'>
         <div className='difficulty row vh-100'>
                <div className='wlcm col-lg-6'>
                    <div>
                    <h1><span>Welcome to the</span><br/>Countries Quiz!</h1>
                    </div>
                    <div className='pickdif'>
                    <span>Pick a difficulty to get started.</span>
                    </div>
                </div>  
                <div className='ch-diff col-lg-6'>
                    <div className='btns'>
                        <ul>
                            <li><button onClick={()=>{setdiffic('easy')}}>EASY</button></li>
                            <li><button onClick={()=>{setdiffic('medium')}}>MEDIUM</button></li>
                            <li><button onClick={()=>{setdiffic('hard')}}>HARD</button></li>
                        </ul>
                    </div>
                </div>  
        </div>
       </div>
    );
}

export default Difficulty;
