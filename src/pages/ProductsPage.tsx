import { useEffect, useState } from "react"
import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"

import ProductCard from "../components/ProductCard/ProductCard"

type Product = {
  id: number
  title: string
  price: number
  thumbnail: string
  category: string
}

type CategoryItem = {
  slug: string
  name: string
  url: string
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [categories, setCategories] = useState<string[]>([])
  const [selectedCategory, setSelectedCategory] = useState("all")

  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products/categories")

        if (!response.ok) {
          throw new Error("Error fetching categories")
        }

        const data = await response.json()

        if (Array.isArray(data) && data.length > 0 && typeof data[0] === "object") {
          const categoryNames = data.map((item: CategoryItem) => item.slug)
          setCategories(categoryNames)
        } else {
          setCategories(data)
        }
      } catch (e) {
        console.error(e)
      }
    }

    getCategories()
  }, [])

  useEffect(() => {
    const getProducts = async () => {
      try {
        const url =
          selectedCategory === "all"
            ? "https://dummyjson.com/products"
            : `https://dummyjson.com/products/category/${selectedCategory}`

        const response = await fetch(url)

        if (!response.ok) {
          throw new Error("Error fetching products")
        }

        const data = await response.json()
        setProducts(data.products)
      } catch (e) {
        console.error(e)
      }
    }

    getProducts()
  }, [selectedCategory])

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
          mb: 4,
          textAlign: "center",
          color: "#333",
        }}
      >
        Products
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
          justifyContent: "center",
          mb: 5,
          maxWidth: "1000px",
        }}
      >
        <Button
          variant={selectedCategory === "all" ? "contained" : "outlined"}
          onClick={() => setSelectedCategory("all")}
        >
          All
        </Button>

        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "contained" : "outlined"}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </Button>
        ))}
      </Box>

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