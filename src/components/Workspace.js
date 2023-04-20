import React from "react";
import Grid from "@mui/material/Grid";
import { Box, Card } from "@mui/material";
import DragInputs from "./DragInputs";
import DropInputs from "./DropInputs";
import JsonStructure from "./JsonStructure";

const Workspace = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1, margin: "40px 0" }}>
        <Grid container spacing={2}>
          <Grid item xs={1.5}></Grid>
          <Grid item xs={3}>
            <DragInputs />
          </Grid>
          <Grid item xs={3}>
            <DropInputs />
          </Grid>
          <Grid item xs={3}>
            <JsonStructure />
          </Grid>
          <Grid item xs={1.5}></Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Workspace;
