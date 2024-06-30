import { AppBar, Box, Container, MenuItem, Toolbar, Typography } from "@mui/material";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Siman Incentives" },
    { name: "description", content: "Welcome to the website for Siman Incentives" },
  ];
};

export default function Index() {
  return (
      <AppBar position="fixed">
        <Container maxWidth="xl">
          <Toolbar variant="regular">
            <Box alignItems="center" display="flex" flexGrow={1} justifyContent="space-between">[Logo]
          <Box display="flex" gap={2}>
            <MenuItem><Typography>Products</Typography></MenuItem>
          <MenuItem><Typography>Contact</Typography></MenuItem>
          </Box></Box></Toolbar>
        </Container>
      </AppBar>
  );
}
