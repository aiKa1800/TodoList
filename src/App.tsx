import "@mantine/core/styles.css";

import { MantineProvider } from "@mantine/core";
import Todo from "./Todo";
function App() {
  return (
    <MantineProvider>
      <Todo />
    </MantineProvider>
  );
}

export default App;
