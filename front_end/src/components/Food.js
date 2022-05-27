const Food = (props) => {

    return(
        <div id='food-div'>
            <h3 id='description'>Name: {props.food.name}</h3>

            <img id='foodImg' src={props.food.image} alt={props.food.name}></img>
            <br/>

            {/* Button currently toggles all descriptions not just the one  */}
            {/* <button onClick={(event) => {props.displayDescription(event, props.description)}}>See Description</button>
            {props.showDescription ? <h4>{props.food.description}</h4>: null}
            <br/> */}
            <h4 id='description'>{props.food.description}</h4>
            <h4 id='description'>Edit Food</h4>
            <form onSubmit={(event) => {props.editFood(event, props.food)}}>
                <input placeholder='Name' onChange={props.handleNewName} type="text" required/><br/>
                <input placeholder='Img Link' onChange={props.handleNewImage} type="text" required/><br/>
                <input placeholder='Description' onChange={props.handleNewDescription} type="text" required/><br/>
                <input id='button' type="submit" value="Edit Food"/>
            </form>

            <button onClick={(event) => {props.removeFood(props.food)}}>Remove Food</button>

            
        </div>
    )

} 
export default Food