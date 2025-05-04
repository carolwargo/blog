import * as React from "react";
import  Drawer  from "../components/Nav/Drawer";

export default function Homepage() {
  return (
    <div>


<div className="container-fluid d-flex flex-column justify-content-center align-items-center vh-100">
  <h1 className="text-center">Welcome to the Homepage</h1>
  <p className="text-center">This is the main page of our application.</p>
  <button className='btn btn-primary'>Admin Home</button>
  <button className='btn btn-secondary'>User Home</button>
</div>
    </div>
  );
}
