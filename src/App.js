import "./App.css";
import SortOption from "./components/SortOptionComponent/SortOption";
import BubbleSort from "./components/BubbleSortComponent/BubbleSort";

function App() {
  return (
    <div className="app">
      <h1 className="app-header">Sort IT!</h1>
      <SortOption />
      <BubbleSort />
    </div>
  );
}

export default App;
