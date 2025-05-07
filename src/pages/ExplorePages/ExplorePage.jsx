import * as React from "react";
import ClassesPage from "../ClassesPage/ClassesPage";

export default function Explorepage() {
  return (
    <div>


<div className="container-fluid d-flex flex-column justify-content-center align-items-center vh-100">
  <h1 className="text-center">Welcome to Explore!</h1>
  <p className="text-center">This is the main page of our application.</p>
  <div>
<ClassesPage />
  </div>
</div>
    </div>
  );
}
