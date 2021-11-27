import { createStyles, makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    position: 'relative',
    bottom: 0,
    // width: '100vw',
    background: '#007753',
    padding: '2rem 2rem'
  },
  style: {
    color: "white",
    fontSize: '1.5rem'
  },
  icons: {
    display: 'flex',
    justifyContent: "flex-end",
    alignItems: "center"
  },
  icon: {
    padding: '0.2rem',
    fontSize: '2rem'
  }
}));

export default useStyles;
