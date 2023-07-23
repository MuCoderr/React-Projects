import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormHelperText,
  Button,
} from "@mui/material";

const LessonRadioExample = () => {
  const [value, setValue] = useState("");
  const [helperText, setHelperText] = useState("");
  const [error, setError] = useState(false);

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (value === "canboz") {
      setHelperText("Doğru cevap tabiki Can Boz!");
      setError(false);
    } else if (value === "ofCourseCanBoz") {
      setHelperText("Bravo doğru cevap!");
      setError(false);
    } else {
      setHelperText("Lütfen Seçim Yapınız");
      setError(true);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl error={error}>
        <FormLabel>En kapsamlı frontend eğitimini veren eğitmen kim?</FormLabel>
        <RadioGroup onChange={handleRadioChange}>
          <FormControlLabel
            label="Can Boz"
            value="canboz"
            control={<Radio></Radio>}
          />
          <FormControlLabel
            label="Tabiki Can Boz"
            value="ofCourseCanBoz"
            control={<Radio></Radio>}
          />
        </RadioGroup>
        <FormHelperText>{helperText}</FormHelperText>
        <Button type="submit" variant="outlined">
          Gönder
        </Button>
      </FormControl>
    </form>
  );
};

export default LessonRadioExample;
