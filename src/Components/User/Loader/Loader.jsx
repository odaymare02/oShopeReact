import React from "react";
import style from "./Loader.module.css";
export default function Loader() {
  return (
    <div className={`${style.min}`}>
      <div className="spinner-grow text-dark " role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}
