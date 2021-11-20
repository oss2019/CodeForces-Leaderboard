import React, { useRef } from 'react';
import lottie from 'lottie-web';
import { useMediaQuery } from '@material-ui/core';

import useStyles from './styles';

const LoadingSVG = () => {

  const container = useRef<any>(null);

  React.useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../../assets/LoadingSVG.json')
    });
  }, []);

  const isTabletorMobile = useMediaQuery('(min-width:400px)');

  const classes = useStyles(isTabletorMobile)();

  return <div className={classes.homeSVGRoot} ref={container} />
}

export default LoadingSVG;
