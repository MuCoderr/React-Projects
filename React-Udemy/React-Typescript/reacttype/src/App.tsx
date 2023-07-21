import "./App.css";
import ContextExample from "./components/ContextExample";
import EventActions from "./components/EventActions";
import Home from "./components/Home";
import Instructor from "./components/Instructor";
import InstructorList from "./components/InstructorList";
import LoginCheck from "./components/LoginCheck";
import ReducerExample from "./components/ReducerExample";
import RefExample from "./components/RefExample";
import Request from "./components/Request";
import { ThemeContextProvider } from "./components/ThemeContext";

function App() {
  const instructor = {
    firstName: "Can",
    lastName: "Boz",
  };

  const instructorList = [
    {
      firstName: "Can",
      lastName: "Boz",
    },
    {
      firstName: "Mücahit",
      lastName: "Yasin",
    },
    {
      firstName: "Bülent",
      lastName: "Yılmaz",
    },
  ];

  return (
    <div className="App">
      <Home name="Can Boz" courseNumber={15} isBest={true} />
      <hr />
      <Instructor instructorNameLastName={instructor} />
      <hr />
      <InstructorList instructorNameLastNameList={instructorList} />
      <hr />
      <Request status="success" />
      <hr />
      <EventActions />
      <hr />
      <LoginCheck />
      <hr />
      <ReducerExample />
      <hr />
      <ThemeContextProvider>
        <ContextExample />
      </ThemeContextProvider>
      <hr />
      <RefExample />
    </div>
  );
}

export default App;
