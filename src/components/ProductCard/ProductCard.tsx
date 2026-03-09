import type { IProduct } from "../../types"

import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'

import { Link } from "react-router-dom"

interface Props {
    product: IProduct
}

export const ProductCard = ({product}: Props) => {

    return (
        <Card sx={{maxWidth:300}}>

            <CardMedia
                component="img"
                height="200"
                image={product.thumbnail}
            />

            <CardContent>

                <Typography variant="h6">
                    {product.title}
                </Typography>

                <Typography color="secondary">
                    ${product.price}
                </Typography>

                <Button
                    component={Link}
                    to={`/product/${product.id}`}
                    variant="outlined"
                >
                    Details
                </Button>

            </CardContent>

        </Card>
    )
}