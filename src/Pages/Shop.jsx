
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Shop() {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("all");
    const [sortBy, setSortBy] = useState("reviews");


    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 10;

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
            })
            .catch((error) => {
                console.error("Error fetching products:", error);
            });
    }, []);


    const filteredProducts = products.filter((product) => {
        const sameSearch = product.title
            .toLowerCase()
            .includes(search.toLowerCase());

        const sameCategory =
            category === "all" ||
            (category === "clothing" &&
                (product.category === "men's clothing" ||
                    product.category === "women's clothing")) ||
            product.category === category;

        return sameSearch && sameCategory;
    });


    const sortedProducts = [...filteredProducts].sort((a, b) => {
        if (sortBy === "reviews") {
            return (a.rating?.count ?? 0) - (b.rating?.count ?? 0);
        }

        if (sortBy === "low") {
            return a.price - b.price;
        }

        if (sortBy === "high") {
            return b.price - a.price;
        }

        return a.id - b.id;
    });

    const totalPages = Math.ceil(
        sortedProducts.length / productsPerPage
    );


    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

    const currentProducts = sortedProducts.slice(
        indexOfFirstProduct,
        indexOfLastProduct
    );

   
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };


    useEffect(() => {
        setCurrentPage(1);
    }, [search, category, sortBy]);

    return (
        <main className="shop-page">

            <section className="shop-heading">
                <span className="shop-eyebrow">THE LAVENDER EDIT</span>

                <h1>Shop Our Collection</h1>

                <p>
                    Find your perfect style with our latest collection.
                </p>

                <div className="shop-search">
                    <i className="fa-solid fa-magnifying-glass"></i>

                    <input
                        type="text"
                        placeholder="Search your favourite products..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
            </section>

            <section className="shop-products-section">

                <div className="shop-toolbar">

                    <div className="shop-categories">

                        <button onClick={() => setCategory("all")}>
                            All Products
                        </button>

                        <button onClick={() => setCategory("clothing")}>
                            Clothing
                        </button>

                        <button onClick={() => setCategory("jewelery")}>
                            Accessories
                        </button>

                        <button onClick={() => setCategory("electronics")}>
                            Electronics
                        </button>

                    </div>

                    <select
                        aria-label="Sort products"
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                    >
                        <option value="reviews">
                            Fewest Reviews First
                        </option>

                        <option value="low">
                            Price: Low to High
                        </option>

                        <option value="high">
                            Price: High to Low
                        </option>

                        <option value="featured">
                            Featured
                        </option>
                    </select>

                </div>

                <div className="shop-results-heading">
                    <h2>Our Best Picks</h2>
                    <p>Explore styles you'll love</p>
                </div>

                <div className="shop-product-grid">

                    {currentProducts.length > 0 ? (

                        currentProducts.map((product) => (

                            <article
                                className="shop-product-card"
                                key={product.id}
                            >

                                <div className="shop-product-image">
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                    />
                                </div>

                                <div className="shop-product-info">

                                    <span className="shop-product-category">
                                        {product.category}
                                    </span>

                                    <h3>{product.title}</h3>

                                    <div className="shop-product-rating">

                                        <span className="rating-star">
                                            ★
                                        </span>

                                        <span>
                                            {product.rating?.rate ?? "N/A"}
                                        </span>

                                        <span className="rating-count">
                                            ({product.rating?.count ?? 0} reviews)
                                        </span>

                                        {product.rating?.rate < 4 && (
                                            <span className="low-rating">
                                                Low Rated
                                            </span>
                                        )}

                                    </div>

                                    <div className="shop-product-price">
                                        <strong>${product.price}</strong>
                                    </div>

                                    <Link
                                        to={`/Productdetail/${product.id}`}
                                        className="shop-add-button"
                                    >
                                        <i className="fa-solid fa-bag-shopping"></i>
                                        View Product Detail
                                    </Link>

                                </div>

                            </article>

                        ))

                    ) : (

                        <p>No products found. Try another search.</p>

                    )}

                </div>

                {/* Pagination */}

                {totalPages > 1 && (

                    <div className="shop-pagination">

                        <button
                            className="page-btn"
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
                                className={`page-number ${
                                    currentPage === page ? "active" : ""
                                }`}
                                onClick={() => handlePageChange(page)}
                            >
                                {page}
                            </button>

                        ))}

                        <button
                            className="page-btn"
                            disabled={currentPage === totalPages}
                            onClick={() => handlePageChange(currentPage + 1)}
                        >
                            Next
                            <i className="fa-solid fa-chevron-right"></i>
                        </button>

                    </div>

                )}

                <div className="shop-view-more">
                    <button onClick={() => {
                        setSearch("");
                        setCategory("all");
                        setSortBy("reviews");
                        setCurrentPage(1);
                    }}>
                        Explore All Products
                        <i className="fa-solid fa-arrow-right"></i>
                    </button>
                </div>

            </section>

        </main>
    );
}

export default Shop;
