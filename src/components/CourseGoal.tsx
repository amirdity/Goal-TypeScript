import {PropsWithChildren} from "react";

type CourseGoalProps = PropsWithChildren<{title: string, description:string}>
export default function CourseGoal({title, children, description}:CourseGoalProps) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
        {children}
      </div>
      <button>delete</button>
    </article>
  );
}
