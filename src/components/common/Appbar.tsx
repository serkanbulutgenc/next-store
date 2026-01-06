import {
  AppBar,
  Box,
  Container,
  Divider,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import Navlink from "./Navlink";
import CartButton from "../cart/cart-btn";
import UserButton from "../user/user-btn";

export default function Appbar() {
  return (
    <AppBar>
      <Toolbar>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "anchor-center",
            }}
          >
            <Box sx={{ flex: 1 }}>
              <Typography variant="h5" component={"h1"}>
                Store
              </Typography>
            </Box>
            <Box
              sx={{
                flex: 6,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Stack
                direction={"row"}
                spacing={1}
                divider={<Divider flexItem orientation="vertical" />}
              >
                <Navlink href="/" title="Home" />
                <Navlink href="/shop" title="Shop" />
                <Navlink href="/dashboard" title="Dashboard" />
              </Stack>
            </Box>
            <Box sx={{ flex: 1 }}>
              <Stack
                direction={"row"}
                spacing={1}
                divider={<Divider flexItem orientation="vertical" />}
              >
                <CartButton />
                <UserButton />
              </Stack>
            </Box>
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  );
}
