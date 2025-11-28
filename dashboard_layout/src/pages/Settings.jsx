import React from 'react'
import Sidemenu from '../Sidemenu'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled, useTheme } from '@mui/material/styles';

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

function Settings() {
    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <DrawerHeader />
                <Sidemenu />
                <h3>Sett Page</h3>
                <Box component="main" sx={{  flexGrow: 1, p: 3 }}>
                    <h1>Settings</h1>
                </Box>
            </Box>
        </>
    )
}

export default Settings
