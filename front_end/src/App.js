import './App.css';
import {useEffect, useState} from 'react';
import axios from 'axios';
import Food from './components/food.js'


function App() {
  return (
    <div>
      <h1>Food</h1>
      <section>
        <h2>Add a New Food to Our Menu</h2>
        <form onSubmit={handleNewFoodFormSubmit}>
          Name: <input type="text" onChange={handleNewName}/><br/>
          Image Link: <input type="text" onChange={handleNewImage}/><br/>
          <input type="submit" value="Create New Food Listing"/>
        </form>
      </section>
    </div>
  );
}

export default App;
