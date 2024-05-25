import CourseGoal from "./components/CourseGoal";
import Header from "./components/Header";
import goalsImg from "./assets/goals.jpg";
import { useState } from "react";
import CourseGoalList from "./components/CourseGoalList";
export type CourseGoal = {
  title: string;
  description: string;
  id: number;
};
export default function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);
  function handleAddGoal() {
    setGoals(prevGoals =>{
      const newGoals:CourseGoal={
        title:"learn react + ts",
        description:"learn it in depth",
        id: Math.random()
      }
      return [...prevGoals, newGoals];
    });
  }
  return (
    <main>
      <Header image={{ src: goalsImg, alt: "a list of goals" }}>
        <h1>your course goals</h1>
      </Header>
      <button onClick={handleAddGoal}>add goal</button>
     <CourseGoalList goals={goals}/>
      <CourseGoal title="hello" description="salam">
        <p>hello</p>
      </CourseGoal>
    </main>
  );
}
