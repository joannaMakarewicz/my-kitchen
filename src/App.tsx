import { Button, Text } from "./ui";
import "./App.css";

function App() {
  return (
    <>
      <Text>Test</Text>
      <Button onClick={() => console.log("wow")} label="Click me" className="border border-cyan-200 bg-cyan-500 p-2 rounded text-sm text-slate-200"/>
    </>
  );
}

export default App;
