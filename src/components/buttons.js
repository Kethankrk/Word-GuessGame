import React, { useState } from 'react';

export default function Btns(props){

    const abcd = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    const btnText = abcd.map(e =>(
        <button className="inputBtn" onClick={check}>{e}</button>
    ))
    if(props.btnReset == false){
        window.location.reload()
        props.btnResetAdd(true)
    }

    function check(e){
        if(props.won === true){
            return
        }
        else if(props.chance === 0){
            return
        }
        else if (props.word.includes(e.target.innerText)){
            props.lol(prev => (
                [...prev, e.target.innerText]
            ))
        }
        else{
            if(props.letters.includes(e.target.innerText)){
                return
            }
            else{
                props.chanceReducer(prev => prev-1)
                e.target.style.backgroundColor = "transparent"
                e.target.style.border = "none"
                e.target.style.color = "transparent"
                props.letters.push(e.target.innerText)
            }
        }
        
    }

    return(
        <div className="btnC">
            {btnText}
        </div>
    )
}