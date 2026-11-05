
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function User() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    
    const [currentPage, setCurrentPage] = useState(1);
    const usersPerPage = 10;

    useEffect(() => {
        fetch("https://dummyjson.com/users")
            .then((res) => res.json())
            .then((data) => {
                setUsers(data.users);
                setLoading(false);
            })
            .catch((error) => {
                console.log("Error:", error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <h2>Loading Users...</h2>;
    }

    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;

    const currentUsers = users.slice(
        indexOfFirstUser,
        indexOfLastUser
    );

    const totalPages = Math.ceil(users.length / usersPerPage);

    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className="user-page">

            <div className="user-header">
                <h2>My Account</h2>
                <p>Welcome to Lavender!</p>
            </div>

            <div className="user-container">

                {currentUsers.map((user) => (
                    <Link
                        to={`/User/${user.id}`}
                        className="user-profile"
                        key={user.id}
                    >
                        <aside className="user-sidebar">

                            <div className="profile-info">

                                <img
                                    src={user.image}
                                    alt={user.firstName}
                                />

                                <h3>
                                    {user.firstName} {user.lastName}
                                </h3>

                                <p>{user.email}</p>

                            </div>

                        </aside>
                    </Link>
                ))}

            </div>

            <div className="pagination">

                <button
                    onClick={prevPage}
                    disabled={currentPage === 1}
                >
                    Previous
                </button>

                {Array.from(
                    { length: totalPages },
                    (_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentPage(index + 1)}
                            className={
                                currentPage === index + 1 ? "active" : ""
                            }
                        >
                            {index + 1}
                        </button>
                    )
                )}

                <button
                    onClick={nextPage}
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>

            </div>

        </div>
    );
}

export default User;
