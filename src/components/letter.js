import React, { useState } from 'react';


export default function Letters(props){

    const forDiv = []
    const Words = Object.values(props)
    const won = []

    for (let i in Words[props.randomNum]){
        if(props.value.includes(Words[props.randomNum][i])){
            forDiv.push(<div className="letter" key={i}>{Words[props.randomNum][i]}</div>)
            won.push(i)
        }
        else{
            forDiv.push(<div className="letter" key={i}></div>)
        }
    }

    if (won.length == forDiv.length){
        console.log("Won")
        props.changeWon(true)
    }
    
    return(
        <div className="display">
            {forDiv}
        </div>
    )
}