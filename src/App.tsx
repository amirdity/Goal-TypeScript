import CourseGoal from "./components/CourseGoal";
import Header from "./components/Header";
import goalsImg from "./assets/goals.jpg"
export default function App() {
  return (
    <main>
      <Header image={{src:goalsImg, alt:"a list of goals"}}>
        <h1>your course goals</h1>
      </Header>
      <CourseGoal title="hello" description="salam">
        <p>hello</p>
      </CourseGoal>
    </main>
  );
}
