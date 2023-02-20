import React from 'react';
import { m } from 'framer-motion';
// @mui
import { styled, alpha } from '@mui/material/styles';
import { Container, Typography, Stack, IconButton, Button, Modal, Box, ImageList, ImageListItem} from '@mui/material';
// components
import { useSettingsContext } from '../../components/settings';
import SvgColor from '../../components/svg-color';
import Image from '../../components/image';
import { MotionViewport, varFade } from '../../components/animate';
import Link from '@mui/material/Link';

// ----------------------------------------------------------------------
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1200,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

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

const itemData2 = [
  {
    img: require('../../images/fotos/unsa2.jpg'),
    title: 'Captura',
  },
  {
    img: require('../../images/fotos/unsa3.jpg'),
    title: 'Captura',
  },
  {
    img: require('../../images/fotos/unsa4.jpg'),
    title: 'Captura',
  },
];

const itemData = [
  {
    img: require('../../images/fotos/smartpaskam1.jpg'),
    title: 'Captura',
  },
  {
    img: require('../../images/fotos/smartpaskam2.jpg'),
    title: 'Captura',
  },
  {
    img: require('../../images/fotos/smartpaskam3.jpg'),
    title: 'Captura',
  },
  {
    img: require('../../images/fotos/smartpaskam4.jpg'),
    title: 'Captura',
  },
  {
    img: require('../../images/fotos/smartpaskam5.jpg'),
    title: 'Captura',
  },
  {
    img: require('../../images/fotos/smartpaskam6.jpg'),
    title: 'Captura',
  },
  {
    img: require('../../images/fotos/smartpaskam7.jpg'),
    title: 'Captura',
  },
  {
    img: require('../../images/fotos/smartpaskam8.jpg'),
    title: 'Captura',
  },
  {
    img: require('../../images/fotos/smartpaskam9.jpg'),
    title: 'Captura',
  },
  {
    img: require('../../images/fotos/smartpaskam10.jpg'),
    title: 'Captura',
  },
  {
    img: require('../../images/fotos/smartpaskam11.jpg'),
    title: 'Captura',
  },
  {
    img: require('../../images/fotos/smartpaskam12.jpg'),
    title: 'Captura',
  },
  {
    img: require('../../images/fotos/smartpaskam13.jpg'),
    title: 'Captura',
  },
  {
    img: require('../../images/fotos/smartpaskam14.jpg'),
    title: 'Captura',
  },
  {
    img: require('../../images/fotos/smartpaskam15.jpg'),
    title: 'Captura',
  },
  {
    img: require('../../images/fotos/smartpaskam16.jpg'),
    title: 'Captura',
  },
  {
    img: require('../../images/fotos/smartpaskam17.jpg'),
    title: 'Captura',
  },
  {
    img: require('../../images/fotos/smartpaskam18.jpg'),
    title: 'Captura',
  },
  {
    img: require('../../images/fotos/smartpaskam19.jpg'),
    title: 'Captura',
  },
  {
    img: require('../../images/fotos/smartpaskam20.jpg'),
    title: 'Captura',
  },
  {
    img: require('../../images/fotos/smartpaskam21.jpg'),
    title: 'Captura',
  },
  {
    img: require('../../images/fotos/smartpaskam22.jpg'),
    title: 'Captura',
  },
  {
    img: require('../../images/fotos/smartpaskam23.jpg'),
    title: 'Captura',
  },
  {
    img: require('../../images/fotos/smartpaskam24.jpg'),
    title: 'Captura',
  },
  {
    img: require('../../images/fotos/smartpaskam25.jpg'),
    title: 'Captura',
  },
  {
    img: require('../../images/fotos/smartpaskam26.jpg'),
    title: 'Captura',
  },
  {
    img: require('../../images/fotos/smartpaskam27.jpg'),
    title: 'Captura',
  },
  {
    img: require('../../images/fotos/smartpaskam28.jpg'),
    title: 'Captura',
  },
  {
    img: require('../../images/fotos/smartpaskam29.jpg'),
    title: 'Captura',
  },
  {
    img: require('../../images/fotos/smartpaskam210.jpg'),
    title: 'Captura',
  },
  {
    img: require('../../images/fotos/smartpaskam211.jpg'),
    title: 'Captura',
  },
  {
    img: require('../../images/fotos/smartpaskam212.jpg'),
    title: 'Captura',
  },
  {
    img: require('../../images/fotos/smartpaskam214.jpg'),
    title: 'Captura',
  },
  {
    img: require('../../images/fotos/smartpaskam215.jpg'),
    title: 'Captura',
  },
];

