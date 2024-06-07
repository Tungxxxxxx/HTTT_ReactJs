import store from "../redux/store/Store";
import RouteBase from "../routes/Route";
import "../styles/App.css";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <RouteBase />
      </div>
    </Provider>
  );
}

export default App;
