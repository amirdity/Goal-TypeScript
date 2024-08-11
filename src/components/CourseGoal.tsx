import { PropsWithChildren } from "react";

// interface CourseGoalType {
//   title: string;
//   children: ReactNode;
// }
export default function CourseGoal({
  title,
  children,
  onDelete,id
}: PropsWithChildren<{ title: string, onDelete: (id: number) => void,id:number }>) {
  
  return (
    <article>
      <div>
        <h2>{title}</h2>
        <p>{children}</p>
      </div>
      <button onClick={()=>onDelete(id)}>حذف کردن</button>
    </article>
  );
}
