import { useRef, type FormEvent } from "react";
type NewGoalProps = {
  onAddGoal: (goal: string, summary: string) => void;
};
export default function NewGoal({ onAddGoal }: NewGoalProps) {
  const goal = useRef<HTMLInputElement>(null);
  const summary = useRef<HTMLInputElement>(null);
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // new FormData(e.currentTarget)
    const enteredGoal = goal.current!.value; //i will promes the value type will never be null
    const enteredSummary = summary.current!.value;
    onAddGoal(enteredGoal, enteredSummary);
    // goal.current.value = null
    // summary.current?.value = ""; you cant use this anymore you should use
    e.currentTarget.reset(); //this code will reset refs
  }
  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="goal">Your goal</label>
        <input type="text" id="goal" name="goal" ref={goal} />
      </p>
      <p>
        <label htmlFor="summary">Short summary</label>
        <input type="text" id="summary" name="summary" ref={summary} />
      </p>
      <p>
        <button type="submit">Add Goal</button>
      </p>
    </form>
  );
}
