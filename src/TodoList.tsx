import { TodoAdd } from "./TodoAdd";
import useStore, { Todo } from "./store";
import { Button, Checkbox, Input, Popconfirm, message } from "antd";
function TodoListItems() {
  const store = useStore((state) => state);

  const confirm = (todo: Todo, e?: React.MouseEvent<HTMLElement>) => {
    console.log(e);
    store.removeTodo(todo.id);
    message.success("Click on Yes");
  };
  const cancel = (e?: React.MouseEvent<HTMLElement>) => {
    console.log(e);
    message.error("Click on No");
  };

  return (
    <div className="grid gap-5 grid-cols-2">
      {store.todos.map((todo) => (
        <div key={todo.id}>
          <Checkbox
            onClick={() => store.toggleTodo(todo.id)}
            checked={todo.completed}
            className="mr-2"
          />

          <Input
            style={{ width: 400 }}
            value={todo.title}
            onChange={(e) => store.updateTodo(todo.id, e.target.value)}
          />
          <Popconfirm
            title="delete the task"
            description="Are you sure to delete this task?"
            onConfirm={(e) => confirm(todo, e)}
            onCancel={cancel}
            okText={<span className="bg-blue-400 px-2 rounded">Yes</span>}
            cancelText="No"
          >
            <Button danger className="ml-2">
              Delete
            </Button>
          </Popconfirm>
        </div>
      ))}
    </div>
  );
}
export default function TodoList() {
  return (
    <div>
      <header className="font-bold text-2xl flex justify-center">
        Todo List
      </header>
      <div>
        <TodoAdd />
      </div>
      <div className="">
        <TodoListItems />
      </div>
    </div>
  );
}
