import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"

export default function Navbar() {

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        background: "#fdf6f9",
        color: "#333"
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "center"
        }}
      >

        <Typography variant="h5" sx={{ fontWeight: 600 }}>
          My Store
        </Typography>

      </Toolbar>
    </AppBar>
  )
}