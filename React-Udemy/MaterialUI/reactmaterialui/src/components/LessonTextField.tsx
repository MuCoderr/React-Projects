import React, { useState } from "react";
import { Stack, TextField, InputAdornment } from "@mui/material";

const LessonTextField = () => {
  const [value, setValue] = useState("");

  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={2}>
        <TextField label="Ad" />
        <TextField label="Ad" variant="outlined" />
        <TextField label="Ad" variant="filled" />
        <TextField label="Ad" variant="standard" />
      </Stack>

      <Stack direction="row" spacing={2}>
        <TextField label="Ad" variant="outlined" size="small" color="error" />
        <TextField
          label="Ad"
          variant="outlined"
          helperText="Lütfen adınızı giriniz"
        />
        <TextField
          type="password"
          label="Ad"
          variant="outlined"
          helperText="Lütfen şifrenizi giriniz"
        />
      </Stack>

      <Stack direction="row" spacing={2}>
        <TextField
          disabled
          type="password"
          label="Ad"
          variant="outlined"
          helperText="Disabled"
        />
        <TextField
          InputProps={{ readOnly: true }}
          type="password"
          label="Ad"
          variant="outlined"
          helperText="InputProps={{ readOnly: true }}"
        />
      </Stack>

      <Stack direction="row" spacing={2}>
        <TextField
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">TL</InputAdornment>
            ),
          }}
          label="Toplam"
          variant="outlined"
        />
        <TextField
          InputProps={{
            endAdornment: <InputAdornment position="end">TL</InputAdornment>,
          }}
          label="Toplam"
          variant="outlined"
        />
      </Stack>

      <Stack direction="row" spacing={2}>
        <TextField
          onChange={e => setValue(e.target.value)}
          value={value}
          type="password"
          label="Şifre"
          variant="outlined"
          helperText={
            !value
              ? "Lütfen şifrenizi giriniz"
              : "Şifrenizi kimseyle paylaşmayınız"
          }
        />
      </Stack>
    </Stack>
  );
};

export default LessonTextField;
