import { useState } from "react";

function InputExample() {
  //   const [name, setName] = useState("");
  //   const [surname, setSurame] = useState("");

  //   const onChangeName = event => setName(event.target.value);
  //   const onChangeSurname = event => setSurame(event.target.value);

  const [form, setForm] = useState({ name: "", surname: "" });

  const onChangeInput = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div>
      Name
      <br />
      <input name="name" value={form.name} onChange={onChangeInput} />
      <br />
      <br />
      Surname
      <br />
      <input name="surname" value={form.surname} onChange={onChangeInput} />
      <br />
      <br />
      {form.name} {form.surname}
    </div>
  );
}

export default InputExample;
