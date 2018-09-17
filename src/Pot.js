import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Pot.css";

const Pot = ({ pot }) => (
  <div className="pot">
    <h1 className="pot-gameName">{pot.gameName}</h1>
    <p className="pot-title">{pot.title}</p>
    <p className="pot-date">Total pott: {pot.potAmount} Kr</p>
  </div>
);

Pot.propTypes = {
  pot: PropTypes.object.isRequired
};

export default Pot;
