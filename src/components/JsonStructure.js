import { Card, CardContent, CardHeader, TextField } from "@mui/material";
import React, { useContext } from "react";
import { useSelector } from "react-redux";
import style from "./Workspace.module.css";

const JsonStructure = () => {
  const json = useSelector((state) => state.dataStore.json);
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardHeader title="Json"></CardHeader>
      <CardContent sx={{ minHeight: 400 }}>
        {json.map((element, index) => {
          return (
            <div className={style.structure}>
              <p className={style.leftAlign}> {"{"} </p>
              <p className={style.objStyle}> name: {element.name}</p>
              <p className={style.leftAlign}>{"}"}</p>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
};

export default JsonStructure;
