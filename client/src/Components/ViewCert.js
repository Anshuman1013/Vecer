import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";

// External Components
import {
  Typography,
  Paper,
  Box,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  Fade,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import OpenInNewOutlinedIcon from "@material-ui/icons/OpenInNewOutlined";






const useStyles = makeStyles((theme) => ({
  
  root: {
    padding: "30px",
    minHeight: "91.5vh",
    lineHeight: "1.5",
    backgroundColor:"black",
    
  },
  paper: {
    
    [theme.breakpoints.up("sm")]: {
      borderRadius: "5%",
      marginRight: 30,
      
      
      
    },
    [theme.breakpoints.up(1150)]: {
      marginLeft: 50,
      width: 500,
      
    },
    height: "100%",
    
    marginTop: theme.spacing.unit * 6,
    marginBottom: "40px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`,
      
  },
}));

function ViewCert() {
  const [certId, setCertId] = useState("");
  const classes = useStyles();
  return (
    <>
      
      <Typography
        variant="h4"
        color="black"
        align="center"
        backgroundColor="Black"
        style={{ marginTop: "30px" }}
        
      >
        Welcome
      </Typography>
      <Typography
        variant="subtitle2"
        color="black"
        align="center"
        style={{ marginTop: "30px" }}
        
      >
        Enter Certificate Id to View it.
      </Typography>
      <Grid
        container
        style={{
          height: "100%",
          justifyContent: "center",
          alignItems: " center",
        }}
        direction="column"
        align
      >
        <Paper className={classes.paper} style={{ borderRadius: "10px" }}>
          <Card
            style={{
              border: "1px solid black",
              minWidth: "250px",
              minHeight: "70px",
            }}
          >
            <CardContent style={{ textAlign: "center" }}>
              <Typography variant="h5" color="black">
                View Certificate
              </Typography>
            </CardContent>
          </Card>
          <Box m={4} />
          <TextField
            id="outlined-basic"
            label="Certificate ID"
            variant="outlined"
            onChange={(e) => {
              setCertId(e.target.value);
            }}
            style={{ width: "400px" }}
          />
          <Box m={2} />
          {certId && (
            <>
              <Fade in={certId ? true : false} timeout={700}>
                <Box display="flex">
                  <Button
                    variant="outlined"
                    color="black"
                    className={classes.button}
                    //   endIcon={<FileCopyOutlinedIcon />}
                    onClick={() => {
                      navigator.clipboard.writeText(
                        `${window.location.href.slice(
                          0,
                          -window.location.pathname.length
                        )}/certificate/${certId}`
                      );
                    }}
                    style={{ marginRight: "10px" }}
                  >
                    Copy link
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    
                    endIcon={<OpenInNewOutlinedIcon />}
                    onClick={() => {
                      window.open(
                        `${window.location.href.slice(
                          0,
                          -window.location.pathname.length
                        )}/certificate/${certId}`
                      );
                    }}
                  >
                    Open link
                  </Button>
                </Box>
              </Fade>
            </>
          )}
          
        </Paper>
        <Box>
          <Typography variant="subtitle1" style={{ fontWeight: "900" }}>
            {" "}
            Some Demo Certificates
          </Typography>
          <Typography style={{ textAlign: "center" }}>
            8ceea5bf-7c61-48a5-aeb2-94628f64d531
          </Typography>
          <Typography style={{ textAlign: "center" }}>
            f9f0c48f-6881-4190-a8c4-5b4767fe53f7
          </Typography>
        </Box>
      </Grid>

    </>
  );
}

export default ViewCert;
