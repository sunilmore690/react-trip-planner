import React from "react";
import { Container, Grid } from "@mui/material";
import PlaceInput from "./PlaceInput";
import DatePicker from "./DatePicker";
import SubmitButton from "./SubmitButton";
import LocationSearchBar from "./LocationSearchBar";

function TripPlanner() {
  return (
    <Container maxWidth="sm">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <LocationSearchBar />
        </Grid>
        <Grid item xs={12}>
          <DatePicker />
        </Grid>
        <Grid item xs={12}>
          <SubmitButton />
        </Grid>
      </Grid>
    </Container>
  );
}

export default TripPlanner;
