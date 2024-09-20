import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { alpha, useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const Topbar = ({ onSidebarOpen, colorInvert = false }) => {
  const theme = useTheme();
  const { mode } = theme.palette;

  const linkColor = colorInvert ? 'common.white' : 'text.primary';
  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      width={1}
    >
      <Box
        display={'flex'}
        component="a"
        href="/"
        title="The Tech Packs"
        width={{ xs: 100, md: 120 }}
      >
        <Box
          component={'img'}
          src={
            mode === 'light' && !colorInvert
              ? 'https://assets.maccarianagency.com/the-front/logos/logo.svg'
              : 'https://assets.maccarianagency.com/the-front/logos/logo-negative.svg'
          }
          height={1}
          width={1}
        />
      </Box>
      <Box sx={{ display: { xs: 'none', md: 'flex' } }} alignItems={'center'}>
        <Box>
          <Link to={'/'} style={{ textDecoration: 'none' }}>
            <Typography
              color={linkColor}
              fontWeight={window.location.pathname == '/' ? 700 : 400}
            >
              {'Home'}
            </Typography>
          </Link>
        </Box>
        <Box marginLeft={4}>
          <Link to={'/about'} style={{ textDecoration: 'none' }}>
            <Typography
              color={linkColor}
              fontWeight={window.location.pathname == '/about' ? 700 : 400}
            >
              {'About Us'}
            </Typography>
          </Link>
        </Box>
        <Box marginLeft={4}>
          <Link to={'/pricing'} style={{ textDecoration: 'none' }}>
            <Typography
              color={linkColor}
              fontWeight={window.location.pathname == '/pricing' ? 700 : 400}
            >
              {'Pricing'}
            </Typography>
          </Link>
        </Box>
        <Box marginLeft={4}>
          <Link to={'/contact'} style={{ textDecoration: 'none' }}>
            <Typography
              color={linkColor}
              fontWeight={window.location.pathname == '/contact' ? 700 : 400}
            >
              {'Contact Us'}
            </Typography>
          </Link>
        </Box>
        <Box marginLeft={4}>
          <Button
            variant="contained"
            color="primary"
            component="a"
            target="blank"
            href="https://www.dj-jay.in"
            size="large"
          >
            Buy now
          </Button>
        </Box>
      </Box>
      <Box sx={{ display: { xs: 'block', md: 'none' } }} alignItems={'center'}>
        <Button
          onClick={() => onSidebarOpen()}
          aria-label="Menu"
          variant={'outlined'}
          sx={{
            borderRadius: 2,
            minWidth: 'auto',
            padding: 1,
            borderColor: alpha(theme.palette.divider, 0.2),
          }}
        >
          <MenuIcon />
        </Button>
      </Box>
    </Box>
  );
};

Topbar.propTypes = {
  onSidebarOpen: PropTypes.func,
  colorInvert: PropTypes.bool,
};

export default Topbar;
