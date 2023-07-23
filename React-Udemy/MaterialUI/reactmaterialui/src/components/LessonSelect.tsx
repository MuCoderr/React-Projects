import React, { useState } from "react";
import { Box, TextField, MenuItem } from "@mui/material";

const LessonSelect = () => {
  const [country, setCountry] = useState<string[]>([]);
  console.log(country);

  //   const handleCahnge = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     setValue(e.target.value);
  //   };

  return (
    <Box width="250px">
      {/* <TextField
        select
        label="Ülke Seçiniz"
        fullWidth
        value={country}
        onChange={e => setCountry(e.target.value)}
      >
        <MenuItem value="TR">TÜRKİYE</MenuItem>
        <MenuItem value="USA">ABD</MenuItem>
        <MenuItem value="FR">FRANCE</MenuItem>
      </TextField> */}

      <TextField
        SelectProps={{
          multiple: true,
        }}
        select
        label="Ülke Seçiniz"
        fullWidth
        value={country}
        onChange={e =>
          setCountry(
            typeof e.target.value === "string"
              ? e.target.value.split(",")
              : e.target.value
          )
        }
      >
        <MenuItem value="TR">TÜRKİYE</MenuItem>
        <MenuItem value="USA">ABD</MenuItem>
        <MenuItem value="FR">FRANCE</MenuItem>
      </TextField>
    </Box>
  );
};

export default LessonSelect;
