import React, { useState, useEffect } from 'react';

export default function Jokes (props) {
    const getJokes = async () => {
        try {
          const response = await fetch('http://localhost:3000/jokes')
          const data = await response.json()
          console.log(data)
         } catch(error){
           console.error(error)
         }
       } 
        useEffect(()=>{
         (
         async function (){
         await getJokes()
         }
         )()
         },[])
       
         return(
            <h1>Dad Jokes</h1>
        )
    };






 