const Greet = (props) => {

    //props.name = "bawal to"
    return (
        <div>
            <h1>Hello {props.name}, a.k.a. {props.heroName}!</h1>
            {props.children}
            <br></br>
        </div>
        )

}

export default Greet