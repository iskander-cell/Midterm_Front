import { useEffect, useState } from "react"

import { BASE_URL } from "../constants"

import Container from "@mui/material/Container"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import Button from "@mui/material/Button"

import { Link } from "react-router-dom"

export const CategoriesPage = () => {

    const [categories,setCategories] = useState<string[]>([])

    useEffect(()=>{

        const getCategories = async ()=>{

            const response = await fetch(`${BASE_URL}/products/categories`)

            const data = await response.json()

            setCategories(data)

        }

        getCategories()

    },[])

    return(

        <Container sx={{marginTop:4}}>

            <List>

                {categories.map((category)=> (

                    <ListItem key={category}>

                        <Button
                            component={Link}
                            to={`/category/${category}`}
                            variant="outlined"
                        >
                            {category}
                        </Button>

                    </ListItem>

                ))}

            </List>

        </Container>
    )
}