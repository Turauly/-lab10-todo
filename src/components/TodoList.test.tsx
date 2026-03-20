import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TodoList, type Todo } from "./TodoList";

const initialTodos: Todo[] = [
  { id: 1, text: "Write tests", completed: false },
  { id: 2, text: "Ship feature", completed: true }
];

describe("TodoList", () => {
  it("renders the initial todos and summary count", () => {
    render(<TodoList initialTodos={initialTodos} />);

    expect(screen.getByRole("heading", { name: "Todo List" })).toBeInTheDocument();
    expect(screen.getAllByTestId("todo-item")).toHaveLength(2);
    expect(screen.getByText("Write tests")).toBeInTheDocument();
    expect(screen.getByText("Ship feature")).toBeInTheDocument();
    expect(screen.getByTestId("todo-count")).toHaveTextContent("2 todos (1 completed)");
  });

  it("adds a todo when the add button is clicked", async () => {
    const user = userEvent.setup();
    render(<TodoList />);

    const input = screen.getByTestId("todo-input");
    await user.type(input, "Learn Jest");
    await user.click(screen.getByTestId("add-button"));

    expect(screen.getByText("Learn Jest")).toBeInTheDocument();
    expect(screen.getAllByTestId("todo-item")).toHaveLength(1);
    expect(input).toHaveValue("");
    expect(screen.getByTestId("todo-count")).toHaveTextContent("1 todos (0 completed)");
  });

  it("adds a todo when Enter is pressed", async () => {
    const user = userEvent.setup();
    render(<TodoList />);

    const input = screen.getByTestId("todo-input");
    await user.type(input, "Submit with Enter{enter}");

    expect(screen.getByText("Submit with Enter")).toBeInTheDocument();
    expect(screen.getAllByTestId("todo-item")).toHaveLength(1);
  });

  it("does not add empty or whitespace-only todos", async () => {
    const user = userEvent.setup();
    render(<TodoList />);

    const input = screen.getByTestId("todo-input");
    await user.type(input, "   ");
    await user.click(screen.getByTestId("add-button"));

    expect(screen.queryByTestId("todo-item")).not.toBeInTheDocument();
    expect(screen.getByTestId("todo-count")).toHaveTextContent("0 todos (0 completed)");
  });

  it("toggles completion state from the checkbox", async () => {
    const user = userEvent.setup();
    render(<TodoList initialTodos={initialTodos} />);

    const checkbox = screen.getAllByTestId("todo-checkbox")[0];
    const todoItem = screen.getAllByTestId("todo-item")[0];

    expect(checkbox).not.toBeChecked();
    expect(todoItem).not.toHaveClass("completed");

    await user.click(checkbox);

    expect(checkbox).toBeChecked();
    expect(todoItem).toHaveClass("completed");
    expect(screen.getAllByTestId("todo-checkbox")[1]).toBeChecked();
    expect(screen.getByTestId("todo-count")).toHaveTextContent("2 todos (2 completed)");
  });

  it("deletes the selected todo", async () => {
    const user = userEvent.setup();
    render(<TodoList initialTodos={initialTodos} />);

    const deleteButtons = screen.getAllByTestId("delete-button");
    await user.click(deleteButtons[0]);

    expect(screen.queryByText("Write tests")).not.toBeInTheDocument();
    expect(screen.getAllByTestId("todo-item")).toHaveLength(1);
    expect(screen.getByTestId("todo-count")).toHaveTextContent("1 todos (1 completed)");
  });
});
