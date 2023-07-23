import { Card, CardMedia, CardContent, Typography } from "@mui/material";

function Course({ image, title, description }) {
  return (
    <Card>
      <CardMedia component="img" image={image} title={title} />
      <CardContent>
        <Typography variant="h4">{title}</Typography>
        <Typography variant="p">{description}</Typography>
      </CardContent>
    </Card>
  );
}

export default Course;
