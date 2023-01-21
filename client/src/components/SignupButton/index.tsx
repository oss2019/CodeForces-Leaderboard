import React, { useState, useEffect } from "react";
import { GoogleLogin } from "react-google-login";
import {
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  MenuItem,
  Snackbar,
  TextField,
  Grid,
  DialogActions,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";

import clientData from "../../assets/resources.json";
import { signup as SignUp } from "../../api/Leaderboard";
import { codeforcesUrl } from "../../api/Shared";
import useStyles from "./styles";
import axios from "axios";

const SignupButton = () => {
  const classes = useStyles();

  const [signup, setSignup] = useState(0);
  const [showDialog, setShowDialog] = useState(false);
  const [showSnack, setShowSnack] = useState(false);
  const [branch, setBranch] = useState("");
  const [handle, setHandle] = useState("");
  const [profile, setProfile] = useState<any>({});
  const [snackText, setSnackText] = useState("");

  const handleChange = (event: any) => {
    setBranch(event.target.value);
  };

  useEffect(() => {
    if (signup > 0) {
      setShowDialog(true);
    }

    if (signup < 0) {
      if (signup === -1) {
        setSnackText("Invalid Email ID. Please use IIT Dharwad id to signup.");
      } else {
        setSnackText(
          "Invalid Codeforces username. Please enter a valid username to signup."
        );
      }
      setShowSnack(true);
    }
  }, [signup]);

  const googleSuccess = (data: any) => {
    const baseData = data?.profileObj;
    console.log(baseData);
    setProfile(baseData);
    if (baseData.email.split("@")[1] === "iitdh.ac.in") {
      setSignup(1);
    } else {
      setSignup(-1);
    }
  };

  const googleFailure = (e: any) => {
    console.log(e);
  };

  const handleClose = () => {
    if (signup > 0) {
      setShowDialog(false);
    }

    if (signup < 0) {
      setShowSnack(false);
    }

    setSignup(0);
  };

  const getRoll = () => {
    return parseInt(profile?.email.split("@")[0], 10);
  };

  const handleSignup = async () => {
    try {
      const result = await axios
        .get(`${codeforcesUrl}${handle};`)
        .then((res) => res.data);
      const data = await result;
      console.log(data);
      if (data?.status !== "OK") {
        setShowDialog(false);
        setSignup(-2);
        return;
      }
    } catch (error) {
      console.log(error);
      setShowDialog(false);
      setSignup(-2);
      return;
    }

    const res = {
        user: {
            handle: handle,
            rollNum: getRoll(),
            year: 2000+(getRoll()/10000000),
            branch: branch
        }
    }
    await SignUp(res);
    handleClose();
    window.location.reload();
  };

  return (
    <>
      <GoogleLogin
        clientId={clientData.web.client_id}
        render={(renderProps) => (
          <Button
            variant="contained"
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
          >
            signup
          </Button>
        )}
        onSuccess={googleSuccess}
        onFailure={googleFailure}
        cookiePolicy="single_host_origin"
      />
      <Dialog open={showDialog} onClose={handleClose}>
        <DialogTitle>Signup</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please input the following details to proceed with the Signup
          </DialogContentText>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                autoFocus
                margin="none"
                id="handle"
                label="Codeforces Username"
                type="text"
                fullWidth
                value={handle}
                onChange={(e) => setHandle(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} md={6} className={classes.container}>
              <TextField
                select
                margin="none"
                id="branch"
                label="Branch of Study"
                type="text"
                fullWidth
                value={branch}
                onChange={handleChange}
              >
                <MenuItem value={"CSE"}>CSE</MenuItem>
                <MenuItem value={"EE"}>EE</MenuItem>
                <MenuItem value={"ME"}>ME</MenuItem>
                <MenuItem value={"EP"}>EP</MenuItem>
              </TextField>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button variant="contained" onClick={handleSignup}>
            Signup
          </Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        open={showSnack}
        onClose={handleClose}
        autoHideDuration={3000}
      >
        <Alert severity="error">{snackText}</Alert>
      </Snackbar>
    </>
  );
};

export default SignupButton;