// ----------------------------------------------------------------------

export default function HomeDarkMode2() {
  const { themeMode, onToggleMode } = useSettingsContext();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [open2, setOpen2] = React.useState(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);
  return (
    <StyledRoot>
      <Container component={MotionViewport} style={{display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center'}}>

        <m.div variants={varFade().inUp} style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
          <Stack spacing={2} direction="row" alignItems="center" display="inline-flex">
            <Typography variant="h2" sx={{ my: 3, color: 'black' }}>
              Sistema<br />de Inventario
            </Typography>
          </Stack>
          <Typography sx={{ color: 'grey.500' }}>
            Desarrollo de un<br />sistema de inventario <br />para la facultad de Psicologia <br />de la <br />Universidad Nacional de San Agustin 
          </Typography>
          <div style={{display:'flex', flexDirection:'row'}}>
          <Link
            href='https://github.com/sarmientomiguel3/00002SystemBasicInventoryFrontend'
          >
            <IconButton color={themeMode === 'dark' ? 'warning' : 'default'} onClick={onToggleMode}>
              <SvgColor
                style={{height:'75px', width: '75px'}}
                src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg`}
              />
              ReactJs
            </IconButton>
          </Link>
          <Link
            href='https://github.com/sarmientomiguel3/00001SystemBasicInventoryBackend'
          >
            <IconButton color={themeMode === 'dark' ? 'warning' : 'default'} onClick={onToggleMode}>
              <SvgColor
                style={{height:'75px', width: '75px'}}
                src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg`}
              />
              NodeJS
            </IconButton>
          </Link>
          </div>
        </m.div>

        <m.div variants={varFade().inUp} style={{width: '50%', padding:('0px','0px','0px','50px')}}>
          <Image
            alt="darkmode"
            src={require("../../images/fotos/inventario.jpg")}
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
              Desarrollador<br /> Frontend en<br /> SmartPaskam
            </Typography>
          </Stack>
          <Typography sx={{ color: 'grey.500' }}>
            Desarrollador Frontend<br /> en ReactJs y NextJS
          </Typography>
          <Button onClick={handleOpen}> Ver Capturas</Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <ImageList sx={{ width: 1100, height: 450 }} cols={3} rowHeight={164}>
                {itemData.map((item) => (
                  <ImageListItem key={item.img}>
                    <img
                      src={`${item.img}`}
                      alt={item.title}
                      loading="lazy"
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            </Box>
          </Modal>
        </m.div>

        <m.div variants={varFade().inUp} style={{width: '50%', padding:('0px','0px','0px','50px')}}>
          <Image
            alt="darkmode"
            src="https://relengcorp.com/wp-content/uploads/2022/04/Logo-1x1-1-300x294.png"
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
              Desarrollador<br/>FullStack<br/>Proyecto RRHH
            </Typography>
          </Stack>
          <Typography sx={{ color: 'grey.500' }}>
            Desarrollo FullStack<br/> en VueJS y Laravel
          </Typography>

          <Button onClick={handleOpen2}> Ver Capturas</Button>
          <Modal
            open={open2}
            onClose={handleClose2}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <ImageList sx={{ width: 1100, height: 450 }} cols={3} rowHeight={164}>
                {itemData2.map((item) => (
                  <ImageListItem key={item.img}>
                    <img
                      src={`${item.img}`}
                      alt={item.title}
                      loading="lazy"
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            </Box>
          </Modal>
        </m.div>

        <m.div variants={varFade().inUp} style={{width: '50%', padding:('0px','0px','0px','50px')}}>
          <Image
            alt="darkmode"
            src={require("../../images/fotos/recursos.jpg")}
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
