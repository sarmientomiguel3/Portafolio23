import { m } from 'framer-motion';
// @mui
import { styled, alpha } from '@mui/material/styles';
import { Box, Container, Typography, Stack } from '@mui/material';
// components
import Image from '../../components/image';
import { MotionViewport, varFade } from '../../components/animate';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  padding: theme.spacing(10, 0),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(15, 0),
  },
}));

// ----------------------------------------------------------------------

export default function HomeCleanInterfaces() {
  return (
    <StyledRoot>
      <Container component={MotionViewport}>
        <Description />
        <Content />
      </Container>
    </StyledRoot>
  );
}

// ----------------------------------------------------------------------

function Description() {
  return (
    <Stack
      spacing={3}
      sx={{
        maxWidth: 520,
        zIndex: { md: 99 },
        position: { md: 'relative' },
        textAlign: { xs: 'center', md: 'left' },
      }}
    >
      <m.div variants={varFade().inUp} style={{display: 'flex', flexDirection: 'row'}}>
        <Typography
          variant="h2"
          sx={{
            padding: '30px',
            color: 'black',
            textShadow: (theme) =>
              theme.palette.mode === 'light'
                ? 'unset'
                : `4px 4px 16px ${alpha(theme.palette.grey[800], 0.48)}`,
          }}
        >
          Aficiones Tecnologicas
        </Typography>
        <Typography
          sx={{
            minWidth: '100%',
            padding: '30px',
            color: 'black',
            textShadow: (theme) =>
              theme.palette.mode === 'light'
                ? 'unset'
                : `4px 4px 16px ${alpha(theme.palette.grey[800], 0.48)}`,
          }}
        >
          Aficionado de Archlinux y Linux, con gusto en temas de Tecnologia referentes al mismo.
        </Typography>
      </m.div>
    </Stack>
  );
}

// ----------------------------------------------------------------------

function Content() {
  return (
    <Box sx={{ position: 'relative' }}>
      {[...Array(1)].map((_, index) => (
        <Box
          key={index}
          component={m.div}
          variants={varFade().inUp}
          sx={{
            top: 0,
            left: 0,
            position: 'relative',
            ...(index === 0 && { zIndex: 8 }),
            ...(index === 9 && { position: 'relative', zIndex: 9 }),
          }}
        >
          <Image
            disabledEffect
            alt={`clean-${index + 1}`}
            src={`https://cdn.jsdelivr.net/gh/liuyaanng/Blog_source@master/blog_images/Arch-Linux/main.png`}
          />
        </Box>
      ))}
    </Box>
  );
}
