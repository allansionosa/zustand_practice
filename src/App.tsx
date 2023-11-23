import TodoList from "./TodoList";
import TopBar from "./TopBar";

function App() {
  return (
    <div className="App">
      <div className="grid justify-items-center">
        <div>
          <TopBar />
        </div>
        <TodoList />
      </div>
    </div>
  );
}

export default App;
