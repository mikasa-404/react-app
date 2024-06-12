import React from "react";
import { problems } from "./data";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div id="header">
        <h1>React practice</h1>
      </div>{" "}
      <div className="container">
        {problems.map((item) => (
          <Link to={item.path} key={item.id}>
            <button>
              {item.id + 1}. {item.title}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
