import React, { useState } from 'react';
import '../../style/home.css';
import { useNavigate } from "react-router-dom";
import {useSelector , useDispatch} from "react-redux";
import { setUsername } from './HomeSlice';


const Home = () => {
    const navigate =useNavigate();
    // const name = useSelector(data=>data.username);
    const [Username,SetUsername] = useState('');
    const dispatch =useDispatch();
    const handleSubmit =()=>{
        if(Username){
            dispatch(setUsername(Username))
            navigate('/difficulty');
        }
        
    }
    return (
        
        <div className='home'>
            <h1 className='title'>Countries Quiz <br/> Game</h1>
            <span>Test your globe-trotting skills! A countries quiz that will challenge your geography knowledge.</span>
            <br/>
                <input type='text' 
                id='username' 
                placeholder='Enter Username' 
                value={Username}
                onChange={(e)=>{SetUsername(e.target.value)}}
                 />
            <br/>
            <button  onClick={()=>{handleSubmit()}}>Next</button>
        </div>
    );
}

export default Home;
