import React, { useState } from "react";
import {
  Box,
  FormControlLabel,
  Checkbox,
  FormControl,
  FormLabel,
  FormGroup,
} from "@mui/material";

const LessonCheckbox = () => {
  const [isAccept, setIsAccept] = useState(false);
  const [knowledge, setKnowledge] = useState<string[]>([]);

  console.log(knowledge);

  const handleKnowlegdeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const index = knowledge.indexOf(e.target.value);
    if (index === -1) {
      setKnowledge([...knowledge, e.target.value]);
    } else {
      setKnowledge(knowledge.filter(item => item !== e.target.value));
    }
  };

  return (
    <Box>
      <Box>
        <FormControl>
          <FormLabel>Eğitim Durumu</FormLabel>
          <FormGroup row>
            <FormControlLabel disabled label="İlkokul" control={<Checkbox />} />
            <FormControlLabel
              label="Lise"
              control={<Checkbox defaultChecked />}
            />
            <FormControlLabel label="Üniversite" control={<Checkbox />} />
          </FormGroup>
        </FormControl>
      </Box>
      <hr />
      <Box>
        <FormControl>
          <FormLabel>Eğitim Durumu</FormLabel>
          <FormGroup row>
            <FormControlLabel
              label="Kullanım Koşullarını Kabul Ediyorum."
              control={
                <Checkbox
                  checked={isAccept}
                  onChange={e => setIsAccept(e.target.checked)}
                />
              }
            />
          </FormGroup>
        </FormControl>
      </Box>
      <hr />
      <Box>
        <FormControl>
          <FormLabel>Frontend'de Neleri Biliyorsun</FormLabel>
          <FormGroup row>
            <FormControlLabel
              value="react"
              label="React Js"
              control={
                <Checkbox
                  checked={knowledge.includes("react")}
                  onChange={handleKnowlegdeChange}
                />
              }
            />
            <FormControlLabel
              value="angular"
              label="Angular"
              control={
                <Checkbox
                  checked={knowledge.includes("angular")}
                  onChange={handleKnowlegdeChange}
                />
              }
            />
            <FormControlLabel
              value="vue"
              label="Vue Js"
              control={
                <Checkbox
                  checked={knowledge.includes("vue")}
                  onChange={handleKnowlegdeChange}
                />
              }
            />
          </FormGroup>
        </FormControl>
      </Box>
    </Box>
  );
};

export default LessonCheckbox;
