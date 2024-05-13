import store from "../redux/store/Store";
import "../styles/App.css";
import Home from "./Home";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Home />
      </div>
    </Provider>
  );
}

export default App;
