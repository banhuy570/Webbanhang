import React,{useEffect} from "react";
import PropTypes from "prop-types";

function Helmet(props) {
  document.title = "Yody - " + props.title;
  useEffect(() => {
window.scrollTo(0, 0);
    return () => {
      
    };
  }, []);
  return <div>{props.children}</div>;
}
 
Helmet.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Helmet;
