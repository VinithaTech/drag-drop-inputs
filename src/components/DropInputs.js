import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { dataAction } from "../store/Data";
import style from "./Workspace.module.css";

const DropInputs = () => {
  const json = useSelector((state) => state.dataStore.json);
  const dispatch = useDispatch();

  const onDropHandler = (e) => {
    debugger;
    e.preventDefault();
    const data = e.dataTransfer.getData("Current");
    if (data !== undefined) {
      let tempJson = [...json];

      if (data === "input") {
        let obj = {
          name: "input",
        };
        tempJson.push(obj);

        dispatch(dataAction.addNewElement(tempJson));
      } else if (data === "button") {
        let obj = {
          name: "button",
        };
        tempJson.push(obj);

        dispatch(dataAction.addNewElement(tempJson));
      } else if (data === "divider") {
        let obj = {
          name: "divider",
        };
        tempJson.push(obj);

        dispatch(dataAction.addNewElement(tempJson));
      } else if (data === "dropdown") {
        let obj = {
          name: "dropdown",
        };
        tempJson.push(obj);

        dispatch(dataAction.addNewElement(tempJson));
      }
    }
  };

  const onDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };
  return (
    <>
      <Card sx={{ minWidth: 275 }}>
        <CardHeader title="Drop"></CardHeader>
        <CardContent
          sx={{ minHeight: 400 }}
          onDrop={onDropHandler}
          onDragOver={onDragOver}
        >
          {json.map((element, index) => {
            return (
              <>
                {/* ---------Input-------------  */}
                {element.name === "input" && (
                  <div className={style.elemDiv}>
                    <TextField
                      label="Text"
                      id="outlined-size-small"
                      defaultValue="Good Day!"
                      size="small"
                    />
                  </div>
                )}
                {/* ---------Input-------------  */}
                {element.name === "button" && (
                  <div className={style.elemDiv}>
                    <Button variant="contained">Click Me</Button>
                  </div>
                )}
                {/* ---------Input-------------  */}
                {element.name === "divider" && (
                  <div className={style.elemDiv}>
                    <Divider />
                  </div>
                )}
                {/* ---------Input-------------  */}
                {element.name === "dropdown" && (
                  <div className={style.elemDiv}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">Age</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        // value={age}
                        label="Age"
                        // onChange={handleChange}
                      >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                )}
              </>
            );
          })}
        </CardContent>
      </Card>
    </>
  );
};

export default DropInputs;
