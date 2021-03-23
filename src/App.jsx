import WishList from "./WishList";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1 className="app-header">Wish List</h1>
      <div className="app-body">
        <WishList />
      </div>
    </div>
  );
}
