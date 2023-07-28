import React from "react";
import { Route, Routes } from "react-router-dom";
import Greeting from "./Greeting";
import Login from "./Login";
import { UserProfileList } from "./userProfiles/UserProfileList";

export default function ApplicationViews() {
    return (
        <Routes>
            <Route path="/" element={<Greeting />} />
            <Route path="/userprofiles" element={<UserProfileList />} />
        </Routes>
    );
}