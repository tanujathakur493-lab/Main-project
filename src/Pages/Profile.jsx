
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";


function Profile() {
    const { id } = useParams();

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);

        fetch(`https://dummyjson.com/users/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setUser(data);
                setLoading(false);
            })
            .catch((error) => {
                console.log("Profile Error:", error);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <h2 className="profile-loading">Loading Profile...</h2>;
    }

    if (!user || !user.id) {
        return <h2 className="profile-loading">User Not Found</h2>;
    }

    return (
        <div className="profile-page">

            <div className="profile-top">
                <Link to="/User" className="back-btn">← Back to Users </Link>
              
            </div>

            <div className="profile-banner">
                <div className="profile-avatar">
                    <img src={user.image} alt={user.firstName} />
                </div>

                <div className="profile-banner-content">
                    <span>WELCOME TO LAVENDER</span>
                    <h1>
                        {user.firstName} {user.lastName}
                    </h1>
                    <p>{user.email}</p>

                    <div className="profile-tags">
                        <span>{user.gender}</span>
                        <span>{user.age} Years Old</span>
                    </div>
                </div>
            </div>

            <div className="profile-section">

                <div className="profile-section-heading">
                    <span>01 — PERSONAL DETAILS</span>
                    <h2>Personal Information</h2>
                    <p>Your personal information and contact details.</p>
                </div>

                <div className="profile-grid">

                    <div className="profile-box">
                        <span>Full Name</span>
                        <h3>{user.firstName} {user.lastName}</h3>
                    </div>

                    <div className="profile-box">
                        <span>Email Address</span>
                        <h3>{user.email}</h3>
                    </div>

                    <div className="profile-box">
                        <span>Phone Number</span>
                        <h3>{user.phone}</h3>
                    </div>

                    <div className="profile-box">
                        <span>Date of Birth</span>
                        <h3>{user.birthDate}</h3>
                    </div>

                    <div className="profile-box">
                        <span>Gender</span>
                        <h3>{user.gender}</h3>
                    </div>

                    <div className="profile-box">
                        <span>Age</span>
                        <h3>{user.age} Years</h3>
                    </div>

                </div>

                <div className="profile-section-heading second-heading">
                    <span>02 — ADDRESS DETAILS</span>
                    <h2>Location Information</h2>
                    <p>Address and location details.</p>
                </div>

                <div className="profile-grid">

                    <div className="profile-box">
                        <span>Street Address</span>
                        <h3>{user.address.address}</h3>
                    </div>

                    <div className="profile-box">
                        <span>City</span>
                        <h3>{user.address.city}</h3>
                    </div>

                    <div className="profile-box">
                        <span>State</span>
                        <h3>{user.address.state}</h3>
                    </div>

                    <div className="profile-box">
                        <span>Country</span>
                        <h3>{user.address.country}</h3>
                    </div>

                    <div className="profile-box">
                        <span>Postal Code</span>
                        <h3>{user.address.postalCode}</h3>
                    </div>

                </div>

                <div className="profile-section-heading second-heading">
                    <span>03 — OTHER INFORMATION</span>
                    <h2>Additional Details</h2>
                    <p>More information about this user.</p>
                </div>

                <div className="profile-grid">

                    <div className="profile-box">
                        <span>Company</span>
                        <h3>{user.company.name}</h3>
                    </div>

                    <div className="profile-box">
                        <span>Department</span>
                        <h3>{user.company.department}</h3>
                    </div>

                    <div className="profile-box">
                        <span>Job Title</span>
                        <h3>{user.company.title}</h3>
                    </div>

                    <div className="profile-box">
                        <span>Blood Group</span>
                        <h3>{user.bloodGroup}</h3>
                    </div>

                    <div className="profile-box">
                        <span>Eye Color</span>
                        <h3>{user.eyeColor}</h3>
                    </div>

                    <div className="profile-box">
                        <span>Hair Color</span>
                        <h3>{user.hair.color}</h3>
                    </div>

                </div>

            </div>

            <div className="profile-footer">
                <h2>Thank You for Being With Lavender!</h2>
                <p>Beautiful things begin with a little care.</p>
            </div>

        </div>
    );
}

export default Profile;
