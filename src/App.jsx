import Navbar from "./components/Navbar/Navbar";
import SideBar from "./components/SideBar/SideBar";

const App = () => {
  return (
    <div>
      <Navbar />
      <hr />
      <div className="app-content">
        <SideBar />
      </div>
    </div>
  );
};

export default App;
