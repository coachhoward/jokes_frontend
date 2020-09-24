import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Jokes from './components/Jokes';
export default function App() {
  const [jokes, setJokes] = useState([]);
  const [formInputs, updateFormInputs] = useState({
    author: '',
    content: '',
    title: ''
  });
  const getJokes = async ()=>{
    try{
      const response = await fetch('https://dadjokes-app-api.herokuapp.com/jokes');
      const data = await response.json();
      setJokes(data)
    }catch(error){
      console.error(error)
    }
  }
  useEffect(
    ()=>{
      (
        async function (){
           await getJokes();
        }
      )()
    }, [])
  const handleChange = (event) => {
    const updatedFormInputs = Object.assign({}, formInputs, { [event.target.id]: event.target.value})
    updateFormInputs(updatedFormInputs);
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        'https://dadjokes-app-api.herokuapp.com/jokes',
        formInputs
      );
      const createdJoke = response.data
      await updateFormInputs({
        author: '',
        title: '',
        content: ''
      })
      await setJokes([createdJoke, ...jokes])
    }catch(error){
      console.error(error)
    }
  }
  return (
    <div className="App">
        <div className="container">
            <nav>
              <h4>Post A Clean Joke</h4>
              <form onSubmit={handleSubmit}>
                <label htmlFor="author">Author</label>
                <input
                  type="text"
                  id="author"
                  onChange={handleChange}
                  value={formInputs.author}
                  />
                <label htmlFor="title">Ask A Joke</label>
                <input
                  type="text"
                  id="title"
                  onChange={handleChange}
                  value={formInputs.title}
                  />
                <label htmlFor="content">Answer</label>
                <input
                  type="text"
                  id="content"
                  onChange={handleChange}
                  value={formInputs.content}
                  />
                <input type="submit" className="submit" />
              </form>
            </nav>
            <main>
              <Jokes jokes={jokes}/>
            </main>
            <aside>
            </aside>
        </div>
        <footer />
    </div>
  );
}
