import { Card, CardContent, CardHeader, Grid } from "@mui/material";
import React, { useContext } from "react";

const DragInputs = () => {
  const onDragHandler = (e, field) => {
    e.dataTransfer.setData("Current", field);
  };

  const onDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const fields = ["input", "button", "divider", "dropdown"];

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardHeader title="Drag"></CardHeader>
      <CardContent sx={{ minHeight: 400 }}>
        <Grid container spacing={2}>
          {fields.map((field, index) => {
            return (
              <Grid item xs={6}>
                <Card
                  onDragStart={(e) => onDragHandler(e, field)}
                  onDragOver={onDragOver}
                  draggable="true"
                >
                  <CardContent
                    style={{ textTransform: "capitalize", cursor: "grab" }}
                  >
                    {field}
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default DragInputs;
