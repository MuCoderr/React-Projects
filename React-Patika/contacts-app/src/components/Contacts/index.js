import { useState } from "react";
import List from "./List";
import Form from "./Form";
import "./styles.css";

function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullname: "Mücahit",
      phone_number: "1234",
    },
    {
      fullname: "Ömer",
      phone_number: "5678",
    },
  ]);

  //   useEffect(() => {
  //     console.log(contacts);
  //   }, [contacts]);

  return (
    <div id="container">
      <h1>Contacts</h1>
      <List contacts={contacts} />
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  );
}

export default Contacts;
