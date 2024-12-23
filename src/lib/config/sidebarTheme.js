"use client"
import { createTheme } from "@mui/material/styles"

const sidebarTheme = createTheme({
  colorSchemes: { light: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
})

export { sidebarTheme }