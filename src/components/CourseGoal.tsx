import { PropsWithChildren } from "react";
type CourseGoalProps = PropsWithChildren<{
  title: string;
  description: string;
  onDelete:(id:number) => void;
  id:number
}>;
export default function CourseGoal({ title, description, onDelete,id }: CourseGoalProps) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <button onClick={()=>onDelete(id)}>delete</button>
    </article>
  );
}
