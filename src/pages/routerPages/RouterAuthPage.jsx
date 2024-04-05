import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "../loginPage/loginPage";
import SignUpPage from "../SignupPage/SignUpPage";

export default function RouterAuthPage() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<SignUpPage />} />
            </Routes>
        </BrowserRouter>
    );
}