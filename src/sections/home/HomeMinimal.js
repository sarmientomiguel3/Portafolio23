import { m } from 'framer-motion';
// @mui
import { alpha, styled } from '@mui/material/styles';
import { Box, Card, Container, Typography, Stack } from '@mui/material';
// components
import Image from '../../components/image';
import { MotionViewport, varFade } from '../../components/animate';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

// ----------------------------------------------------------------------
//



const Lenguajes = [
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    title: 'Javascript',
    puntaje: 90,
  },
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    title: 'Typescript',
    puntaje: 90,
  },
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg',
    title: 'Java',
    puntaje: 50,
  },
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
    title: 'Csharp',
    puntaje: 50,
  },
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
    title: 'PHP',
    puntaje: 80,
  },
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg',
    title: 'HTML',
    puntaje: 90,
  },
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg',
    title: 'Bash',
    puntaje: 80,
  },
];
const Frameworks = [
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg',
    title: 'ReactJS',
    puntaje: 80,
  },
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg',
    title: 'NextJS',
    puntaje: 80,
  },
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg',
    title: 'NodeJS',
    puntaje: 50,
  },
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original-wordmark.svg',
    title: 'VueJS',
    puntaje: 60,
  },
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain-wordmark.svg',
    title: 'Laravel',
    puntaje: 60,
  },
];
const DataBases = [
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg',
    title: 'Postgresql',
    puntaje: 80,
  },
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg',
    title: 'MySQL',
    puntaje: 80,
  },
];
const CSS = [
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
    title: 'Figma',
    puntaje: 50,

  },
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg',
    title: 'CSS',
    puntaje: 90,
  },
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg',
    title: 'TailwindCSS',
    puntaje: 90,
  },
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg',
    title: 'Bootstrap',
    puntaje: 80,
  },
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg',
    title: 'MaterialUI',
    puntaje: 50,
  },
];

const Contenedores = [
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original-wordmark.svg',
    title: 'Docker',
    puntaje: 50,
  },
];

const Otros = [
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg',
    title: 'GIT',
    puntaje: 80,
  },
    
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unix/unix-original.svg',
    title: 'Unix',
    puntaje: 80,
  },
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vim/vim-original.svg',
    title: 'Vim',
    puntaje: 60,
  },
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original-wordmark.svg',
    title: 'VSCode',
    puntaje: 70,
  },
];


const skills = [
  {
    tipo: Lenguajes,
  },
  {
    tipo: Frameworks,
  },
  {
    tipo: DataBases,
  },
  {
    tipo: CSS,
  },
  {
    tipo: Otros,
  },
];

const CARDS = [
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    title: 'Branding',
    description: 'Consistent design makes it easy to brand your own.',
  },
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    title: 'UI & UX Design',
    description:
      'The kit is built on the principles of the atomic design system. It helps you to create projects fastest and easily customized packages for your projects.',
  },
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg',
    title: 'Development',
    description: 'Easy to customize and extend, saving you time and money.',
  },
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
    title: 'Development',
    description: 'Easy to customize and extend, saving you time and money.',
  },
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
    title: 'Development',
    description: 'Easy to customize and extend, saving you time and money.',
  },
];

const StyledRoot = styled('div')(({ theme }) => ({
  padding: theme.spacing(10, 0),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(15, 0),
  },
}));

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  textAlign: 'center',
  padding: theme.spacing(0.1, 1),
  [theme.breakpoints.up('md')]: {
    boxShadow: 'none',
  },
}));

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
  },
}));

// ----------------------------------------------------------------------

