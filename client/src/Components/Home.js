import React from "react";
import { Link } from "react-router-dom";

// Assets
import BlockchainCredentialsImage from "../Images/blockchain_credentials.gif";

// External Components
import {
  Paper,
  Grid,
  Box,
  Button,
  useMediaQuery,
  Typography,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "calc(100vh - 64px)",
   
    backgroundColor:"white",

    overflow: "hidden",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "right",
    color: theme.palette.text.secondary,
  },
  leftPanel: {
    paddingLeft: "10vw",
    paddingRight: "10vw",
    color: "black",
  },
}));

function Home() {
  const classes = useStyles();
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <>
      <Grid container className={classes.root}>
        <Grid item xs={12} md={6}>
          <Box
            style={{ height: "100%" }}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            className={classes.leftPanel}
          >
          
            <Box m={0.5} />
            <Box style={{ fontSize: "60px", fontWeight: "900" }}>Vecer</Box>
            <Box m={1.5} />
            <Typography variant="body2">
              A Platform to Verify Certificates using Blockchain Technology.{" "}
            </Typography>
            <Box m={1.5} />
            <Typography variant="h6">What are you looking for</Typography>
            <Box m={1.5} />
            <Box display="flex">
              <Button
                variant="contained"
                color="black"
                size="large"
                style={{ marginRight: "30px", fontWeight: "600" }}
                component={Link}
                to="/institute"
              >
                Issue Certificates
              </Button>
              <Button
                variant="contained"
                color="default"
                size="large"
                style={{ backgroundColor: "white", fontWeight: "600" }}
                component={Link}
                to="/view"
              >
                View Certificates
              </Button>
            </Box>
          </Box>
        </Grid>
        {md && (
          <Grid item xs={12} md={6}>
            <Box style={{ height: "100%" }} display="flex" alignItems=" center">
              <img src={BlockchainCredentialsImage} style={{ height: "100%",width:"100%" }} />
            </Box>
          </Grid>
        )}
      </Grid>
    </>
  );
}
export default Home;
