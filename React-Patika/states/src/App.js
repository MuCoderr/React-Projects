// import { useState } from "react";
// import Counter from "./components/Counter";
import InputExample from "./components/InputExample";

function App() {
  // const [name, setName] = useState("Mücahit");
  // const [age, setAge] = useState(21);
  // const [friends, setFriends] = useState(["Bülent", "Harun"]);
  // const [address, setAddress] = useState({ title: "Bursa", zip: 16400 });

  return (
    // <div>
    //   {/* <h1>Merhaba {name}</h1>
    //   <h2>{age}</h2>

    //   <button onClick={() => setName("Yasin")}>Change name</button>
    //   <button onClick={() => setAge(25)}>Change name</button>

    //   <hr />
    //   <br />
    //   <br />

    //   <h2>Friends</h2>
    //   {friends.map((friend, key) => (
    //     <div key={key}>{friend}</div>
    //   ))}

    //   <br />

    //   <button onClick={() => setFriends([...friends, "Emirhan"])}>
    //     Add New Friend
    //   </button>

    //   <hr />
    //   <br />
    //   <br />

    //   <h2>Address</h2>
    //   <div>
    //     {address.title} {address.zip}
    //   </div>

    //   <br />

    //   <button onClick={() => setAddress({ ...address, zip: 16000 })}>
    //     Change the address
    //   </button> */}
    // </div>
    // <div>
    //   <Counter/>
    // </div>
    <div>
      <InputExample />
    </div>
  );
}

export default App;
