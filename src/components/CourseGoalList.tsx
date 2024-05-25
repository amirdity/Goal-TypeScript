import { useState } from "react";
import { CourseGoal as CGoal}  from "../App";
import CourseGoal from "./CourseGoal"
type CourseGoalListProps = {
  goals:CGoal[]
  
};
function CourseGoalList({goals}:CourseGoalListProps) {
  // const [goals, setGoals] = useState<CourseGoal[]>([]);
  return (
    <>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoal title={goal.title} description={goal.description}>
            <p>{goal.description}</p>
          </CourseGoal>
        </li>
      ))}
    </>
  );
}

export default CourseGoalList;
