'use client'
import { useTheme } from '@mui/material/styles';

import { Divider, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import StorefrontIcon from '@mui/icons-material/Storefront';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import DashboardIcon from '@mui/icons-material/Dashboard';

import { useAppDispatch, useAppSelector } from '@/hooks';
import { Drawer, DrawerHeader } from './DashboardComponents';
import { close as closeDrawer } from '@/store/features/dashboard/dashboardSlice'

interface IDashboardMenu {
  title: string;
  icon: React.ReactNode,
  href?: string
}

const dashboardMenus: IDashboardMenu[] = [
  { icon: <DashboardIcon />, title: "Dashboard", href: '/dashboard' },
  { icon: <StorefrontIcon />, title: "Store", href: '/products' },
  { icon: <PeopleAltIcon />, title: "Customers", href: '/customers' }]


export default function DashboardDrawer() {
  const { status } = useAppSelector(state => state.dashboard)
  const dispatch = useAppDispatch()
  const theme = useTheme()

  return <Drawer variant="permanent" open={status}>
    <DrawerHeader>
      <IconButton onClick={() => dispatch(closeDrawer())}>
        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
      </IconButton>
    </DrawerHeader>
    <Divider />
    <List>
      {dashboardMenus.map((menu, index) => (
        <ListItem key={menu.title} disablePadding sx={{ display: 'block' }}>
          <ListItemButton
            sx={[
              {
                minHeight: 48,
                px: 2.5,
              },
              status
                ? {
                  justifyContent: 'initial',
                }
                : {
                  justifyContent: 'center',
                },
            ]}
          >
            <ListItemIcon
              sx={[
                {
                  minWidth: 0,
                  justifyContent: 'center',
                },
                status
                  ? {
                    mr: 3,
                  }
                  : {
                    mr: 'auto',
                  },
              ]}
            >
              {menu.icon}
            </ListItemIcon>
            <ListItemText
              primary={menu.title}
              sx={[
                status
                  ? {
                    opacity: 1,
                  }
                  : {
                    opacity: 0,
                  },
              ]}
            />
          </ListItemButton>
        </ListItem>
      ))}
    </List>

  </Drawer>
}