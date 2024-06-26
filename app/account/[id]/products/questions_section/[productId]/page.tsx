"use client"
import React from "react"
import {Button, Card, CardContent, CardHeader, Container} from "@mui/material"
import { KeyboardArrowDown } from '@mui/icons-material';

interface Props {
    params: { id:string, productId:string }
}

const QuestionsPage = ({params}:Props) =>{

    return (
        <Container className="p-8">
           <Card className="mb-4">
                <CardHeader 
                title = "Preguntas y comentarios"
                />
            </Card> 
            <Card className="divide-y-2 flex flex-col">
                <CardContent className="flex">
                    <h5>1</h5>
                    <Button
                        className="mr-20"
                        aria-haspopup="true"
                        endIcon={<KeyboardArrowDown />}
                    >
                        HOla
                    </Button>
                </CardContent>
                <CardContent>
                    <h5>2</h5>
                </CardContent>
                <CardContent>
                    <h5>3</h5>
                </CardContent>
                <CardContent>
                    <h5>4</h5>
                </CardContent>
            </Card>
        </Container>
    )
}

export default QuestionsPage