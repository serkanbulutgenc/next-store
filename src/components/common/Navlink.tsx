'use client'
import { Button, ButtonProps, LinkProps } from "@mui/material";
import Link from "next/link";

export default function Navlink({href, title, ...rest}:ButtonProps) {
    return <Button component={Link}  href={href as string} color="inherit" {...rest}>{title}</Button>
}