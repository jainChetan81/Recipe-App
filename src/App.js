import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Recipes from "./components/Recipes";
import Form from "./components/Form.jsx";
const ApiKey = "4b54b9f509eedba0aa7a04bd0c0fd507";
const CorsDisable = "http://cors-anywhere.herokuapp.com";
export default class App extends Component {
    state = {
        recipes: []
    };
    getRecipe = async e => {
        const recipeName = e.target.elements.recipeName.value;
        e.preventDefault();
        console.log(recipeName);
        const ApiCall = await fetch(
            `${CorsDisable}/https://www.food2fork.com/api/search?key=${ApiKey}&q=${recipeName}&count=5`
        );
        const data = await ApiCall.json();
        this.setState({
            recipes: [...data.recipes]
        });
        console.log(data);
    };
    componentDidMount() {
        const json = localStorage.getItem("recipes");
        const recipes = JSON.parse(json);
        this.setState({
            recipes
        });
    }

    componentDidUpdate() {
        const recipes = JSON.stringify(this.state.recipes);
        localStorage.setItem("recipes", recipes);
    }

    render() {
        const { recipes } = this.state;
        return (
            <div>
                <div className="App">
                    <header className="App-header">
                        <h1 className="App-title">Recipe Search</h1>
                    </header>
                    <Form getRecipe={this.getRecipe} />
                    <Recipes recipes={recipes} />
                </div>
            </div>
        );
    }
}
