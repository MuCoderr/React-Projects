import { Button, Stack, ButtonGroup } from "@mui/material";
import React from "react";

const LessonButtonGroup = () => {
  return (
    <Stack direction="column" spacing={4}>
      <ButtonGroup variant="text">
        <Button>Butonum</Button>
        <Button>Butonum</Button>
        <Button>Butonum</Button>
      </ButtonGroup>

      <ButtonGroup variant="outlined">
        <Button>Butonum</Button>
        <Button>Butonum</Button>
        <Button>Butonum</Button>
      </ButtonGroup>

      <ButtonGroup variant="contained">
        <Button>Butonum</Button>
        <Button>Butonum</Button>
        <Button>Butonum</Button>
      </ButtonGroup>

      <ButtonGroup variant="text" orientation="vertical">
        <Button>Butonum</Button>
        <Button>Butonum</Button>
        <Button>Butonum</Button>
      </ButtonGroup>

      <ButtonGroup
        variant="text"
        orientation="vertical"
        size="small"
        color="error"
      >
        <Button>Butonum</Button>
        <Button>Butonum</Button>
        <Button>Butonum</Button>
      </ButtonGroup>
    </Stack>
  );
};

export default LessonButtonGroup;
