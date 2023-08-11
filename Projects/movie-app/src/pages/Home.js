import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Modal,
  Box,
  Button,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setDataAndLoading } from "../redux/moviesSlice";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  padding: 0,
};

export default function Home() {
  const [title, setTitle] = useState("");
  const { searchValue } = useSelector(state => state.search);
  const { data, loading } = useSelector(state => state.movies);
  const api_key = process.env.REACT_APP_API_KEY;

  const [open, setOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(" ");

  const handleOpen = movie => {
    setOpen(true);
    setSelectedMovie(movie);
  };
  const handleClose = () => setOpen(false);

  const dispatch = useDispatch();

  const fetchDataTrending = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/trending/movie/day?&api_key=${api_key}`
      );
      dispatch(
        setDataAndLoading({ data: response.data.results, loading: true })
      );
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchSearchData = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?query=${searchValue}&api_key=${api_key}`
      );
      dispatch(
        setDataAndLoading({ data: response.data.results, loading: true })
      );
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    searchValue !== ""
      ? data.length !== 0
        ? fetchSearchData() && setTitle("Search Result")
        : fetchSearchData() &&
          setTitle(`The film "${searchValue}" was not found`)
      : fetchDataTrending() && setTitle("Trending!");
  }, [searchValue]);

  console.log(data);

  return (
    <div>
      <Typography variant="h3" mb={2} mt={2}>
        <b>{title}</b>
      </Typography>
      {!loading ? (
        <h1>Loading...</h1>
      ) : (
        <Grid container justifyContent="center">
          {data.map((movie, i) => (
            <Card key={i} sx={{ margin: 2, width: 150 }}>
              <CardActionArea onClick={() => handleOpen(movie)}>
                <CardMedia
                  component="img"
                  src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                  sx={{ width: 150 }}
                />
                <CardContent>
                  <Typography variant="subtitle2" component="p">
                    {movie.title}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                {selectedMovie && (
                  <Box sx={modalStyle}>
                    <Button
                      onClick={handleClose}
                      color="error"
                      sx={{ alignSelf: "flex-end", mr: 2, mt: 1 }}
                    >
                      X
                    </Button>
                    <Box sx={{ padding: 3 }}>
                      <CardMedia
                        component="img"
                        src={`https://image.tmdb.org/t/p/original${selectedMovie.backdrop_path}`}
                      />
                      <hr />
                      <Typography variant="h6" component="h2">
                        {selectedMovie.title}
                        <Typography variant="body1">
                          User Score:{" "}
                          {Math.round(selectedMovie.vote_average * 10)}%
                        </Typography>
                      </Typography>
                      <hr />
                      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <Typography
                          variant="subtitle2"
                          component="p"
                          color="#1976D2"
                          sx={{ mb: 1 }}
                        >
                          Overview:
                        </Typography>
                        {selectedMovie.overview}
                      </Typography>
                      <br />

                      <Typography variant="subtitle2">
                        Release Date: {selectedMovie.release_date}
                      </Typography>
                    </Box>
                  </Box>
                )}
              </Modal>
            </Card>
          ))}
        </Grid>
      )}
    </div>
  );
}
