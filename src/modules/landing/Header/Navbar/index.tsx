import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Link from 'next/link';
import Image from 'next/image';
import './index.css';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import { useAuthUserKeyCloack } from '@devdocs/hooks/AuthHooks';
import { initialUrl } from '@devdocs/constants/AppConst';
import { signIn } from 'next-auth/react';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';

const menuItems = [
  {
    name: 'Community',
    link: '/',
  },
  {
    name: 'GitHub',
    link: '/',
  },
  {
    name: 'Docs',
    link: '/',
  },
];

const NavBar = () => {
  const [isScroll, setScroll] = useState(false);
  const [open, setOpen] = useState(false);
  const { isAuthenticated } = useAuthUserKeyCloack();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10 && !isScroll) {
        setScroll(true);
      } else if (window.scrollY <= 10 && isScroll) {
        setScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScroll]);

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <Box id='navbar' className={isScroll ? 'sticky' : 'nav_bar'}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: '16px',
          maxWidth: '1370px',
          margin: '0 auto',
          width: '100%',
          zIndex: 1250,
          padding: isScroll ? 0 : '30px 0 16px',
        }}
      >
        <Box>
          <Image
            src={`${isScroll ? '/assets/images/logo-with-name.png' : '/assets/images/logo-white-with-name.png'}`}
            alt='logo'
            width={130}
            height={42}
          />
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          {menuItems.map((item) => (
            <Link
              rel='stylesheet'
              href={item.link}
              key={item.name}
              className={isScroll ? 'text_color' : 'nav_link'}
            >
              {item.name}
            </Link>
          ))}
          <Button
            variant='contained'
            href={isAuthenticated ? initialUrl : ''}
            sx={{
              backgroundColor: isScroll ? '' : 'red',
            }}
            onClick={() => signIn("keycloak")}
          >
            {isAuthenticated ? 'Go to Dashboard' : 'Sign In'}
          </Button>
          <span
            style={{ fontSize: '32px', color: isScroll ? '#000' : '#fff' }}
            className='menu_icon'
            onClick={showDrawer}
          >
            <MenuSharpIcon />
          </span>
        </Box>
      </Box>
      <Drawer
        anchor='right'
        onClose={onClose}
        open={open}
        key='left'
        style={{ maxWidth: '420px', width: '100%', padding: '60px' }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '50px',
            padding: '60px',
          }}
        >
          {menuItems.map((item) => (
            <Link
              rel='stylesheet'
              href={item.link}
              key={item.name}
              onClick={onClose}
              style={{
                fontSize: '24px',
                fontWeight: 400,
                color: '#000',
                textDecoration: 'none',
              }}
            >
              {item.name}
            </Link>
          ))}
        </Box>
      </Drawer>
    </Box>
  );
};

export default NavBar;
