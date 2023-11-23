import axios from "axios";
import useStore, { Todo } from "./store";
import { Button } from "antd";
export default function TopBar() {
  const store = useStore();
  const API_BASE_URL = `https://jsonplaceholder.typicode.com/todos`;

  const onload = () => {
    axios
      .get(API_BASE_URL)
      .then((res) => {
        if (res.status === 200) {
          return res.data;
        } else {
          throw new Error("Failed to Fetch Data");
        }
      })
      .then((tds: Todo[]) => store.setTodos(tds))
      .catch((error) => {
        console.error("Error Fetching data:", error);
      });
  };

  return (
    <div>
      <Button type="primary" onClick={onload} className="bg-blue-400">
        onload
      </Button>
    </div>
  );
}
