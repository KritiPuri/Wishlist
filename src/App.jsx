import { useState } from "react";
import { v4 as uuid } from "uuid";
import "./App.css";

function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const addTodo = () => {
    if (!todo.trim()) return;
    setTodoList([...todoList, { id: uuid(), text: todo, completed: false }]);
    setTodo("");
  };
//toggle
  const toggleComplete = (id) => {
    setTodoList(todoList.map(item =>
      item.id === id ? { ...item, completed: !item.completed } : item
    ));
  };

  const deleteTodo = (id) => {
    setTodoList(todoList.filter(item => item.id !== id));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-purple-700 mb-6">My Wishlist</h1>
        <div className="flex gap-2 mb-6">
          <input
            value={todo}
            onChange={e => setTodo(e.target.value)}
            placeholder="Add your wish here"
            className="flex-1 px-4 py-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <button
            onClick={addTodo}
            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-semibold transition"
          >
            Add
          </button>
        </div>
        <div className="space-y-3">
          {todoList.map(item => (
            <div
              key={item.id}
              className="flex items-center bg-purple-50 rounded-lg px-4 py-2 shadow-sm"
            >
              <input
                type="checkbox"
                checked={item.completed}
                onChange={() => toggleComplete(item.id)}
                className="accent-purple-600 w-5 h-5"
              />
              <span
                className={`ml-3 flex-1 text-lg ${item.completed ? "line-through text-gray-400" : "text-gray-800"}`}
              >
                {item.text}
              </span>
              <button
                className="ml-3 text-sm bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded transition"
                onClick={() => deleteTodo(item.id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;