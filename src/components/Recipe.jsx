import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import queryString from "query-string";

export default class Recipe extends Component {
    state = {
        activeRecipe: [],
    };
    componentDidMount = async () => {
        const { location } = this.props;
        const { recipe_id } = queryString.parse(location.search);
        console.log(recipe_id);
        // const recipieId = this.props.location.state.item;
        await axios
            .get(
                "https://cors-anywhere.herokuapp.com/https://recipesapi.herokuapp.com/api/get?rId=" +
                    recipe_id
            )
            .then((res) => {
                console.log(res.data);
                this.setState({
                    activeRecipe: res.data.recipe,
                });
            });
    };

    render() {
        const recipe = this.state.activeRecipe;
        return (
            <div className="container">
                {this.state.activeRecipe.length !== 0 && (
                    <div className="active-recipe">
                        <img
                            src={recipe.image_url}
                            alt={recipe.title}
                            className="active-recipe__img"
                        />
                        <h3 className="active-recipe__title">{recipe.title}</h3>
                        <h4 className="active-recipe__publisher">
                            Publisher: <span>{recipe.publisher}</span>
                        </h4>
                        <p className="lead active-website">
                            Website :{" "}
                            <span>
                                <a href={recipe.publisher_url}>
                                    {recipe.publisher_url}
                                </a>
                            </span>
                        </p>
                        <button className="active-recipe__button">
                            <Link to="/"> Go Home</Link>
                        </button>
                    </div>
                )}
            </div>
        );
    }
}
