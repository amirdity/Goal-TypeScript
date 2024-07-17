import PropTypes from "prop-types";
import React from "react";
interface Props {
  title: string;
  
  children: React.ReactNode
}
// function CourseGoal(props: Props) {

function CourseGoal({
  title,
  
  children
}:Props
  // {
  // title: string;
  // description: string;
  // }
) {
  return (
    <article>
      <div>
        {/* <h2>{props.title}</h2>
        <p>{props.description}</p> */}
        <h2>{title}</h2>
        
        <p>{children }</p>
      </div>
      <button>Delete</button>
    </article>
  );
}

CourseGoal.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default CourseGoal;
