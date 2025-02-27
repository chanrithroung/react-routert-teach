import { Outlet, NavLink } from "react-router-dom";
import "./them.css";
import { useEffect, useState } from "react";
const Home = () => {

    const [count, setCount] = useState(0);

    

  return (
    <>
      {/* Hero Section */}
      <header className="bg-light py-5 text-center">
        <div className="container">
          <h1 className="display-4">Welcome to My Website</h1>
          <p className="lead">A simple React Bootstrap home component.</p>
          <a href="#about" className="btn btn-primary btn-lg">Learn More</a>
        </div>
      </header>
      <div className="container">
        <div className="fs-2"> {count} </div>
        <div className="d-flex gap-3">
            <button onClick={ ()=> setCount(count+1) } className="btn btn-primary">+</button>
            <button onClick={ ()=> setCount(count+1) } className="btn btn-danger">-</button>
        </div>
      </div>
        <div className="container d-flex justify-content-between p-4">
            <ul className="">
                <li><NavLink className="sub-content" to="/" >HTML</NavLink></li>
                <li><NavLink className="sub-content" to="/css">CSS</NavLink></li>
                <li><NavLink className="sub-content" to="js">Java Script</NavLink></li>
            </ul>
            <Outlet />

        </div>
    </>
  );
};

export default Home;
