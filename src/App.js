import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import MainUi from "./Componets/UI/MainUi";
import SideBar from "./Componets/UI/SideBar";
import { storeActions } from "./store/store-slice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchDataHandler();
  }, []);

  const fetchDataHandler = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "GET",
      });
      const data = await res.json();
      console.log(data);
      if (res.ok) {
        dispatch(storeActions.setNewsList(data));
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="App">
      <MainUi />
    </div>
  );
}

export default App;
