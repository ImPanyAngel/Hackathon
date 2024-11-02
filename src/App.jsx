import Header from "./Components/Header";
import FilterColumn from "./Components/FilterColumn";
import ProjectColumn from "./Components/ProjectColumn";

function App() {

  return (
    <div className="main-body">
        <Header />
        <div className="column-body">
            <FilterColumn />
            <ProjectColumn />
        </div>
    </div>
  );
}

export default App;
