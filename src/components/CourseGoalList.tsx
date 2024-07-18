import { type CourseGoal as CGoal } from "../App";
import CourseGoal from "./CourseGoal";

type CourseGoalListProps = {
  goals: CGoal[];
  onDelete: (id: number) => void;
};
export default function CourseGoalList({
  goals,
  onDelete,
}: CourseGoalListProps) {
  return (
    <div>
      {" "}
      {goals.map((goal) => (
        <ul key={goal.id}>
          <li>
            <CourseGoal title={goal.title} onDelete={onDelete} id={goal.id}>
              {goal.description}{" "}
            </CourseGoal>
          </li>
        </ul>
      ))}
    </div>
  );
}
