import React from "react";
import PropTypes from "prop-types";

const Badge = ({ color, content, type, size }) => {
    const classes = `badge bg-${color}` +
        (type === "squared" ? " squared" : "");
    const badge = (<span className={classes}>
        {content}
    </span>);
    switch (size) {
    case 1: return (<h1> { badge }</h1>);
    case 2: return (<h2> { badge }</h2>);
    case 3: return (<h3> { badge }</h3>);
    case 4: return (<h4> { badge }</h4>);
    case 5: return (<h5> { badge }</h5>);
    case 6: return (<h6> { badge }</h6>);
    default: return (<div>{ badge }</div>);
    }
};
Badge.defaultProps = {
    type: "circled"
};
Badge.propTypes = {
    color: PropTypes.string,
    content: PropTypes.string,
    type: PropTypes.string,
    size: PropTypes.number
};

export default Badge;
