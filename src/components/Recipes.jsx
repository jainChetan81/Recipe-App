import React from "react";
import { Link } from "react-router-dom";

const Recipes = (props) => (
    <div className="container">
        <div className="row">
            {props.recipes.map((item) => (
                <div
                    key={item._id}
                    className="col-md-4"
                    style={{ marginBottom: "2rem" }}>
                    <div className="recipes__box">
                        <img
                            className="recipes__box-img"
                            src={item.image_url}
                            alt={item.title}
                        />
                        <div className="recipe__text">
                            <h5 className="recipes__title">
                                {item.title.length < 20
                                    ? `${item.title}`
                                    : `${item.title.substring(0, 25)}...`}
                            </h5>
                            <p className="recipes__subtitle">
                                Publisher : <span>{item.publisher}</span>
                            </p>
                        </div>
                        <button className="recipe_buttons">
                            <Link
                                to={{
                                    pathname: `/recipe?recipe_id=${item.recipe_id}`,
                                    // state: { item: item.recipe_id },
                                }}>
                                View Recipe
                            </Link>
                        </button>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

export default Recipes;
