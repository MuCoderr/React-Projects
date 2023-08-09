import {
  Box,
  Button,
  ButtonGroup,
  Grid,
  TextField,
  Paper,
  Link,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setResult } from "./redux/calculatorSlice";
import { LuDelete } from "react-icons/lu";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function App() {
  const dispatch = useDispatch();
  const result = useSelector(state => state.calculator.result);

  const handleButtonClick = value => {
    if (value === "=") {
      // Calculate the result when "=" button is clicked
      try {
        const calculatedResult = eval(result); // WARNING: Using 'eval' is not recommended in production apps.
        if (calculatedResult === Infinity || calculatedResult === -Infinity) {
          dispatch(setResult("Not divisible by zero"));
        } else {
          dispatch(setResult(String(calculatedResult)));
        }
      } catch (error) {
        // Handle potential errors in the calculation
        dispatch(setResult("Error"));
      }
    } else if (value === "<-") {
      // Clear the last entry when "CE" button is clicked
      const newResult = result.slice(0, -1); // Remove the last character
      dispatch(setResult(newResult));
    } else if (value === "CE") {
      dispatch(setResult(""));
    } else {
      dispatch(setResult(result + value));
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
      }}
    >
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid>
          <TextField
            id="outlined-basic"
            label="Result"
            variant="outlined"
            value={result}
            InputProps={{
              endAdornment: (
                <Button
                  onClick={() => handleButtonClick("<-")}
                  color="warning"
                  variant="contained"
                  key="delete"
                  size="large"
                >
                  <LuDelete />
                </Button>
              ),
            }}
          />
        </Grid>
        <Grid sx={{ marginTop: 1 }}>
          <ButtonGroup orientation="vertical" size="large">
            <Button onClick={() => handleButtonClick("7")} key="seven">
              7
            </Button>
            <Button onClick={() => handleButtonClick("4")} key="four">
              4
            </Button>
            <Button onClick={() => handleButtonClick("1")} key="one">
              1
            </Button>
            <Button
              onClick={() => handleButtonClick("CE")}
              color="error"
              variant="contained"
              key="reset"
            >
              CE
            </Button>
          </ButtonGroup>
          <ButtonGroup
            orientation="vertical"
            size="large"
            sx={{ marginLeft: 0.2 }}
          >
            <Button onClick={() => handleButtonClick("8")} key="eight">
              8
            </Button>
            <Button onClick={() => handleButtonClick("5")} key="five">
              5
            </Button>
            <Button onClick={() => handleButtonClick("2")} key="two">
              2
            </Button>
            <Button onClick={() => handleButtonClick("0")} key="zero">
              0
            </Button>
          </ButtonGroup>
          <ButtonGroup
            orientation="vertical"
            size="large"
            sx={{ marginLeft: 0.2 }}
          >
            <Button onClick={() => handleButtonClick("9")} key="nine">
              9
            </Button>
            <Button onClick={() => handleButtonClick("6")} key="six">
              6
            </Button>
            <Button onClick={() => handleButtonClick("3")} key="three">
              3
            </Button>
            <Button
              onClick={() => handleButtonClick("=")}
              color="success"
              variant="contained"
              key="equal"
            >
              =
            </Button>
          </ButtonGroup>
          <ButtonGroup
            orientation="vertical"
            size="large"
            sx={{ marginLeft: 0.2 }}
            variant="contained"
          >
            <Button onClick={() => handleButtonClick("/")} key="section">
              /
            </Button>
            <Button onClick={() => handleButtonClick("*")} key="multiply">
              x
            </Button>
            <Button onClick={() => handleButtonClick("-")} key="extraction">
              -
            </Button>
            <Button onClick={() => handleButtonClick("+")} key="collection">
              +
            </Button>
          </ButtonGroup>
        </Grid>
        <Paper elevation={0} sx={{ marginTop: 5 }}>
          <Typography variant="caption">Mücahit Yasin Daşdemir</Typography>
          <Box display="flex" justifyContent="center" alignItems="center">
            <br />
            <Link href="https://github.com/MuCoderr" color="inherit">
              <FaGithub />
            </Link>
            <Link
              href="https://www.linkedin.com/in/mucahitysnn/"
              color="inherit"
              marginLeft={1}
            >
              <FaLinkedin />
            </Link>
          </Box>
        </Paper>
      </Grid>
    </Box>
  );
}

export default App;
