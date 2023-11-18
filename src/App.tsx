import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Counter from "./pages/Counter/Counter";
import ColorPicker from "./pages/ColorPicker/ColorPicker";
import Form from "./pages/Form/Form";
import { TodosView } from "./pages/Todos/TodosView";

const colorPickerOptions = [
  { label: "red", color: "#F44336" },
  { label: "green", color: "#4CAF50" },
  { label: "blue", color: "#2196F3" },
  { label: "grey", color: "#607D8B" },
  { label: "pink", color: "#E91E63" },
  { label: "indigo", color: "#3F51B5" },
];

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="counter" element={<Counter />} />
          <Route
            path="color"
            element={<ColorPicker options={colorPickerOptions} />}
          />
          <Route
            path="form"
            element={<Form onSubmit={(cred) => console.log(cred)} />}
          />
          <Route path="todo" element={<TodosView />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
