"use client";
import { Avatar, IconButton } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useAppSelector } from "@/hooks";
import { useGetUserByIdQuery } from "@/store/services/userApi";

function UserButton() {
  //const { data: user, error, isLoading } = useGetUserByIdQuery();
  //const user = useAppSelector((state) => state.user.user);
  const user = undefined;

  return (
    <IconButton role="button" color="inherit">
      {user ? (
        <Avatar
          title={user.firstName}
          alt={user.firstName}
          src={user.image}
          sx={{ width: 24, height: 24 }}
        />
      ) : (
        <AccountCircleIcon fontSize="small" />
      )}
    </IconButton>
  );
}

export default UserButton;
