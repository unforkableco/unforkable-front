import React, { useState } from 'react';
import { 
  AppBar, 
  Box, 
  Toolbar, 
  Button, 
  IconButton, 
  Menu, 
  MenuItem, 
  useMediaQuery, 
  useTheme,
  Link as MuiLink
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme as useCustomTheme } from '../contexts/ThemeContext';

const Header: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { currentThemeConfig } = useCustomTheme();

  interface NavButtonProps {
    href: string;
    onClick?: () => void;
    children: React.ReactNode;
  }

  const NavButton: React.FC<NavButtonProps> = ({ 
    href, 
    onClick, 
    children 
  }) => (
    <MuiLink 
      href={href} 
      component="a" 
      underline="none" 
      onClick={onClick}
      className="nav-link"
      sx={{ 
        color: 'white', 
        mx: 1,
        px: 2,
        py: 1,
        borderRadius: 1,
        transition: 'all 0.3s',
        '&:hover': { 
          backgroundColor: `${currentThemeConfig.primary}1A`,
          color: 'primary.main'
        },
      }}
    >
      {children}
    </MuiLink>
  );

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const navItems = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <AppBar position="fixed" className="header" sx={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.4)' }}>
      <Toolbar className="toolbar">
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }} className="logo-container">
          <img 
            src="/images/logo - unforkable - white.png" 
            alt="Unforkable Logo" 
            className="header-logo"
            style={{ 
              height: '35px', 
              marginRight: '10px' 
            }} 
          />
        </Box>

        {isMobile ? (
          <Box className="mobile-menu-container">
            <IconButton
              size="large"
              edge="end"
              color="primary"
              aria-label="menu"
              className="mobile-menu-button"
              onClick={handleMenuOpen}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              className="mobile-menu"
              PaperProps={{
                sx: {
                  backgroundColor: 'background.paper',
                  border: `1px solid ${currentThemeConfig.primary}33`
                }
              }}
            >
              {navItems.map((item) => (
                <MenuItem 
                  key={item.label} 
                  component="a" 
                  href={item.href}
                  onClick={handleMenuClose}
                  className={`mobile-menu-item mobile-menu-item-${item.label.toLowerCase()}`}
                  sx={{ 
                    '&:hover': { 
                      backgroundColor: `${currentThemeConfig.primary}1A`,
                      color: 'primary.main'
                    }
                  }}
                >
                  {item.label}
                </MenuItem>
              ))}

            </Menu>
          </Box>
        ) : (
          <Box sx={{ display: 'flex', alignItems: 'center' }} className="desktop-nav">
            <Box className="nav-links">
              {navItems.map((item) => (
                <NavButton 
                  key={item.label} 
                  href={item.href}
                >
                  {item.label}
                </NavButton>
              ))}
            </Box>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header; 