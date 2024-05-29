import store from "../redux/store/Store";
import "../styles/App.css";
import Login from "./Login";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Login />
      </div>
    </Provider>
  );
}

export default App;
