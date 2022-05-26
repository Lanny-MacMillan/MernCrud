import './App.css';
import {useEffect, useState} from 'react';
import axios from 'axios';
import Foods from './components/Food'


function App() {
  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [food, setFood] = useState([])

  const handleNewName = (event) => {
    // console.log(event.target.value)
    setName(event.target.value)
  }
  const handleNewImage = (event) => {
    // console.log(event.target.value)
    setImage(event.target.value)
  }
  const handleFormSubmit = (event) => {
    event.preventDefault();
    axios.post(
      'http://localhost:3000/menu',
      {
        name:name,
        image:image,
      }//then request is so we dont have to reload page on submission
    ).then(()=>{
      axios
          .get('http://localhost:3000/menu')
          .then((response)=>{
              setFood(response.data)
          })
      })
  }

  const editFood = (event, foodData) => {
    event.preventDefault()
      axios
        .put(
          `http://localhost:3000/menu/${foodData._id}`,
          {
            name: name,
            image: image,
          }
      )
      .then(() => {
        axios
          .get('http://localhost:3000/menu')
          .then((response) => {
              setFood(response.data)
          })
      })
  }

  const removeFood = (foodData)=>{
    axios
        .delete(`http://localhost:3000/menu/${foodData._id}`)
        .then(()=>{
            axios
                .get('http://localhost:3000/menu')
                .then((response)=>{
                    setFood(response.data)
                })
        })
  }

  
  useEffect(() => {
    axios 
        .get('http://localhost:3000/menu')
        .then((response) => {
          // console.log(response.data)
          setFood(response.data)
        })
  }, [])


  return (
    <>
    <div>
      
      <section>
      <h1>Menu</h1>
        <h3>Add a New Food to Our Menu</h3>
        <form onSubmit={handleFormSubmit}>
          <input type="text" placeholder="Name" onChange={handleNewName}/><br/>
          <input type="text" placeholder="Image URL" onChange={handleNewImage}/><br/>
          <input type="submit" value="Create New Food Listing"/>
        </form>
      </section>
    </div>
    <div className='container'>
    {food.map((food)=> {
            return <Foods
          //  Props = Values
              food={food} 
              removeFood={removeFood} 
              editFood={editFood}
              handleNewName={handleNewName}
              handleNewImage={handleNewImage}
              key={food._id}/>
          })}
    </div>

    </>
  );
}
function Rnm () {

}
export default App;