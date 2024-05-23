import { ReactNode } from "react";

type CourseGoalProps = {
  title: string;
  description: string;
  children: ReactNode;
};
export default function CourseGoal(props: CourseGoalProps) {
  return (
    <article>
      <div>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        {props.children}
      </div>
      <button>delete</button>
    </article>
  );
}
