import { m } from 'framer-motion';
// @mui
import { styled, alpha } from '@mui/material/styles';
import { Container, Typography, Stack, IconButton } from '@mui/material';
// components
import { useSettingsContext } from '../../components/settings';
import SvgColor from '../../components/svg-color';
import Image from '../../components/image';
import { MotionViewport, varFade } from '../../components/animate';
import Link from '@mui/material/Link';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(10, 0),
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center center',
  backgroundImage: `url('/assets/background/overlay_4.jpg')`,
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(20, 0),
  },
}));

// ----------------------------------------------------------------------

export default function HomeDarkMode() {
  const { themeMode, onToggleMode } = useSettingsContext();

  return (
    <StyledRoot>
      <Container component={MotionViewport} style={{display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center'}}>

        <m.div variants={varFade().inUp} style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
          <Stack spacing={2} direction="row" alignItems="center" display="inline-flex">
            <Typography variant="h2" sx={{ my: 3, color: 'black' }}>
              Emision de<br />Letras de Cambio
            </Typography>
          </Stack>
          <Typography sx={{ color: 'grey.500' }}>
            Desarrollo de una aplicacion de escritorio de  <br/>Emision de Letras de Cambio <br />Desarrollado en Java con JFrame<br /> y con el uso de MySQL como base de datos, 
          </Typography>
          <Link
            href='https://github.com/sarmientomiguel3/LetrasDeCambioUnsa'
          >
            <IconButton 
              color={themeMode === 'dark' ? 'warning' : 'default'} 
              onClick={onToggleMode}
            >
              <SvgColor
                style={{height:'75px', width: '75px'}}
                src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg`}
              />
            </IconButton>
          </Link>
        </m.div>

        <m.div variants={varFade().inUp} style={{width: '50%', padding:('0px','0px','0px','50px')}}>
          <Image
            alt="darkmode"
            src="https://2.bp.blogspot.com/-w21XOQLsHhs/Tohrd3RPIiI/AAAAAAAAAB0/oERGSKm5XGs/s1600/Letra+de+cambio.jpg"
            sx={{
              borderRadius: 2,
              my: { xs: 5, md: 10 },
              boxShadow: (theme) => `-40px 40px 80px ${alpha(theme.palette.common.black, 0.24)}`,
            }}
          />
        </m.div>
      </Container>
      <Container component={MotionViewport} style={{display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center'}}>

        <m.div variants={varFade().inUp} style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
          <Stack spacing={2} direction="row" alignItems="center" display="inline-flex">
            <Typography variant="h2" sx={{ my: 3, color: 'black' }}>
              Banco de Preguntas<br /> de la UNSA
            </Typography>
          </Stack>
          <Typography sx={{ color: 'grey.500' }}>
            Desarrollo del lado de backend en php<br/> de la aplicacion del<br/>  Banco de Preguntas de la <br/> Universidad Nacional de San Agustion <br /> 
          </Typography>
          <Link
            href='https://github.com/sarmientomiguel3/banco-preguntas'
          >
            <IconButton color={themeMode === 'dark' ? 'warning' : 'default'} onClick={onToggleMode}>
              <SvgColor
                style={{height:'75px', width: '75px'}}
                src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg`}
              />
            </IconButton>
          </Link>
        </m.div>

        <m.div variants={varFade().inUp} style={{width: '50%', padding:('0px','0px','0px','50px')}}>
          <Image
            alt="darkmode"
            src="https://static.educacionadventista.com/escolas/sites/bo/b/ueat/contents/f4fe675738330960991926571e06db2e_6cba03.jpg"
            sx={{
              borderRadius: 2,
              my: { xs: 5, md: 10 },
              boxShadow: (theme) => `-40px 40px 80px ${alpha(theme.palette.common.black, 0.24)}`,
            }}
          />
        </m.div>
      </Container>
      <Container component={MotionViewport} style={{display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center'}}>

        <m.div variants={varFade().inUp} style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
          <Stack spacing={2} direction="row" alignItems="center" display="inline-flex">
            <Typography variant="h2" sx={{ my: 3, color: 'black' }}>
              Proyecto de<br/>Investigacion Astro
            </Typography>
          </Stack>
          <Typography sx={{ color: 'grey.500' }}>
            Desarrollo de una<br/> aplicacion Movil en unity <br/> para la educacion en temas de <br/>Astronomia usando VR. 
          </Typography>
          <Link
            href='https://drive.google.com/file/d/1YaMXYW3bDueVuR5A6pgGHZWho9RShEGU/view?usp=sharing'
          >
            <img src="https://icons.iconarchive.com/icons/icons8/windows-8/512/Very-Basic-Document-icon.png" alt="icono" height={50} style={{marginInline:'auto'}}/>
          </Link>
        </m.div>

        <m.div variants={varFade().inUp} style={{width: '50%', padding:('0px','0px','0px','50px')}}>
          <Image
            alt="darkmode"
            src={require("../../images/fotos/astro.jpg")}
            sx={{
              borderRadius: 2,
              my: { xs: 5, md: 10 },
              boxShadow: (theme) => `-40px 40px 80px ${alpha(theme.palette.common.black, 0.24)}`,
            }}
          />
        </m.div>
      </Container>
    </StyledRoot>
  );
}
