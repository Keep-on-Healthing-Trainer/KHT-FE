import React from "react";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import BeforePage from "./pages/Before";
import LoginPage from "./pages/Login";
import SignupPage from "./pages/Signup";
import MainPage from "./pages/Main";
import SearchPage from "./pages/Search";
import ResultPage from "./pages/Result";

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
          <Route path="/result" element={<ResultPage />}/>
          <Route path="/search" element={<SearchPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
