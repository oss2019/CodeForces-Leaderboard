import { createStyles, makeStyles, Theme } from "@material-ui/core";

const useStyles = (isTabletorMobile: boolean) => makeStyles((theme: Theme) => createStyles({
  homeSVGRoot: {
    width: isTabletorMobile?'30%':'50%',
    marginLeft: isTabletorMobile?'35%':'25%'
  }
}));

export default useStyles;
