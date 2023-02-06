import React, { useState } from 'react';
import './index.css'
import Btns from './components/buttons';
import Letters from './components/letter';

export default function App(){

    const myObject = [{"DIAMOND": "They say it's rare", "SIGNATURE": 'This is usually your name', "CURTAIN": "It keeps you in Dark", "MARBLE": "Its a stone. Maybe you have it in your house", "SIMPLICITY": "Its simple", "COLD": "Its towards 0 °Celsius", "LAUGH": "When you are happy", "BOOK": "Everybody uses it but only few likes it", "HAMMER": "A captain, God and a girl can lift it", "GIRLFRIEND": "Most of them have a hard time getting it", "BLINK": "You does it in every second"}]

    const Words = Object.keys(myObject[0])
    const [chance, editChance] = useState(6)
    const Hint = Object.values(myObject[0])
    const [randomNum, changeRandomNumber] = useState(Math.floor(Math.random()* Words.length))
    const [userInput, appendUserInput] = useState([])
    const [letters, lettesAdd] = useState([])
    const [btnReset, btnResetAdd] = useState(true)
    const [won, changeWon] = useState(false)




    function change(){
        btnResetAdd(false)
        changeWon(false)
    }

	return(
        <section className="gameRoot">
            <h1 className="heading">{won ? "You Win!!!" : chance ? "WORD GUESS GAME" : "Game Over"}</h1>
            <p className='hint'>Hint: {Hint[randomNum]}</p>
            <p className='chance'>Chances left: {chance}</p>
            <Letters {...Words} randomNum={randomNum} value={userInput} changeWon={changeWon}/>
            <Btns value={userInput} lol={appendUserInput} word={Words[randomNum]} chanceReducer={editChance} letters={letters} lettesAdd={lettesAdd} btnReset={btnReset} btnResetAdd={btnResetAdd} won={won} chance={chance}/>
            <div className='forResetBtn'><button className='resetBtn' onClick={change}>RESTART</button></div>
        </section>
    )
}