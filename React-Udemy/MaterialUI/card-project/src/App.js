import { AppBar, Toolbar, Grid, Container } from "@mui/material";
import Course from "./Course";
import Angular from "./images/angular.jpg";
import Bootstarp5 from "./images/bootstrap5.png";
import CCsharp from "./images/ccsharp.png";
import KompleWeb from "./images/kompleweb.jpg";
import "./App.css";

function App() {
  return (
    <div>
      <AppBar>
        <Toolbar sx={{ fontSize: 30 }}>Kart Projesi</Toolbar>
      </AppBar>
      <Container maxWidth="lg">
        <Grid container spacing={2} sx={{ marginTop: 10 }}>
          <Grid item xs={12} md={6} lg={3}>
            <Course
              image={Angular}
              title="Angular"
              description="Do id fugiat laborum aliqua voluptate. Officia quis laboris commodo eu ut consectetur sit nostrud consectetur officia ea est ut. Incididunt ullamco est est elit sint tempor id eu enim dolore est aute. Aute non irure tempor Lorem voluptate. Consequat qui id culpa dolor qui deserunt."
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Course
              image={Bootstarp5}
              title="Bootstarp5"
              description="Do id fugiat laborum aliqua voluptate. Officia quis laboris commodo eu ut consectetur sit nostrud consectetur officia ea est ut. Incididunt ullamco est est elit sint tempor id eu enim dolore est aute. Aute non irure tempor Lorem voluptate. Consequat qui id culpa dolor qui deserunt."
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Course
              image={CCsharp}
              title="CCsharp"
              description="Do id fugiat laborum aliqua voluptate. Officia quis laboris commodo eu ut consectetur sit nostrud consectetur officia ea est ut. Incididunt ullamco est est elit sint tempor id eu enim dolore est aute. Aute non irure tempor Lorem voluptate. Consequat qui id culpa dolor qui deserunt."
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Course
              image={KompleWeb}
              title="KompleWeb"
              description="Do id fugiat laborum aliqua voluptate. Officia quis laboris commodo eu ut consectetur sit nostrud consectetur officia ea est ut. Incididunt ullamco est est elit sint tempor id eu enim dolore est aute. Aute non irure tempor Lorem voluptate. Consequat qui id culpa dolor qui deserunt."
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
