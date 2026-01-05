import { Container } from "@mui/material";
import DashboardAppbar from "./_components/DashboardAppBar";
import DashboardDrawer from "./_components/DashboardDrawer";

export default function DashboardLayout({children}:{children:React.ReactNode}){
    return <>
        <DashboardAppbar/>
        <DashboardDrawer/>
        <Container component="main" sx={{mt:10}}>
            {children}
        </Container>
    </>
}