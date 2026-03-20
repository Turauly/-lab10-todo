import { TodoList } from "./components/TodoList";

const starterTodos = [
  { id: 1, text: "Read Chapter 11", completed: true },
  { id: 2, text: "Write RTL tests", completed: false }
];

export default function App() {
  return (
    <main className="app-shell">
      <section className="app-intro">
        <p className="eyebrow">Week 10 Lab</p>
        <h2>Testing and deployment dashboard for a polished Todo workflow.</h2>
        <p className="intro-copy">
          Capture daily tasks, verify behavior with tests, and keep the interface
          clean enough for a final submission demo.
        </p>
      </section>
      <TodoList initialTodos={starterTodos} />
    </main>
  );
}
