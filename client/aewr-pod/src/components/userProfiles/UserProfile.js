import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Card, CardBody, Button } from "reactstrap";
import { getAllUserProfiles } from "../../Managers/UserProfileManager";

export const UserProfile = ({ userProfileProp, isAdmin }) => {
    const [userProfiles, setUserProfiles] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        getAllUserProfiles()
            .then(userProfiles => setUserProfiles(userProfiles));
    }, []);

    return (
        <Card className="m-4 text-center">
            <CardBody>
                <div>
                    <strong className="userProfile-title">
                        <Link to={`/userprofiles/${userProfileProp.id}`}><h5>{userProfileProp.fullName}</h5></Link>
                    </strong>
                    <div className="userProfile-user">
                        <strong>Display Name:</strong> {userProfileProp.displayName}
                    </div>
                    <div>
                        <strong>User Type:</strong> {userProfileProp.userType.name}
                    </div>
                </div>
            </CardBody>
        </Card>
    )
}