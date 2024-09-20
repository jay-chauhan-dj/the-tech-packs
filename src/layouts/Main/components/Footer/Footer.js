import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const Footer = () => {
  const theme = useTheme();
  const { mode } = theme.palette;
  const linkColor = 'text.secondary';

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
          width={1}
          flexDirection={{ xs: 'column', sm: 'row' }}
        >
          <Box
            display={'flex'}
            component="a"
            href="/"
            title="theFront"
            width={80}
          >
            <Box
              component={'img'}
              src={
                mode === 'light'
                  ? 'https://assets.maccarianagency.com/the-front/logos/logo.svg'
                  : 'https://assets.maccarianagency.com/the-front/logos/logo-negative.svg'
              }
              height={1}
              width={1}
            />
          </Box>
          <Box display="flex" flexWrap={'wrap'} alignItems={'center'}>
            <Box marginTop={1} marginRight={2}>
              <Link
                to="/terms"
                style={{ textDecoration: 'none' }}
              >
                <Typography
                  color={linkColor}
                  variant={'subtitle2'}
                >
                  {'Terms & Conditions'}
                </Typography>
              </Link>
            </Box>
            <Box marginTop={1} marginRight={2}>
              <Link
                to="/terms"
                style={{ textDecoration: 'none' }}
              >
                <Typography
                  color={linkColor}
                  variant={'subtitle2'}
                >
                  {'Privacy Policy'}
                </Typography>
              </Link>
            </Box>
            <Box marginTop={1}>
              <Link to="/contact">
                <Button
                  variant="outlined"
                  color="primary"
                  component="a"
                  size="small"
                >
                  Contact Us
                </Button>
              </Link>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Typography
          align={'center'}
          variant={'subtitle2'}
          color="text.secondary"
          gutterBottom
        >
          &copy; The Tech Packs. {(new Date()).getFullYear()}, India. All rights reserved
        </Typography>
        <Typography
          align={'center'}
          variant={'caption'}
          color="text.secondary"
          component={'p'}
        >
          When you visit or interact with our sites, services or tools, we or
          our authorised service providers may use cookies for storing
          information to help provide you with a better, faster and safer
          experience and for marketing purposes.
        </Typography>
      </Grid>
    </Grid >
  );
};

export default Footer;
