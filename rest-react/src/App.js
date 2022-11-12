import logo from './logo.svg';
import './App.css';


function App() {
  
    class CityForm extends React.Component {
      constructor(props) {
        super(props);
        this.state = {value: '', cities:[{"city":"Provo"},{"city":"Lindon"}]};            
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        var url = "https://csonline.byu.edu/city?q=" + event.target.value;
        console.log("URL " + url);
        fetch(url)
          .then((data) => {
            return (data.json());
          })
          .then((citylist) => {
            console.log("CityList");
            console.log(citylist);
            this.setState({cities:citylist})
            console.log(this.state.cities);
          });
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
       
        event.preventDefault();
      }
    
      render() {
        const listItems = this.state.cities.map((cityname) => 
            <li key={cityname.city}>{cityname.city}</li>
        );
        return (
            <div>
            <form onSubmit={this.handleSubmit} onKeyUp={this.handleChange}>
            <label>
              Name:
              <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
            </form>
            <ul>{listItems}</ul>
            </div>
        );
      }
    }
}

export default App;
