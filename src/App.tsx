import CourseGoal from "./components/CourseGoal";
import Header from "./components/Header";
import goalImg from "./assets/goals.jpg";
import { useState } from "react";
import CourseGoalList from "./components/CourseGoalList";
import NewGoal from "./components/NewGoal";
export type CourseGoal = {
  title: string;
  description: string;
  id: number;
};
function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);
  function handleAddGoal(goal: string, summery: string) {
    setGoals((prev) => {
      const newGoal: CourseGoal = {
        id: Math.random(),
        title: goal,
        description: summery,
      };
      return [newGoal, ...prev];
    });
  }
  function handleDeleteGoal(id: number) {
    setGoals((prev) => prev.filter((prev) => prev.id !== id));
  }
  return (
    <main>
      <Header image={{ src: goalImg, alt: "a list of goal" }}>
        <h1>your course goals</h1>
      </Header>
      <NewGoal onAddGoal={handleAddGoal} />
      <CourseGoalList goals={goals} onDelete={handleDeleteGoal} />
    </main>
  );
}

export default App;
