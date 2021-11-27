import { createStyles, makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => createStyles({
    container: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '80vh',
        padding: '2rem 0'
    },
    contents: {
        maxWidth: '1200px',
        width: '80%',
        minHeight: '80%'
    },
    table: {
      minWidth: 650,
    },
    paper: {
      padding: theme.spacing(3),
      height: 'auto'
    }
}));

export default useStyles;
