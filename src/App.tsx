import "./App.css";
// import CourseGoal from "./components/CourseGoal";
import Header from "./components/Header";

function App() {
  const goalImg = ""
  return (
    <main>
      <Header image={{ src: goalImg, alt: "a list of goal" }}>
        <h1>yout course goals</h1>
      </Header>
      {/* <CourseGoal title="learn React" >
        hellloooo worrrlllllddddd
      </CourseGoal> */}
    </main>
  );
}

export default App;
