import React from 'react';
export default function Jokes (props) {
  return (
    <div>
      {
        props.jokes.map( joke =>{
          return (
            <div key={joke.id} className="joke">
              <h3>{joke.title}</h3>
               <p> {joke.content}</p>
               <small>{joke.author}</small>
            </div>
          )
        })
      }
    </div>
  );
}





 