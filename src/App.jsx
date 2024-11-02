import Header from "./Components/Header";
import FilterColumn from "./Components/FilterColumn";
import ProjectColumn from "./Components/ProjectColumn";

function App() {

  return (
    <div>
        <Header />
        <div>
            <FilterColumn />
            <ProjectColumn />
        </div>
    </div>
  );
}

export default App;
