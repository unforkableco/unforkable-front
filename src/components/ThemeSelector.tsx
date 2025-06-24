import React, { useState } from 'react';
import {
  Box,
  Button,
  Menu,
  MenuItem,
  Typography,
  Chip,
  Tooltip,
  Fade
} from '@mui/material';
import PaletteIcon from '@mui/icons-material/Palette';
import CheckIcon from '@mui/icons-material/Check';
import { useTheme } from '../contexts/ThemeContext';

const ThemeSelector: React.FC = () => {
  const { currentThemeConfig, setTheme, availableThemes } = useTheme();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleThemeSelect = (themeName: string) => {
    setTheme(themeName);
    handleClose();
  };

  return (
    <Box sx={{ position: 'relative' }}>
      <Tooltip title="Change theme" placement="bottom">
        <Button
          onClick={handleClick}
          startIcon={<PaletteIcon />}
          sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)',
            border: `1px solid ${currentThemeConfig.primary}40`,
            borderRadius: 3,
            px: 3,
            py: 1.5,
            color: 'text.primary',
            textTransform: 'none',
            fontWeight: 600,
            '&:hover': {
              backgroundColor: `${currentThemeConfig.primary}20`,
              borderColor: currentThemeConfig.primary,
              transform: 'translateY(-1px)',
              boxShadow: `0 8px 25px ${currentThemeConfig.primary}30`
            },
            transition: 'all 0.3s ease'
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box
              sx={{
                width: 12,
                height: 12,
                borderRadius: '50%',
                backgroundColor: currentThemeConfig.primary,
                boxShadow: `0 0 8px ${currentThemeConfig.primary}80`
              }}
            />
            <Typography variant="body2" sx={{ fontSize: '0.85rem' }}>
              {currentThemeConfig.name}
            </Typography>
          </Box>
        </Button>
      </Tooltip>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
        PaperProps={{
          elevation: 24,
          sx: {
            backgroundColor: 'rgba(20, 20, 20, 0.95)',
            backdropFilter: 'blur(20px)',
            border: `1px solid ${currentThemeConfig.primary}40`,
            borderRadius: 3,
            minWidth: 320,
            maxHeight: 500,
            overflow: 'auto',
            '&::-webkit-scrollbar': {
              width: 6,
            },
            '&::-webkit-scrollbar-track': {
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderRadius: 3,
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: currentThemeConfig.primary,
              borderRadius: 3,
            },
          }
        }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <Box sx={{ p: 2, pb: 1 }}>
          <Typography 
            variant="h6" 
            sx={{ 
              color: 'text.primary',
              fontWeight: 700,
              fontSize: '1rem',
              mb: 1
            }}
          >
            Choose Your Theme
          </Typography>
          <Typography 
            variant="body2" 
            sx={{ 
              color: 'text.secondary',
              fontSize: '0.8rem',
              mb: 2
            }}
          >
            Select a color scheme that matches your vibe
          </Typography>
        </Box>

        {availableThemes.map((theme, index) => (
          <MenuItem
            key={theme.name}
            onClick={() => handleThemeSelect(theme.name)}
            sx={{
              px: 2,
              py: 1.5,
              mx: 1,
              mb: 1,
              borderRadius: 2,
              backgroundColor: theme.name === currentThemeConfig.name 
                ? `${theme.primary}20` 
                : 'transparent',
              border: theme.name === currentThemeConfig.name 
                ? `1px solid ${theme.primary}60` 
                : '1px solid transparent',
              '&:hover': {
                backgroundColor: `${theme.primary}15`,
                borderColor: `${theme.primary}40`,
                transform: 'translateX(4px)',
              },
              transition: 'all 0.2s ease',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', gap: 2 }}>
              {/* Theme Color Preview */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Box
                  sx={{
                    width: 20,
                    height: 20,
                    borderRadius: 1,
                    background: `linear-gradient(135deg, ${theme.primary} 0%, ${theme.secondary} 100%)`,
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    position: 'relative',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      inset: 2,
                      borderRadius: 0.5,
                      background: `linear-gradient(135deg, ${theme.background} 0%, ${theme.paper} 100%)`,
                      opacity: 0.3
                    }
                  }}
                />
                <Box
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    backgroundColor: theme.accent1,
                    boxShadow: `0 0 6px ${theme.accent1}80`
                  }}
                />
              </Box>

              {/* Theme Info */}
              <Box sx={{ flex: 1 }}>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    fontWeight: 600,
                    color: theme.textPrimary,
                    fontSize: '0.9rem'
                  }}
                >
                  {theme.name}
                </Typography>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    color: theme.textSecondary,
                    fontSize: '0.75rem',
                    opacity: 0.8
                  }}
                >
                  {theme.description}
                </Typography>
              </Box>

              {/* Selected Indicator */}
              {theme.name === currentThemeConfig.name && (
                <CheckIcon 
                  sx={{ 
                    color: theme.primary,
                    fontSize: 20,
                    animation: 'pulse 2s ease-in-out infinite'
                  }} 
                />
              )}
            </Box>

            {/* Hover Effect Background */}
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: `linear-gradient(135deg, ${theme.primary}10 0%, ${theme.secondary}05 100%)`,
                opacity: 0,
                transition: 'opacity 0.2s ease',
                pointerEvents: 'none',
                '.MuiMenuItem-root:hover &': {
                  opacity: 1
                }
              }}
            />
          </MenuItem>
        ))}

        <Box sx={{ p: 2, pt: 1 }}>
          <Chip
            label={`${availableThemes.length} themes available`}
            size="small"
            sx={{
              backgroundColor: `${currentThemeConfig.primary}20`,
              color: currentThemeConfig.primary,
              fontSize: '0.7rem',
              height: 24
            }}
          />
        </Box>
      </Menu>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.1); }
        }
      `}</style>
    </Box>
  );
};

export default ThemeSelector; 