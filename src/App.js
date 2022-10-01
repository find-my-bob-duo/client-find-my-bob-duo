import logo from "./logo.svg";
import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
} from "react-router-dom";
import Header from "./header/Header";
import RoutesScreen from "./header/RoutesScreen";

const App = () => {
  return (
    <div>
      <Header />
      <RoutesScreen />
    </div>
  );
};

export default App;
