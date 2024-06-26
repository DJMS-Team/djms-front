"use client"
import React, { useEffect, useState } from "react"
import { styled, alpha } from '@mui/material/styles';
import Menu, { MenuProps } from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {Button, Card, CardContent, CardHeader, Container, Dialog, DialogActions, DialogContent, DialogTitle, TextField} from "@mui/material"
import { Order } from "@/interfaces/order";
import { productApi } from "@/APIS";
import { Comment } from "@/interfaces/comment.interface";
import { SendIcon } from "lucide-react";


interface Props {
    params: { id:string, productId:string }
}

const QuestionsPage = ({params}:Props) =>{

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const opened = Boolean(anchorEl);
    const [open, setOpen] = useState<boolean>(false)
    const [comments, setComments] = useState<Comment[]>()
    const [commentary, setComment] = useState<string>("")

    useEffect(()=>{
        const fetchData = async() =>{
            const res = await productApi.findOneProduct(params.productId);
            console.log(res.comments)
            setComments(res.comments)
        }

        fetchData();

    },[])

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setOpen(true)
    };
    const handleClose = () => {
        setOpen(false)
    };

    const handleMessage = () =>{

    }

    return (
        <Container className="p-8">
           <Card className="mb-4">
                <CardHeader 
                title = "Preguntas y comentarios"
                />
            </Card> 
            <div className="divide-y-2 divide-gray-400 hover:divide-y-4">
            {comments?.map((comment)=>(
            <Card className="" key={comment.id}>
                
                    <CardContent className="flex justify-between items-center p-4">
                    <h4>{comment.description}</h4>
                    <Button
                        id="demo-customized-button"
                        aria-controls={opened ? 'demo-customized-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={opened ? 'true' : undefined}
                        variant="contained"
                        disableElevation
                        style={{background : '#1c1c3c'}}
                        onClick={handleClick}
                        endIcon = {<SendIcon fontSize="small"  />}
                    >
                        Responder
                    </Button>
                    <Dialog open={open} onClose={handleClose}>
                        <DialogTitle>Pon la respuesta en esta campo</DialogTitle>
                        <DialogContent>
                            <TextField
                                        fullWidth
                                        margin="dense"
                                        value={commentary}
                                        onChange={(e) => setComment(e.target.value)}
                                        autoFocus = {false}
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose} color="secondary">
                                Cancelar
                            </Button>
                            <Button 
                                onClick={() => {
                                    handleMessage();
                                    handleClose();
                                }} 
                                color="primary"
                            >
                                    Confirmar
                            </Button>
                        </DialogActions>
                    </Dialog>

                   
                </CardContent>
                
                
            </Card>
            ))}
            </div>
        </Container>
    )
}

export default QuestionsPage