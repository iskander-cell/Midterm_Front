import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import { useEffect, useState } from "react"
import ProductCard from "../components/ProductCard/ProductCard"

type Product = {
  id: number
  title: string
  price: number
  thumbnail: string
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
  }, [])

  return (
    <Container
      maxWidth={false}
      sx={{
        mt: 6,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          mb: 5,
          fontWeight: 500,
          textAlign: "center",
        }}
      >
        Products
      </Typography>

      <Box
        sx={{
          width: "100%",
          maxWidth: "1000px",
          display: "grid",
          gridTemplateColumns: "repeat(3, 280px)",
          justifyContent: "center",
          gap: 4,
        }}
      >
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Box>
    </Container>
  )
}