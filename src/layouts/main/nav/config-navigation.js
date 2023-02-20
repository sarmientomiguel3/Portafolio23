// routes
import { PATH_AUTH, PATH_DOCS, PATH_PAGE } from '../../../routes/paths';
// config
import { PATH_AFTER_LOGIN } from '../../../config-global';
// components
import Iconify from '../../../components/iconify';

// ----------------------------------------------------------------------

const navConfig = [
  {
    title: 'Curriculum Vitae',
    icon: <Iconify icon="eva:home-fill" />,
    path: '/',
  },
  //{
    //title: 'Presentacion',
    //icon: <Iconify icon="ic:round-grain" />,
    //path: PATH_PAGE.components,
  //},
  //{
    //title: 'Proyectos',
    //icon: <Iconify icon="eva:book-open-fill" />,
    //path: PATH_DOCS.root,
  //},
];

export default navConfig;
