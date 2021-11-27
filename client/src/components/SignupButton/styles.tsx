import { createStyles, makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => createStyles({
    container: {
        display: "flex",
        flexWrap: "wrap"
    },
    margin0: {
        margin: 0,
        minWidth: 120
    }
}));

export default useStyles;
