import React from "react";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import BeforePage from "./pages/before";
import LoginPage from "./pages/login";
import SignupPage from "./pages/signup";
import MainPage from "./pages/main";
import SearchPage from "./pages/search";

import BeforeLayout from "./navigation/BeforeLayout";
import MainLayout from "./navigation/MainLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<BeforeLayout />}>
          <Route path="/" element={<BeforePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage/>} />
        </Route>
        <Route element={<MainLayout />}>
          <Route path="/main" element={<MainPage />} />
          <Route path="/search" element={<SearchPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
