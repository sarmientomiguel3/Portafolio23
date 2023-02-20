import { Helmet } from 'react-helmet-async';
import { m, useScroll, useSpring } from 'framer-motion';
// @mui
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';
// sections
import {
  HomeHero,
  HomeMinimal,
  HomeDarkMode,
  HomeDarkMode2,
  HomeLookingFor,
  HomeForDesigner,
  HomeForDesigner2,
  HomeColorPresets,
  HomePricingPlans,
  HomeAdvertisement,
  HomeCleanInterfaces,
  HomeCleanInterfaces2,
  HomeHugePackElements,
} from '../sections/home';

// ----------------------------------------------------------------------

export default function HomePage() {
  const theme = useTheme();

  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const progress = (
    <m.div
      style={{
        top: 0,
        left: 0,
        right: 0,
        height: 3,
        zIndex: 1999,
        position: 'fixed',
        transformOrigin: '0%',
        backgroundColor: theme.palette.primary.main,
        scaleX,
      }}
    />
  );

  return (
    <>
      <Helmet>
        <title> Miguel Sarmiento - FullStack</title>
      </Helmet>

      {progress}

      <HomeHero />

      <Box
        sx={{
          overflow: 'hidden',
          position: 'relative',
          bgcolor: 'background.default',
        }}
      >

        <HomeAdvertisement />

        <HomeMinimal />

        <HomeForDesigner />

        <HomeDarkMode />

        <HomeForDesigner2 />

        <HomeDarkMode2 />

        <HomeCleanInterfaces />

        <HomeCleanInterfaces2 />



      </Box>
    </>
  );
}
