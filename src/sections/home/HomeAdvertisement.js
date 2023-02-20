import { m } from 'framer-motion';
// @mui
import { useTheme } from '@mui/material/styles';
import { Button, Box, Container, Stack } from '@mui/material';
// utils
import { bgGradient } from '../../utils/cssStyles';
// routes
import { PATH_FREE_VERSION, PATH_MINIMAL_ON_STORE } from '../../routes/paths';
// components
import Iconify from '../../components/iconify';
import Image from '../../components/image';
import { MotionViewport, varFade } from '../../components/animate';

// ----------------------------------------------------------------------

export default function HomeAdvertisement() {
  const theme = useTheme();

  return (
    <Container component={MotionViewport} style={{marginTop: '100px'}}>
      <Stack
        alignItems="center"
        direction={{ xs: 'column', md: 'row' }}
        sx={{
          ...bgGradient({
            direction: '135deg',
            startColor: theme.palette.secondary.main,
            endColor: theme.palette.secondary.dark,
          }),
          borderRadius: 2,
          pb: { xs: 5, md: 0 },
        }}
      >
        <Content />
        <Description />
      </Stack>
    </Container>
  );
}

// ----------------------------------------------------------------------

function Description() {
  return (
    <Box
      sx={{
        textAlign: {
          xs: 'center',
          md: 'left',
        },
      }}
    >
      <Box
        component={m.div}
        variants={varFade().inDown}
        sx={{ color: 'common.white', mb: 5, typography: 'h5', textAlign: 'center' }}
      >

        Full-Stack Developer en Javascript y Typescript, <br/>
        con el uso de Frameworks y Librerías como <br/>
        React.js, Next.js y Node.js. UI/UX Designer <br/>
        con librerías y herramientas como Figma, TailwindCSS. <br/>
        Conocimiento de otros lenguajes como JAVA, PHP. SQL.<br/>
        Unity Developer en aplicaciones VR y <br/>
        aplicaciones WebGL utilizando C#.<br/>
        Amante de la Tecnologia y con un razonamiento<br/>
        critico a la hora de tomar una decision
      </Box>

    </Box>
  );
}

// ----------------------------------------------------------------------

function Content() {
  return (
    <Stack component={m.div} variants={varFade().inUp} alignItems="center">
      <m.div
        animate={{
          y: [-20, 0, -20],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <Image
          visibleByDefault
          disabledEffect
          alt="rocket"
          src="https://cdn.freebiesupply.com/logos/large/2x/linux-tux-1-logo-png-transparent.png"
          sx={{ maxWidth: 460 }}
        />
      </m.div>
    </Stack>
  );
}
