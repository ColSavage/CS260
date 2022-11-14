import { Component } from "react";
import "./bob.css";
function getSingleId(json) {
        var count;
        
        for(let i = 0; i < json.length; i++) {
            count += 1;
        }   
        
        return count;
}


class Bob extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Zeke",
            image: "https://bobsburgers-api.herokuapp.com/images/characters/506.jpg",
            age: "13-14",
            firstEpisode: "\"The Belchies\"",
            voicedBy: "Bobby Tisdale"
        }
    }
    
    callTheApi = () => {
        let charUrl = "https://bobsburgers-api.herokuapp.com/characters/" + Math.floor(Math.random() * 506);
        console.log(charUrl);
        fetch(charUrl)
        .then(charInfo => {
            return charInfo.json();
        })
        .then(json => {
            console.log(json);
            this.setState({
                name: json.name,
                image: json.image,
                age: json.age,
                firstEpisode: json.firstEpisode,
                voicedBy: json.voicedBy
                
            });
        });
    };
        
    render() {
        return (
            <>
                <div class="container">
                    <h1>{this.state.name} </h1>
                    <img src={this.state.image} alt={this.state.character} />
                    <div class="description">
                        <p><strong>Age:</strong> {this.state.age}</p>
                        <p><strong>First Episode:</strong> {this.state.firstEpisode}</p>
                        <p><strong>Voiced By:</strong> {this.state.voicedBy}</p>
                    </div>
                    <button onClick={this.callTheApi}>Next Character</button>
                </div>
            </>
        );
    }
        
    

    
}

export default Bob;