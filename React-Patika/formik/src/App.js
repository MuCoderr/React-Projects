import "./App.css";
import { useFormik } from "formik";

function App() {
  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      firstName: "Mücahit Yasin",
      lastName: "Daşdemir",
      email: "mucahityasin_36@hotmail.com",
      gender: "male",
      hobies: [],
      country: "",
    },
    onSubmit: values => {
      console.log(values);
    },
  });

  return (
    <div className="App">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
          value={values.firstName}
          name="firstName"
          onChange={handleChange}
          placeholder="Jane"
        />

        <br />
        <br />

        <label htmlFor="lastName">Last Name</label>
        <input
          name="lastName"
          value={values.lastName}
          onChange={handleChange}
          placeholder="Doe"
        />

        <br />
        <br />

        <label htmlFor="email">Email</label>
        <input
          name="email"
          value={values.email}
          onChange={handleChange}
          placeholder="jane@acme.com"
          type="email"
        />

        <br />
        <br />

        <span>Male</span>
        <input
          type="radio"
          name="gender"
          value="male"
          onChange={handleChange}
          checked={values.gender === "male"}
        />
        <span>Female</span>
        <input
          type="radio"
          name="gender"
          value="female"
          onChange={handleChange}
          checked={values.gender === "female"}
        />

        <br />
        <br />

        <div>
          <input
            type="checkbox"
            name="hobies"
            value="Football"
            onChange={handleChange}
          />
          Football
        </div>
        <div>
          <input
            type="checkbox"
            name="hobies"
            value="Cinema"
            onChange={handleChange}
          />
          Cinema
        </div>
        <div>
          <input
            type="checkbox"
            name="hobies"
            value="Play Game"
            onChange={handleChange}
          />
          Play Game
        </div>

        <br />
        <br />

        <select name="country" onChange={handleChange}>
          <option value="tr">Turkey</option>
          <option value="en">England</option>
          <option value="usa">USA</option>
        </select>

        <br />
        <br />

        <button type="submit">Submit</button>

        <br />
        <br />

        {JSON.stringify(values)}
      </form>
    </div>
  );
}

export default App;
