import React, { useState } from "react";
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  makeStyles,
  RadioGroup,
  Radio,
  FormLabel,
  FormControlLabel,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function FindRentalForm() {
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [value, setValue] = React.useState("female");

  const handleChangeSelectCat = (event) => {
    setCategory(event.target.value);
    console.log(event.target.value);
  };
  const handleChangeSelectLoc = (event) => {
    setLocation(event.target.value);
    console.log(event.target.value);
  };

  const handleChangeRadio = (event) => {
    setValue(event.target.value);
    console.log(event.target.value);
  };

  return (
    <div className="rental_Form">
      <FormControl variant="filled">
        <InputLabel id="demo-simple-select-filled-label">
          Select Category
        </InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={category}
          onChange={handleChangeSelectCat}
          className="rental_Selects"
        >
          <MenuItem value="" disabled>
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="filled">
        <InputLabel id="demo-simple-select-filled-label">
          Select Location
        </InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={location}
          onChange={handleChangeSelectLoc}
          className="rental_Selects"
        >
          <MenuItem value="" disabled>
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>

      <FormControl component="fieldset">
        <FormLabel component="legend">Gender</FormLabel>
        <RadioGroup
          aria-label="gender"
          name="gender1"
          value={value}
          onChange={handleChangeRadio}
          className="d-flex flex-row"
        >
          <FormControlLabel
            value="self"
            control={<Radio />}
            label="Self Pickup"
          />
          <FormControlLabel
            value="delivery"
            control={<Radio />}
            label="Owner Delivery"
          />
        </RadioGroup>
      </FormControl>
      <button className="generalActionBtn">Find Rentals</button>
    </div>
  );
}

export default FindRentalForm;
