import { useEffect, useState } from "react"

import { useParams } from "react-router-dom"

import { BASE_URL } from "../constants"
import type { IProduct } from "../types"

import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"

export const ProductPage = () => {

    const {id} = useParams()

    const [product,setProduct] = useState<IProduct | null>(null)

    useEffect(()=>{

        const getProduct = async ()=>{

            const response = await fetch(`${BASE_URL}/products/${id}`)

            const data = await response.json()

            setProduct(data)

        }

        getProduct()

    },[id])

    if(!product) return <div>Loading...</div>

    return(

        <Container sx={{marginTop:4}}>

            <Typography variant="h4">
                {product.title}
            </Typography>

            <Typography>
                {product.description}
            </Typography>

            <Typography>
                Price: ${product.price}
            </Typography>

        </Container>
    )
}