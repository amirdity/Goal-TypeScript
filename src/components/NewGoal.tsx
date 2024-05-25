import { useRef, type FormEvent } from "react";
type NewGoalProps = {
  onAddGoal: (goal: string, summary: string) => void;
};
function NewGoal({onAddGoal}: NewGoalProps) {
  const goal = useRef<HTMLInputElement>(null);
  const summary = useRef<HTMLInputElement>(null);
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const enteredGoal = goal.current!.value;
    const enteredSummary = summary.current!.value;
    onAddGoal(enteredGoal, enteredSummary)
  }
  return (
    <form action="" onSubmit={handleSubmit}>
      <p>
        <label htmlFor="goal">your goal</label>
        <input type="text" id="goal" ref={goal} />
      </p>
      <p>
        <label htmlFor="summary">short summary</label>
        <input type="text" name="" id="summary" ref={summary} />
      </p>
      <p>
        <button>add goal</button>
      </p>
    </form>
  );
}

export default NewGoal;
