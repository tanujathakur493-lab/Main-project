
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleLogin = async (e) => {

        e.preventDefault();
        setLoading(true);

        const credentials = {
            username: username.trim(),
            password: password
        };

        try {

            // Login API
            const response = await fetch(
                "https://fakestoreapi.com/auth/login",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(credentials)
                }
            );

            const data = await response.json();

            if (response.ok && data.token) {

                // Save Token and Username
                localStorage.setItem("token", data.token);
                localStorage.setItem("username", username.trim());

                // Fetch All Users
                const userResponse = await fetch(
                    "https://fakestoreapi.com/users"
                );

                if (!userResponse.ok) {
                    throw new Error("Unable to fetch user details");
                }

                const users = await userResponse.json();

                // Find Logged-in User
                const currentUser = users.find(
                    (user) => user.username === username.trim()
                );

                if (currentUser) {

                    // Get Full Name
                    const fullName =
                        `${currentUser.name.firstname} ${currentUser.name.lastname}`;

                    // Profile Image
                    const profileImage =
                        `https://ui-avatars.com/api/?name=${encodeURIComponent(fullName)}&background=9675a5&color=fff&size=128`;

                    // Save User Details
                    localStorage.setItem("fullName", fullName);
                    localStorage.setItem("profileImage", profileImage);

                } else {

                    // Fallback if user details are not found
                    localStorage.setItem("fullName", username.trim());

                    const profileImage =
                        `https://ui-avatars.com/api/?name=${encodeURIComponent(username)}&background=9675a5&color=fff&size=128`;

                    localStorage.setItem("profileImage", profileImage);
                }

                // Update Header
                window.dispatchEvent(new Event("userLogin"));

                alert("Login Successfully!");

                navigate("/shop");

            } else {

                alert("Invalid username or password!");

            }

        } catch (error) {

            console.log("Login Error:", error);
            alert("Something went wrong! Please try again.");

        } finally {

            setLoading(false);

        }

    };

    return (

        <div className="login-page">

            <div className="login-card">

                <div className="login-left">

                    <div className="brand-logo">✿</div>

                    <h1>Welcome Back!</h1>

                    <p className="welcome-text">
                        Your journey begins here.
                        Sign in to continue.
                    </p>

                    <div className="flower-decoration">✿</div>

                    <p className="bottom-text">
                        Make today beautiful.
                    </p>

                </div>

                <div className="login-right">

                    <h2>Login</h2>

                    <p className="subtitle">
                        Enter your details to sign in
                    </p>

                    <form onSubmit={handleLogin}>

                        <div className="input-group">

                            <label>Username</label>

                            <input
                                type="text"
                                placeholder="Enter your username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />

                        </div>

                        <div className="input-group">

                            <label>Password</label>

                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />

                        </div>

                        <div className="form-options">

                            <label className="show-password">

                                <input
                                    type="checkbox"
                                    checked={showPassword}
                                    onChange={() =>
                                        setShowPassword(!showPassword)
                                    }
                                />

                                Show password

                            </label>

                            <a href="#forgot">
                                Forgot password?
                            </a>

                        </div>

                        <button
                            type="submit"
                            className="login-btn"
                            disabled={loading}
                        >
                            {loading ? "Please wait..." : "Login"}
                        </button>

                    </form>

                    <div className="divider">
                        <span>OR</span>
                    </div>

                    <p className="signup-text">
                        Don't have an account?
                        <a href="#signup"> Sign Up</a>
                    </p>

                </div>

            </div>

        </div>

    );

}

export default Login;
