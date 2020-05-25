import Application from "daily-harvest-dom-product-portal";
import React, { Component } from "react";
import ReactDOM, { render } from "react-dom";

const root = document.getElementById("root");
root ? render(<Application />, root) : false;
