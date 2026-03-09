import { useEffect, useState } from "react"

import type { IProduct } from "../types"
import { BASE_URL } from "../constants"

import { ProductCard } from "../components/ProductCard/ProductCard"

import Container from "@mui/material/Container"
import Box from "@mui/material/Box"

export const ProductsPage = () => {

    const [products, setProducts] = useState<IProduct[]>([])

    useEffect(() => {

        const getProducts = async () => {

            try {

                const response = await fetch(`${BASE_URL}/products`)

                const data = await response.json()

                setProducts(data.products)

            } catch(e){
                console.error(e)
            }

        }

        getProducts()

    }, [])

    return (

        <Container>

        <Box
            sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
            gap: 3
            }}
        >

            {products.map((product) => (
            <ProductCard key={product.id} product={product} />
            ))}

        </Box>

        </Container>
    )
}