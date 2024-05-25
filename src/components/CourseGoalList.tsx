import { CourseGoal as CGoal } from "../App";
import CourseGoal from "./CourseGoal";
type CourseGoalListProps = {
  goals: CGoal[];
  onDeleteGoal:(id: number) => void;
};
function CourseGoalList({ goals,onDeleteGoal }: CourseGoalListProps) {
  return (
    <>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoal id={goal.id} title={goal.title} description={goal.description} onDelete={onDeleteGoal}>
            <p>{goal.description}</p>
          </CourseGoal>
        </li>
      ))}
    </>
  );
}

export default CourseGoalList;
