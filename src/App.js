import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Recipes from "./components/Recipes";
import Form from "./components/Form.jsx";
import axios from "axios";
export default class App extends Component {
    state = {
        recipes: [],
    };
    getRecipe = async (e) => {
        const recipeName = e.target.elements.recipeName.value;
        e.preventDefault();
        console.log(recipeName);
        axios
            .get(
                "https://cors-anywhere.herokuapp.com/https://recipesapi.herokuapp.com/api/search?q=" +
                    recipeName +
                    "&count=5"
            )
            .then((res) => {
                this.setState({
                    recipes: [...res.data.recipes],
                });
            });
    };
    componentDidMount() {
        window.title='Recipie Finder'
        const json = localStorage.getItem("recipes");
        const recipes = JSON.parse(json);
        if (recipes)
            this.setState({
                recipes,
            });
    }

    componentDidUpdate() {
        if (this.state.recipes) {
            const recipes = JSON.stringify(this.state.recipes);
            localStorage.setItem("recipes", recipes);
        }
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
                    {this.state.recipes && <Recipes recipes={recipes} />}
                </div>
            </div>
        );
    }
}
