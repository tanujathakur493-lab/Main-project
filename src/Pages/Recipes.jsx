
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Recipes() {

    const [recipes, setrecipe] = useState([]);
    const [filter, filterecipe] = useState("All");
    const [search, setSearch] = useState("");

    const [currentPage, setCurrentPage] = useState(1);
    const recipesPerPage = 10;

    useEffect(() => {
        fetch("https://dummyjson.com/recipes")
            .then((res) => res.json())
            .then((data) => {
                setrecipe(data.recipes);
            })
            .catch((error) => {
                console.log("Error fetching recipes:", error);
            });
    }, []);

    const filteredRecipes = recipes.filter((recipe) => {

        const categoryMatch =
            filter === "All" ||
            recipe.mealType?.some(
                (meal) => meal.toLowerCase() === filter.toLowerCase()
            );

        const searchMatch =
            recipe.name.toLowerCase().includes(search.toLowerCase());

        return categoryMatch && searchMatch;
    });

    // Total Pages
    const totalPages = Math.ceil(
        filteredRecipes.length / recipesPerPage
    );


    const indexOfLastRecipe = currentPage * recipesPerPage;
    const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;

    const currentRecipes = filteredRecipes.slice(
        indexOfFirstRecipe,
        indexOfLastRecipe
    );

  
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

   
    useEffect(() => {
        setCurrentPage(1);
    }, [filter, search]);

    return (
        <div className="recipes-page">

            <section className="recipes-hero">

                <span className="recipes-tag">
                    A LITTLE TASTE OF HAPPINESS ♡
                </span>

                <h1>
                    Discover your next <span>favorite recipe.</span>
                </h1>

                <p>
                    Simple ingredients, beautiful flavors and recipes
                    made with love.
                </p>

                <div className="recipes-search">

                    <span>⌕</span>

                    <input
                        type="text"
                        placeholder="Search your favorite recipes..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />

                    <button onClick={() => setCurrentPage(1)}>
                        Search
                    </button>

                </div>

            </section>

            <section className="recipes-content">

                <div className="recipes-heading">

                    <div>
                        <span className="recipes-small-title">
                            MADE WITH LOVE
                        </span>

                        <h2>Explore Recipes</h2>

                        <p>Find something delicious to make today.</p>
                    </div>

                    <button
                        className="view-all-btn"
                        onClick={() => {
                            filterecipe("All");
                            setSearch("");
                            setCurrentPage(1);
                        }}
                    >
                        View All ↗
                    </button>

                </div>

                {/* Category Filter */}

                <div className="recipe-categories">

                    {["All", "Breakfast", "Lunch", "Dinner", "Snack", "Dessert"].map(
                        (category) => (

                            <button
                                key={category}
                                className={filter === category ? "active" : ""}
                                onClick={() => filterecipe(category)}
                            >
                                {category}
                            </button>

                        )
                    )}

                </div>

                {/* Recipe Cards */}

                <div className="recipes-grid">

                    {currentRecipes.length > 0 ? (

                        currentRecipes.map((recipe) => (

                            <div className="recipe-card" key={recipe.id}>

                                <div className="recipe-image">

                                    <img
                                        src={recipe.image}
                                        alt={recipe.name}
                                        className="recipes-img"
                                    />

                                    <button className="favorite-btn">
                                        ♡
                                    </button>

                                    <span className="recipe-category">
                                        {recipe.cuisine}
                                    </span>

                                </div>

                                <div className="recipe-info">

                                    <div className="recipe-meta">

                                        <span>
                                            ◷ {recipe.cookTimeMinutes} min
                                        </span>

                                        <span>
                                            ✧ {recipe.difficulty}
                                        </span>

                                    </div>

                                    <h3>{recipe.name}</h3>

                                    <p>
                                        ⭐ {recipe.rating} Rating
                                    </p>

                                    <Link
                                        to={`/View-recipes/${recipe.id}`}
                                        className="shop-add-button"
                                    >
                                        <i className="fa-solid fa-book-open"></i>
                                        View Recipe
                                    </Link>

                                </div>

                            </div>

                        ))

                    ) : (

                        <p className="no-recipes">
                            No recipes found! Try another search.
                        </p>

                    )}

                </div>

                {/* Pagination */}

                {totalPages > 1 && (

                    <div className="recipe-pagination">

                        <button
                            className="recipe-page-btn"
                            disabled={currentPage === 1}
                            onClick={() => handlePageChange(currentPage - 1)}
                        >
                            <i className="fa-solid fa-chevron-left"></i>
                            Previous
                        </button>

                        {Array.from(
                            { length: totalPages },
                            (_, index) => index + 1
                        ).map((page) => (

                            <button
                                key={page}
                                className={`recipe-page-number ${
                                    currentPage === page ? "active" : ""
                                }`}
                                onClick={() => handlePageChange(page)}
                            >
                                {page}
                            </button>

                        ))}

                        <button
                            className="recipe-page-btn"
                            disabled={currentPage === totalPages}
                            onClick={() => handlePageChange(currentPage + 1)}
                        >
                            Next
                            <i className="fa-solid fa-chevron-right"></i>
                        </button>

                    </div>

                )}

            </section>

            <section className="recipe-newsletter">

                <span>♡ A LITTLE INSPIRATION</span>

                <h2>Good food brings people together.</h2>

                <p>
                    Save your favorite recipes and make every meal special.
                </p>

                <button
                    onClick={() => {
                        filterecipe("All");
                        setSearch("");
                        setCurrentPage(1);
                    }}
                >
                    Explore More Recipes →
                </button>

            </section>

        </div>
    );
}

export default Recipes;
