const Food = (props) => {

    return(
        <div id='food-div'>
            <h3>Name: {props.food.name}</h3>
            <img id='foodImg' src={props.food.image} alt={props.food.name}></img>
            <br/>
            <button onClick={(event) => {props.displayDescription(props.description)}}>See Description</button>
            {props.showDescription ? <h4>{props.food.description}</h4>: null}
            <br/>
            <h3>description: {props.food.description}</h3>
            <button onClick={(event) => {props.removeFood(props.food)}}>Remove Food</button>
            <h4>Edit Food</h4>
            <form onSubmit={(event) => {props.editFood(event, props.food)}}>
                <input placeholder='Name' onChange={props.handleNewName} type="text" required/><br/>
                <input placeholder='Img Link' onChange={props.handleNewImage} type="text" required/><br/>
                <input placeholder='Description' onChange={props.handleNewDescription} type="text" required/><br/>
                <input id='button' type="submit" value="Edit Food"/>
            </form>
            
        </div>
    )

} 
export default Food