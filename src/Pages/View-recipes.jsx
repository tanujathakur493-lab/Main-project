
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


function RecipeDetail() {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        fetch(`https://dummyjson.com/recipes/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setRecipe(data);
            })
            .catch((error) => {
                console.log("Recipe Error:", error);
            });
    }, [id]);


    if (!recipe) {
        return <h2>Loading Recipe...</h2>;
    }
    return (
        <div className="recipe-detail">
            <section className="recipe-hero">
                <div className="recipe-hero-content">
                    <span>LAVENDER RECIPES</span>
                    <h1>{recipe.name}</h1>
                    <p>
                        Discover simple, healthy and delicious
                        recipes made for every moment.
                    </p>
                </div>
                <div className="recipe-hero-image">
                    <img
                        src={recipe.image}
                        alt={recipe.name}
                    />
                </div>
            </section>
            <section className="recipe-main">
                <div className="recipe-heading">
                    <span>{recipe.cuisine}</span>
                    <h2>{recipe.name}</h2>
                    <p>{recipe.difficulty} Recipe</p>
                </div>
                <div className="recipe-info">
                    <div>
                        ⏱ {recipe.prepTimeMinutes } Minutes
                    </div>
                    <div>
                        👩‍🍳 {recipe.difficulty}
                    </div>
                    <div>
                        🍽 {recipe.servings} Servings
                    </div>
                    <div>
                        ⭐ {recipe.rating} Rating
                    </div>
                </div>
                <div className="recipe-content">
                    <div className="recipe-photo">
                        <img
                            src={recipe.image}
                            alt={recipe.name}
                        />
                    </div>
                    <div className="ingredients">
                        <h2>Ingredients</h2>
                        <ul>
                            {recipe.ingredients.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="instructions">
                    <h2>How To Make It</h2>
                    {recipe.instructions.map((step, index) => (
                        <div className="step" key={index}>
                            <span>
                                {String(index + 1).padStart(2, "0")}
                            </span>
                            <div>
                                <h3>Step {index + 1}</h3>
                                <p>{step}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="recipe-banner">
                    <h2>Good Food, Good Mood!</h2>
                    <p>
                        Made with love, served with happiness.
                    </p>
                </div>
            </section>
        </div>
    );
}

export default RecipeDetail;
