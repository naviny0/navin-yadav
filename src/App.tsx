import { Link } from "react-router";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      App
    </div>
  );
}
export function Header() {
  const links = [
    { to: "/home", name: "Home" },
    { to: "/about", name: "About" },
  ];
  return (
    <div className="bg-blue-500 flex max-w-7xl mx-auto items-center justify-between py-4">
      <div>Navin Yadav</div>
      <div>
        <ul className="flex items-center gap-5">
          {links.map((l) => (
            <Link to={l.to}>{l.name}</Link>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
