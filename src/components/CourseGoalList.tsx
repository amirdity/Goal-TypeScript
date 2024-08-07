import { type CourseGoal as CGoal } from "../App";
import CourseGoal from "./CourseGoal";
import InfoBox from "./InfoBox";

type CourseGoalListProps = {
  goals: CGoal[];
  onDelete: (id: number) => void;
};
export default function CourseGoalList({
  goals,
  onDelete,
}: CourseGoalListProps) {
  if (goals.length === 0) {
    // if you use return ... other components will be removed
    return (
      <InfoBox mode="hint">
        You have no course goals yet. start adding some!
      </InfoBox>
    );
  }
  let warningBox: React.ReactNode;
  if (goals.length >= 4) {
    warningBox = (
      <InfoBox mode="warning" serverity="medium">
        You're collecting a lot of goals . Dont put too much on your plate!
      </InfoBox>
    );
  }
  return (
    <>
      {warningBox}
      <ul>
        {" "}
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal title={goal.title} onDelete={onDelete} id={goal.id}>
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>
    </>
  );
}