export default function HomeMinimal() {
  return (
    <StyledRoot>
      <Container component={MotionViewport}>
        <Stack
          spacing={1}
          sx={{
            textAlign: 'center',
            mb: { xs: 5, md: 10 },
          }}
        >
          <m.div variants={varFade().inUp}>
            <Typography component="div" variant="h2" sx={{ color: 'text.disabled' }}>
              Skills
            </Typography>
          </m.div>

          <m.div variants={varFade().inDown}>
            <Typography variant="h2">
              Lenguajes de Programacion
            </Typography>
          </m.div>
        </Stack>

        <Box
          gap={{ xs: 3, lg: 6 }}
          display="grid"
          alignItems="center"
          gridTemplateColumns={{
            xs: 'repeat(1, 1fr)',
            md: 'repeat(1, 1fr)',
          }}
        >
          {Lenguajes.map((card, index) => (
            <m.div variants={varFade().inUp} key={card.title}>
              <StyledCard
                sx={{
                  ...( {
                    boxShadow: (theme) => ({
                      md: `40px 40px 80px ${
                        theme.palette.mode === 'light'
                          ? alpha(theme.palette.grey[500], 0.5)
                          : alpha(theme.palette.common.black, 0.4)
                      }`,
                    }),
                  }),
                }}
              >
                <div style={{display: 'flex', flexDirection:'row'}}>
                  <div style={{display: 'flex', flexDirection:'column', minWidth:'50%', maxWidth:'50%', alignItems:'center'}}>
                    <Image
                      src={card.icon}
                      alt={card.title}
                      sx={{ width: 80, height: 80 }}
                      alignItems="center"
                    />
                  </div>
                  <div style={{display: 'flex', flexDirection:'column', minWidth:'50%',maxWidth:'50%',height: '50px', alignContent:'center'}}>
                    <p style={{width: '100%', height: '50%'}}>{card.puntaje}%</p>
                    <div style={{width: '100%',height: '50%'}}>
                    <BorderLinearProgress variant="determinate" value={card.puntaje} style={{display: 'flex'}} />
                    </div>
                  </div>
                </div>

              </StyledCard>
            </m.div>
          ))}
        </Box>
      </Container>
      <Container component={MotionViewport} style={{marginTop: '100px'}}>
        <Stack
          spacing={3}
          sx={{
            textAlign: 'center',
            mb: { xs: 5, md: 10 },
          }}
        >
          <m.div variants={varFade().inDown}>
            <Typography variant="h2">
              UI/UX
            </Typography>
          </m.div>
        </Stack>

        <Box
          gap={{ xs: 3, lg: 10 }}
          display="grid"
          alignItems="center"
          gridTemplateColumns={{
            xs: 'repeat(1, 1fr)',
            md: 'repeat(1, 1fr)',
          }}
        >
          {CSS.map((card, index) => (
            <m.div variants={varFade().inUp} key={card.title}>
              <StyledCard
                sx={{
                  ...( {
                    boxShadow: (theme) => ({
                      md: `40px 40px 80px ${
                        theme.palette.mode === 'light'
                          ? alpha(theme.palette.grey[500], 0.5)
                          : alpha(theme.palette.common.black, 0.4)
                      }`,
                    }),
                  }),
                }}
              >
                <div style={{display: 'flex', flexDirection:'row'}}>
                  <div style={{display: 'flex', flexDirection:'column', minWidth:'50%', maxWidth:'50%', alignItems:'center'}}>
                    <Image
                      src={card.icon}
                      alt={card.title}
                      sx={{ width: 80, height: 80 }}
                      alignItems="center"
                    />
                  </div>
                  <div style={{display: 'flex', flexDirection:'column', minWidth:'50%',maxWidth:'50%',height: '50px', alignContent:'center'}}>
                    <p style={{width: '100%', height: '50%'}}>{card.puntaje}%</p>
                    <div style={{width: '100%',height: '50%'}}>
                    <BorderLinearProgress variant="determinate" value={card.puntaje} style={{display: 'flex'}} />
                    </div>
                  </div>
                </div>

              </StyledCard>
            </m.div>
          ))}
        </Box>
      </Container>
      <Container component={MotionViewport} style={{marginTop: '100px'}}>
        <Stack
          spacing={3}
          sx={{
            textAlign: 'center',
            mb: { xs: 5, md: 10 },
          }}
        >
          <m.div variants={varFade().inDown}>
            <Typography variant="h2">
              Frameworks & Librerias
            </Typography>
          </m.div>
        </Stack>

        <Box
          gap={{ xs: 3, lg: 10 }}
          display="grid"
          alignItems="center"
          gridTemplateColumns={{
            xs: 'repeat(1, 1fr)',
            md: 'repeat(1, 1fr)',
          }}
        >
          {Frameworks.map((card, index) => (
            <m.div variants={varFade().inUp} key={card.title}>
              <StyledCard
                sx={{
                  ...( {
                    boxShadow: (theme) => ({
                      md: `40px 40px 80px ${
                        theme.palette.mode === 'light'
                          ? alpha(theme.palette.grey[500], 0.5)
                          : alpha(theme.palette.common.black, 0.4)
                      }`,
                    }),
                  }),
                }}
              >
                <div style={{display: 'flex', flexDirection:'row'}}>
                  <div style={{display: 'flex', flexDirection:'column', minWidth:'50%', maxWidth:'50%', alignItems:'center'}}>
                    <Image
                      src={card.icon}
                      alt={card.title}
                      sx={{ width: 80, height: 80 }}
                      alignItems="center"
                    />
                  </div>
                  <div style={{display: 'flex', flexDirection:'column', minWidth:'50%',maxWidth:'50%',height: '50px', alignContent:'center'}}>
                    <p style={{width: '100%', height: '50%'}}>{card.puntaje}%</p>
                    <div style={{width: '100%',height: '50%'}}>
                    <BorderLinearProgress variant="determinate" value={card.puntaje} style={{display: 'flex'}} />
                    </div>
                  </div>
                </div>

              </StyledCard>
            </m.div>
          ))}
        </Box>
      </Container>
      <Container component={MotionViewport} style={{marginTop: '100px'}}>
        <Stack
          spacing={3}
          sx={{
            textAlign: 'center',
            mb: { xs: 5, md: 10 },
          }}
        >
          <m.div variants={varFade().inDown}>
            <Typography variant="h2">
              Base de Datos
            </Typography>
          </m.div>
        </Stack>

        <Box
          gap={{ xs: 3, lg: 10 }}
          display="grid"
          alignItems="center"
          gridTemplateColumns={{
            xs: 'repeat(1, 1fr)',
            md: 'repeat(1, 1fr)',
          }}
        >
          {DataBases.map((card, index) => (
            <m.div variants={varFade().inUp} key={card.title}>
              <StyledCard
                sx={{
                  ...( {
                    boxShadow: (theme) => ({
                      md: `40px 40px 80px ${
                        theme.palette.mode === 'light'
                          ? alpha(theme.palette.grey[500], 0.5)
                          : alpha(theme.palette.common.black, 0.4)
                      }`,
                    }),
                  }),
                }}
              >
                <div style={{display: 'flex', flexDirection:'row'}}>
                  <div style={{display: 'flex', flexDirection:'column', minWidth:'50%', maxWidth:'50%', alignItems:'center'}}>
                    <Image
                      src={card.icon}
                      alt={card.title}
                      sx={{ width: 80, height: 80 }}
                      alignItems="center"
                    />
                  </div>
                  <div style={{display: 'flex', flexDirection:'column', minWidth:'50%',maxWidth:'50%',height: '50px', alignContent:'center'}}>
                    <p style={{width: '100%', height: '50%'}}>{card.puntaje}%</p>
                    <div style={{width: '100%',height: '50%'}}>
                    <BorderLinearProgress variant="determinate" value={card.puntaje} style={{display: 'flex'}} />
                    </div>
                  </div>
                </div>

              </StyledCard>
            </m.div>
          ))}
        </Box>
      </Container>
      <Container component={MotionViewport} style={{marginTop: '100px'}}>
        <Stack
          spacing={1}
          sx={{
            textAlign: 'center',
            mb: { xs: 5, md: 10 },
          }}
        >
          <m.div variants={varFade().inDown}>
            <Typography variant="h2">
              Contenedores
            </Typography>
          </m.div>
        </Stack>

        <Box
          gap={{ xs: 3, lg: 10 }}
          display="grid"
          alignItems="center"
          gridTemplateColumns={{
            xs: 'repeat(1, 1fr)',
            md: 'repeat(1, 1fr)',
          }}
        >
          {Contenedores.map((card, index) => (
            <m.div variants={varFade().inUp} key={card.title}>
              <StyledCard
                sx={{
                  ...( {
                    boxShadow: (theme) => ({
                      md: `40px 40px 80px ${
                        theme.palette.mode === 'light'
                          ? alpha(theme.palette.grey[500], 0.5)
                          : alpha(theme.palette.common.black, 0.4)
                      }`,
                    }),
                  }),
                }}
              >
                <div style={{display: 'flex', flexDirection:'row'}}>
                  <div style={{display: 'flex', flexDirection:'column', minWidth:'50%', maxWidth:'50%', alignItems:'center'}}>
                    <Image
                      src={card.icon}
                      alt={card.title}
                      sx={{ width: 80, height: 80 }}
                      alignItems="center"
                    />
                  </div>
                  <div style={{display: 'flex', flexDirection:'column', minWidth:'50%',maxWidth:'50%',height: '50px', alignContent:'center'}}>
                    <p style={{width: '100%', height: '50%'}}>{card.puntaje}%</p>
                    <div style={{width: '100%',height: '50%'}}>
                    <BorderLinearProgress variant="determinate" value={card.puntaje} style={{display: 'flex'}} />
                    </div>
                  </div>
                </div>

              </StyledCard>
            </m.div>
          ))}
        </Box>
      </Container>
      <Container component={MotionViewport} style={{marginTop: '100px'}}>
        <Stack
          spacing={1}
          sx={{
            textAlign: 'center',
            mb: { xs: 5, md: 10 },
          }}
        >
          <m.div variants={varFade().inDown}>
            <Typography variant="h2">
              Herramientas de Desarrollo
            </Typography>
          </m.div>
        </Stack>

        <Box
          gap={{ xs: 3, lg: 10 }}
          display="grid"
          alignItems="center"
          gridTemplateColumns={{
            xs: 'repeat(1, 1fr)',
            md: 'repeat(1, 1fr)',
          }}
        >
          {Otros.map((card, index) => (
            <m.div variants={varFade().inUp} key={card.title}>
              <StyledCard
                sx={{
                  ...( {
                    boxShadow: (theme) => ({
                      md: `40px 40px 80px ${
                        theme.palette.mode === 'light'
                          ? alpha(theme.palette.grey[500], 0.5)
                          : alpha(theme.palette.common.black, 0.4)
                      }`,
                    }),
                  }),
                }}
              >
                <div style={{display: 'flex', flexDirection:'row'}}>
                  <div style={{display: 'flex', flexDirection:'column', minWidth:'50%', maxWidth:'50%', alignItems:'center'}}>
                    <Image
                      src={card.icon}
                      alt={card.title}
                      sx={{ width: 80, height: 80 }}
                      alignItems="center"
                    />
                  </div>
                  <div style={{display: 'flex', flexDirection:'column', minWidth:'50%',maxWidth:'50%',height: '50px', alignContent:'center'}}>
                    <p style={{width: '100%', height: '50%'}}>{card.puntaje}%</p>
                    <div style={{width: '100%',height: '50%'}}>
                    <BorderLinearProgress variant="determinate" value={card.puntaje} style={{display: 'flex'}} />
                    </div>
                  </div>
                </div>

              </StyledCard>
            </m.div>
          ))}
        </Box>
      </Container>
    </StyledRoot>
  );
}
