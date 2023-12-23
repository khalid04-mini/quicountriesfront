import React from 'react';
import '../../style/game.css';
const GamePage = () => {
    const handleClick=(indx)=>{
        console.log(indx)
        let btns=document.querySelectorAll('.quiz .answer button');
        console.log(btns);
        btns.forEach(element => {
            element.classList.remove('clicked')
        });
        btns[indx].classList.add('clicked')
    }
    return (
        <div className='game container'>
            <div className='score-life'>

            </div>
            <diV className='quiz row'>
                <div className='question-d col-lg-6'>
                    <div className='count-quts'>
                        <span>Question 3 of 10</span>
                    </div>
                    <div className='question'>
                        <h1>What is the biggest country in the world</h1>
                    </div>
                    <div className='progress'>

                    </div>
                </div>
                <div className='answer col-lg-6'>
                    <div className='row'>
                    <button className='col-md-12' onClick={()=>{handleClick(0)}}>
                        <span className='letter'>A</span>
                        <span className='ans'>France</span>
                    </button>
                    <button className='col-md-12' onClick={()=>{handleClick(1)}}>
                        <span className='letter'  >B</span>
                        <span className='ans'>China</span>
                    </button>
                    <button className='col-md-12' onClick={()=>{handleClick(2)}}>
                        <span className='letter'  >C</span>
                        <span className='ans'>Russia</span>
                    </button>
                    <button className='col-md-12' onClick={()=>{handleClick(3)}}>
                        <span className='letter'  >D</span>
                        <span className='ans'>Morocco</span>
                    </button>
                    </div>
                   
                </div> 
            </diV>
            
        </div>
    );
}

export default GamePage;
