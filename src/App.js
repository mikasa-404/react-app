import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Suspense, lazy } from "react";

import { problems } from "./data";
import Home from "./Home";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          {problems.map((problem) => {
            const Component = lazy(() => import(`${problem.location}`));
            return (
              <Route
                key={problem.id}
                path={problem.path}
                element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <Component />
                  </Suspense>
                }
              />
            );
          })}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
