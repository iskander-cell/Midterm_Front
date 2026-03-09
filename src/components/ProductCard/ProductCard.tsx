import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"

type Props = {
  product: {
    id: number
    title: string
    price: number
    thumbnail: string
  }
}

export default function ProductCard({ product }: Props) {

  return (
    <Card
      sx={{
        borderRadius: 4,
        background: "#fff",
        boxShadow: "0 5px 20px rgba(0,0,0,0.05)",
        transition: "0.2s",
        "&:hover": {
          transform: "translateY(-6px)"
        }
      }}
    >

      <CardMedia
        component="img"
        height="180"
        image={product.thumbnail}
        alt={product.title}
      />

      <CardContent>

        <Typography
          variant="h6"
          sx={{
            fontSize: 18,
            mb: 1
          }}
        >
          {product.title}
        </Typography>

        <Typography
          sx={{
            color: "#ff6b9a",
            fontWeight: 600
          }}
        >
          ${product.price}
        </Typography>

      </CardContent>

    </Card>
  )
}