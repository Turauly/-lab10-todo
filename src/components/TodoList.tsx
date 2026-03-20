import { KeyboardEvent, useState } from "react";

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoListProps {
  initialTodos?: Todo[];
}

export function TodoList({ initialTodos = [] }: TodoListProps) {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    const trimmedTodo = newTodo.trim();

    if (!trimmedTodo) {
      return;
    }

    setTodos((currentTodos) => [
      ...currentTodos,
      { id: Date.now(), text: trimmedTodo, completed: false }
    ]);
    setNewTodo("");
  };

  const toggleTodo = (id: number) => {
    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos((currentTodos) => currentTodos.filter((todo) => todo.id !== id));
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      addTodo();
    }
  };

  const completedCount = todos.filter((todo) => todo.completed).length;
  const pendingCount = todos.length - completedCount;

  return (
    <div className="todo-list">
      <div className="todo-header">
        <div>
          <p className="section-label">Focus Board</p>
          <h1>Todo List</h1>
          <p className="section-copy">
            Keep your tasks visible, finish the important ones, and ship the lab.
          </p>
        </div>
        <div className="todo-summary-badge">
          <span>{completedCount}</span>
          <small>done today</small>
        </div>
      </div>

      <div className="todo-stats" aria-label="Todo statistics">
        <div className="stat-card">
          <span>Total</span>
          <strong>{todos.length}</strong>
        </div>
        <div className="stat-card">
          <span>Pending</span>
          <strong>{pendingCount}</strong>
        </div>
        <div className="stat-card">
          <span>Completed</span>
          <strong>{completedCount}</strong>
        </div>
      </div>

      <div className="todo-input-container">
        <input
          type="text"
          data-testid="todo-input"
          value={newTodo}
          onChange={(event) => setNewTodo(event.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Add a new todo..."
        />
        <button data-testid="add-button" onClick={addTodo}>
          Add
        </button>
      </div>

      <ul className="todo-items" data-testid="todo-list">
        {todos.map((todo) => (
          <li
            key={todo.id}
            data-testid="todo-item"
            className={`todo-item-row${todo.completed ? " completed" : ""}`}
          >
            <input
              type="checkbox"
              aria-label={`Mark ${todo.text} as completed`}
              data-testid="todo-checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            <span data-testid="todo-text">{todo.text}</span>
            <button
              type="button"
              aria-label={`Delete ${todo.text}`}
              data-testid="delete-button"
              onClick={() => deleteTodo(todo.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      {todos.length === 0 ? (
        <div className="empty-state">
          <strong>No tasks yet.</strong>
          <p>Add your first todo to start the day with a clear plan.</p>
        </div>
      ) : null}

      <div className="todo-count" data-testid="todo-count">
        {todos.length} todos ({completedCount} completed)
      </div>
    </div>
  );
}
