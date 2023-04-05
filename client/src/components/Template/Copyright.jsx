import React from "react";
import { Typography, Link } from "@material-ui/core/";

const Copyright = () => {
  return (
    <div>
      <Typography variant="body2" color="textSecondary" align="center">
        {"Copyright © "}
        <Link color="inherit" href="https://github.com/Louvivien">
          Louvivien
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
      <br />
      <Typography variant="body2" color="textSecondary" align="center">
        
      </Typography>
      <Typography variant="body2" color="textSecondary" align="center">
        
      </Typography>
    </div>
  );
};

export default Copyright;
