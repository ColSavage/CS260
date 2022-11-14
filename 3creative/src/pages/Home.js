import "./home.css";
import { Outlet, Link } from "react-router-dom";
import Simp from "../images/simp.png";
import Burg from "../images/bobsburger.png"

const Home = () => {
    return (
        <>
            
            <div class="home">
                <h1>Welcome!</h1>
                <h2>Get to know the characters from both The Simpsons and Bob's Burgers! Click an image below to get started!</h2>
                <Link to="/simpsons"><img src={Simp} alt="The Simpsons Logo"/></Link>
                <Link to="/bobs"><img src={Burg} alt="Bob's Burgers"/></Link>
            </div>
        </>
    );
};

export default Home;