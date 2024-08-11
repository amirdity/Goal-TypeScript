import CourseGoal from "./CourseGoal";
import { type CourseGoal as CGoals } from "../App";
interface Goals {
  goals: CGoals[];
  onDelete:(id:number)=>void;
}

export default function CourseGoalList({ goals, onDelete }: Goals) {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoal title={goal.title} onDelete={onDelete} id={goal.id}>
            <p>{goal.description}</p>
          </CourseGoal>
        </li>
      ))}
    </ul>
  );
}
