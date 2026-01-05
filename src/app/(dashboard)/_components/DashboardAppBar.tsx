'use client'
import { IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar } from "./DashboardComponents";
import { useAppDispatch, useAppSelector } from "@/hooks";
import {open as openDrawer} from '@/store/features/dashboard/dashboardSlice'

export default function DashboardAppbar(){

      const {status} = useAppSelector(state=>state.dashboard)
      const dispatch = useAppDispatch()

    return <AppBar position="fixed" open={status}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={()=>dispatch(openDrawer())}
            edge="start"
            sx={[
              {
                marginRight: 5,
              },
              status && { display: 'none' },
            ]}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Mini variant drawer
          </Typography>
        </Toolbar>
      </AppBar>
}