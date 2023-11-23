import { Button, Input } from "antd";
import useStore from "./store";

export const TodoAdd = () => {
  const store = useStore((state) => state);
  return (
    <div>
      <div className="flex justify-center mb-5">
        <Input
          placeholder="New Todo"
          style={{ width: 400 }}
          value={store.newTodo}
          onChange={(e) => store.setNewTodo(e.target.value)}
        />
        <Button onClick={store.addTodo}>Add Todo</Button>
      </div>
    </div>
  );
};
