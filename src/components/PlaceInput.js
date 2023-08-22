import React, { useState } from "react";
import { TextField, Autocomplete } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const placeOptions = [
  { label: "Eiffel Tower, Paris, France" },
  { label: "Titlis, Swiss" },
  { label: "Black Forest, Germany" }
];

const PlaceInput = () => {
  const [selectedPlace, setSelectedPlace] = useState(null);

  return (
    <Autocomplete
      options={placeOptions}
      getOptionLabel={(option) => option.label}
      value={selectedPlace}
      onChange={(event, newValue) => {
        setSelectedPlace(newValue);
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Places to Visit"
          InputProps={{
            ...params.InputProps,
            startAdornment: <LocationOnIcon />
          }}
          fullWidth
        />
      )}
    />
  );
};

export default PlaceInput;
