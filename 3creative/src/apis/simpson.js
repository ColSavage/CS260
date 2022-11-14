import { Component } from "react";
import "./simpson.css";

class Simpson extends Component { 
    constructor(props) {
        super(props);
        this.state = {
        quote: "Eat my shorts",
        character: "Bart Simpson",
        image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FBartSimpson.png?1497567511638",
        characterDirection: "Right",
        prueba: false
    };
  }
    
    callTheApi = () => {
        let url = "https://simpsons-quotes-api.herokuapp.com/quotes";
        
        fetch(url)
        .then(urlInfo => {
            return urlInfo.json();
        })
        .then(json => {
            console.log(json);
            this.setState({
                quote: json[0].quote,
                character: json[0].character,
                image: json[0].image,
                characterDirection: json[0].characterDirection,
                prueba: true
            });
        });
    };
    
    render() {
        return (
            <>
                <div class="container">
                    <h1>{this.state.character}: </h1>
                    <p>"{this.state.quote}"</p>
                    <img src={this.state.image} alt={this.state.character} />
                    <button onClick={this.callTheApi}>Next Character</button>
                </div>
            </>
        );
    }
}

export default Simpson;