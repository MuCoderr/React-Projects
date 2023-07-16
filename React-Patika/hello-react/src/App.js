import "./App.css";
import User from "./components/User";

const friends = [
  {
    id: 1,
    name: "Harun",
  },
  {
    id: 2,
    name: "Bülent",
  },
  {
    id: 3,
    name: "Emirhan",
  },
  {
    id: 4,
    name: "Erol",
  },
];

function App() {
  return (
    <div>
      <User
        name="Mücahit"
        surname="Daşdemir"
        isLoggedIn={true}
        age={21}
        friends={friends}
        address={{
          title: "Inegol/Bursa",
          zip: 16400,
        }}
      />
    </div>
  );
}

export default App;
