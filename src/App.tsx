import CourseGoal from "./components/CourseGoal";
import Header from "./components/Header";
import goalsImg from "./assets/goals.jpg";
import { useState } from "react";
import CourseGoalList from "./components/CourseGoalList";
import NewGoal from "./components/NewGoal";
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
  function handleDeleteGoal(id: number){
    setGoals(prevGoals => prevGoals.filter((goal)=> goal.id !== id))
  }
  return (
    <main>
      <Header image={{ src: goalsImg, alt: "a list of goals" }}>
        <h1>your course goals</h1>
      </Header>
      <NewGoal onAddGoal={handleAddGoal}/>
     <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal}/>
      
    </main>
  );
}
