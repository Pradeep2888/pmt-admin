import React from "react";
import { Link } from "react-router-dom";
import * as staticPath from "../core/constants/path-constants";

export default function PageNotFound() {
  return (
    <div className="invlidfallback">
      <div className="section">
        <h1 className="error">404</h1>
        <div className="page">
          Ooops!!! The page you are looking for is not found
        </div>
        <Link className="back-home" to={staticPath.HOME}>
          Back to home
        </Link>
      </div>
    </div>
  );
}
