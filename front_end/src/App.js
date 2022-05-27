import './App.css';
import {useEffect, useState} from 'react';
import axios from 'axios';
import Foods from './components/Food'


function App() {
  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [description, setDescription] = useState('')
  const [showDescription, setShowDescription] = useState(false)
  const [food, setFood] = useState([])

  const handleNewName = (event) => {
    // console.log(event.target.value)
    setName(event.target.value)
  }
  const handleNewImage = (event) => {
    // console.log(event.target.value)
    setImage(event.target.value)
  }
  const handleNewDescription = (event) => {
    // console.log(event.target.value)
    setDescription(event.target.value)
  }
  const displayDescription = (event) => {
    setShowDescription(true)
  }
  const ShowDescription = () => {
    return (
      <>
      {showDescription ? <ShowDescription/> : ''}
      </>
    )
  }
  const handleFormSubmit = (event) => {
    event.preventDefault();
    axios.post(
      'http://localhost:3000/menu',
      {
        name:name,
        image:image,
        description:description,
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
            description:description,
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
      <div id='menu'>
      Menu of the generations best food
      </div>
      <div className='container'>
      <div id='form'>
        <h3 id='head'>Add a New Food to Our Menu</h3>
        <form onSubmit={handleFormSubmit}>
          <input type="text" placeholder="Name" onChange={handleNewName}/><br/>
          <input type="text" placeholder="Image URL" onChange={handleNewImage}/><br/>
          <input type="text" placeholder="Description" onChange={handleNewDescription}/><br/>
          <input type="submit" value="Create New Food Listing"/>
        </form>
      </div>
      </div>
      </section>
    </div>
    <div className='container'>
    {food.map((food)=> {
            return <Foods
          //  Props = Values
              food={food} 
              description={description}
              removeFood={removeFood} 
              editFood={editFood}
              handleNewName={handleNewName}
              handleNewImage={handleNewImage}
              handleNewDescription={handleNewDescription}
              displayDescription={displayDescription}
              showDescription={showDescription}
              ShowDescription={ShowDescription}
              key={food._id}/>
          })}
    </div>

    </>
  );
}
// function thirdAPI () {

// }

export default App;
