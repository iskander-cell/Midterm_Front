import CssBaseline from "@mui/material/CssBaseline"
import Box from "@mui/material/Box"
import Navbar from "./components/Navbar/Navbar"
import ProductsPage from "./pages/ProductsPage"

function App() {
  return (
    <>
      <CssBaseline />

      <Box
        sx={{
          background: "#fff8fb",
          minHeight: "100vh",
          width: "100%",
        }}
      >
        <Navbar />
        <ProductsPage />
      </Box>
    </>
  )
}

export default App