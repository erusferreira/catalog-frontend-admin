/* eslint-disable @typescript-eslint/no-unused-vars */
import { Routes } from "./routes";
import { UserProvider } from "context/user";

function App() {
  return (
    <UserProvider>
      <Routes />
    </UserProvider>
  );
}

export default App;
