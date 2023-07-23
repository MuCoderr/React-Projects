import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";

const LessonCard = () => {
  return (
    <Card
      sx={{
        width: 350,
      }}
    >
      <CardMedia
        height="150px"
        component="img"
        image="https://source.unsplash.com/random"
      />
      <CardContent>
        <Typography variant="h5" component="div">
          Başlığım
        </Typography>
        <Typography variant="body2" component="p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil dolore
          rerum sint quasi fugiat et eligendi eveniet alias placeat ratione
          sapiente, quo ducimus! Quas rem delectus neque numquam praesentium
          voluptas?
        </Typography>
      </CardContent>
      <CardActions>
        <Button color="error">Temizle</Button>
        <Button>Kaydet</Button>
      </CardActions>
    </Card>
  );
};

export default LessonCard;
