import React from "react";
import PropTypes from "prop-types";

// Example of a Dumb component
const Dumb = ({title}) => (
    <div className="dumb-component">
        <h1>{title}</h1>
    </div>
);

// Defining the the props types and requirements
Dumb.propTypes = {
    "title": PropTypes.string.isRequired
};

export default Dumb;