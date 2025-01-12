import "./App.css";
import { useGetPlaceholderQuery } from "./store/apiSlice";

function App() {
  const { isError, isLoading, currentData } = useGetPlaceholderQuery();
  return (
    <div>
      App
      <p>{isLoading ? "..." : currentData}</p>
      <p>{isError && "Error"}</p>
    </div>
  );
}

export default App;
