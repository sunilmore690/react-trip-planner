import React, { useState } from 'react';
import { TextField, Autocomplete } from '@mui/core';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { GoogleApiWrapper } from 'google-maps-react';

const PlaceInput = ({ google }) => {
  const [placeOptions, setPlaceOptions] = useState([]);

  const handlePlaceInputChange = (inputValue) => {
    if (!inputValue) {
      setPlaceOptions([]);
      return;
    }

    const service = new google.maps.places.AutocompleteService();

    service.getPlacePredictions({ input: inputValue }, (predictions) => {
      setPlaceOptions(predictions);
    });
  };

  return (
    <Autocomplete
      options={placeOptions}
      getOptionLabel={(option) => option.description}
      onInputChange={(event, newValue) => {
        handlePlaceInputChange(newValue);
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Places to Visit"
          InputProps={{
            ...params.InputProps,
            startAdornment: <LocationOnIcon />,
          }}
          fullWidth
        />
      )}
    />
  );
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyANDmmmX8HMPVeJQ8pDYO26PGu8flVPzSA',
})(PlaceInput);
