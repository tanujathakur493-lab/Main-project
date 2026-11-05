
import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Header() {

    const [cartCount, setCartCount] = useState(0);

    const [userImage, setUserImage] = useState(
        localStorage.getItem("profileImage")
    );

    const [username, setUsername] = useState(
        localStorage.getItem("username")
    );

    // Full Name State
    const [fullName, setFullName] = useState(
        localStorage.getItem("fullName")
    );

    const [showDropdown, setShowDropdown] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const [search, setSearch] = useState("");

    const navigate = useNavigate();

    // Cart Count
    useEffect(() => {

        const updateCartCount = () => {

            const cart = JSON.parse(
                localStorage.getItem("addtocart") || "[]"
            );

            const totalItems = cart.reduce(
                (total, item) =>
                    total + (Number(item.quantity) || 1),
                0
            );

            setCartCount(totalItems);

        };

        updateCartCount();

        window.addEventListener("cartUpdated", updateCartCount);
        window.addEventListener("storage", updateCartCount);

        return () => {
            window.removeEventListener("cartUpdated", updateCartCount);
            window.removeEventListener("storage", updateCartCount);
        };

    }, []);

    // Update User Details
    useEffect(() => {

        const updateUser = () => {

            setUserImage(localStorage.getItem("profileImage"));
            setUsername(localStorage.getItem("username"));
            setFullName(localStorage.getItem("fullName"));

            setShowDropdown(false);

        };

        updateUser();

        window.addEventListener("userLogin", updateUser);
        window.addEventListener("storage", updateUser);

        return () => {

            window.removeEventListener("userLogin", updateUser);
            window.removeEventListener("storage", updateUser);

        };

    }, []);

    // Logout
    const handleLogout = () => {

        localStorage.removeItem("token");
        localStorage.removeItem("username");
        localStorage.removeItem("fullName");
        localStorage.removeItem("profileImage");

        setUserImage(null);
        setUsername(null);
        setFullName(null);

        setShowDropdown(false);

        window.dispatchEvent(new Event("userLogin"));

        alert("Logout Successfully!");

        navigate("/Login");

    };

    // Search
    const handleSearch = (e) => {

        e.preventDefault();

        if (search.trim() !== "") {

            navigate(
                `/shop?search=${encodeURIComponent(search.trim())}`
            );

            setShowSearch(false);
            setSearch("");

        }

    };

    return (

        <header className="header">

            <div className="header-container">

                {/* Logo */}

                <div className="logo">

                    <span className="logo-icon">L</span>

                    <h2>LAVENDER</h2>

                </div>

                {/* Navigation */}

                <nav className="nav-links">

                    <NavLink to="/" end>
                        Home
                    </NavLink>

                    <NavLink to="/shop">
                        Shop
                    </NavLink>

                    <NavLink to="/categories">
                        Categories
                    </NavLink>

                    <NavLink to="/Recipes">
                        Recipes
                    </NavLink>

                    <NavLink to="/about">
                        About
                    </NavLink>

                    <NavLink to="/contact">
                        Contact
                    </NavLink>

                    <NavLink to="/User">
                        Users
                    </NavLink>
                       

                    {!localStorage.getItem("token") && (

                        <NavLink to="/Login">
                            Login
                        </NavLink>

                    )}

                </nav>

                {/* Header Actions */}

                <div className="header-actions">

                    {/* Search */}

                    <button
                        className="header-btn"
                        aria-label="Search"
                        onClick={() => setShowSearch(!showSearch)}
                    >

                        <i className="fa-solid fa-magnifying-glass"></i>

                    </button>

                    {/* Account */}

                    <div className="header-account">

                        <button
                            className="header-btn account-btn"
                            aria-label="Account"

                            onClick={() => {

                                if (userImage) {

                                    setShowDropdown(!showDropdown);

                                } else {

                                    navigate("/Login");

                                }

                            }}
                        >

                            {userImage ? (

                                <img
                                    src={userImage}
                                    alt="Profile"
                                    className="header-profile-img"
                                />

                            ) : (

                                <i className="fa-regular fa-user"></i>

                            )}

                        </button>

                        {/* Full Name */}

                      

                        {/* Profile Dropdown */}

                        {showDropdown && (

                            <div className="profile-dropdown">

                                <div className="profile-info">


                                    <div>
                                        <h4>{fullName || username}</h4>
                                        <small>Welcome Back!</small>
                                    </div>

                                </div>

                                <button
                                    className="logout-btn"
                                    onClick={handleLogout}
                                >

                                    <i className="fa-solid fa-right-from-bracket"></i>

                                    Logout

                                </button>

                            </div>

                        )}

                    </div>

                    {/* Cart */}

                    <NavLink
                        to="/Cart"
                        className="cart-btn"
                        aria-label="Shopping cart"
                    >

                        <i className="fa-solid fa-bag-shopping"></i>

                        <span className="cart-count">
                            {cartCount}
                        </span>

                    </NavLink>

                </div>

            </div>

            {/* Search Bar */}

            {showSearch && (

                <form
                    className="header-search-box"
                    onSubmit={handleSearch}
                >

                    <input
                        type="text"
                        placeholder="Search products..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        autoFocus
                    />

                    <button type="submit">
                        Search
                    </button>

                </form>

            )}

        </header>

    );

}

export default Header;
