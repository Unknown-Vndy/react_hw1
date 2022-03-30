import "./App.css";
import ShowUserInfo from "./components/ShowUserInfo";

function App() {
  return (
    <div className="App">
      <div className="content">
        <ShowUserInfo
          name="Emma Watson"
          age="31"
          src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tvPPRGzAzdQFhlKzLbMO1EpuTJI.jpg"
        />
      </div>
    </div>
  );
}

export default App;
