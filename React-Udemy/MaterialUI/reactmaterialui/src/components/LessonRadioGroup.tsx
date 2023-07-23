import React, { ChangeEvent, useState } from "react";
import {
  FormControl,
  FormLabel,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormHelperText,
} from "@mui/material";

const LessonRadioGroup = () => {
  const [value, setValue] = useState("");
  console.log(value);

  //   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  //     setValue(e.target.value);
  //   };

  return (
    <FormControl>
      <FormLabel>Maaş Beklentiniz</FormLabel>
      <RadioGroup
        row
        name="extected-salary"
        value={value}
        onChange={e => setValue(e.target.value)}
      >
        <FormControlLabel
          label="2000$"
          value="2000"
          control={<Radio></Radio>}
        />
        <FormControlLabel
          label="3000$"
          value="3000"
          control={<Radio></Radio>}
        />
        <FormControlLabel
          label="4000$"
          value="4000"
          control={<Radio></Radio>}
        />
      </RadioGroup>

      <FormHelperText>Yanlış Seçim</FormHelperText>
    </FormControl>
  );
};

export default LessonRadioGroup;
