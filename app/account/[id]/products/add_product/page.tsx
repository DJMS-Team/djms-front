"use client"

import { orderApi, productApi } from "@/APIS";

import { Box, Button, Container, Grid, MenuItem, Select, TextField, Typography } from "@mui/material";
import { ChangeEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { uploadImageCloudinaryProduct } from "@/cloudinary";
import { ProductCategory } from "@/interfaces/product-category.interface";


interface Props {
    params: { id: string }
}

const AddProductPage = ({params}: Props) =>{

    const router = useRouter();

    const [selectedImage, setSelectedImage] = useState<string  | null | undefined>(null);
    const [name, setName] = useState<string>('')
    const [description, setDescription] = useState<string>('')
    const [price, setPrice] = useState<number>(0)
    const [quantity, setQuantity] = useState<number>(0)
    const [productCategories, setProductCategories] = useState<ProductCategory[]>([])
    const [category, setCategory] = useState<string>('')

    useEffect(()=>{
      const fetchData = async ()=>{
        const res = await productApi.findProductsCategory();
        setProductCategories(res);
      }

      fetchData();
    },[]) 

    const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0){
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onloadend = () => {
                    setSelectedImage(reader.result?.toString());
                };
                reader.readAsDataURL(file);
            }
        }
       
    };

    const handleSubmit = async () => {

      let [status, data] = [false, ""];

      if (selectedImage) {
        [status, data] = await uploadImageCloudinaryProduct(selectedImage);
      }

        const product = await productApi.createProduct(name, description,price,quantity, data || '', category ,params.id)
        router.push(`/account/${params.id}/products`)
    };

    return (
        <Container sx={{mt: 2}}>
          <Grid
            container
            direction="column"
            style={{ minHeight: '90vh' }} // Para centrar verticalmente
          >
            <Grid item>
              <Box
                p={4} 
                bgcolor="grey.100" 
                boxShadow={3} 
                borderRadius={8} 
                style={{ width: '100%', maxWidth: '900px' }}
                className="mx-auto"
              >
                <Typography variant="h5" gutterBottom>
                  Agregar producto
                </Typography>
                <form noValidate autoComplete="off" className="mt-5 mx-auto">
                <Box sx={{ textAlign: 'center', p: 2, border: '1px dashed gray', borderRadius: '8px', bgcolor: '#f9f9f9', mb: 2 }}>
                <input
                    accept="image/*"
                    style={{ display: 'none' }}
                    id="upload-button-file"
                    type="file"
                    onChange={handleImageChange}
                />
                <label htmlFor="upload-button-file">
                    <Button variant="contained" color="primary" component="span">
                    Seleccionar Imagen
                    </Button>
                </label>
                {selectedImage && (
                    <Box mt={2}>
                    <Typography variant="subtitle1" gutterBottom>
                        Vista previa de la imagen:
                    </Typography>
                    <Box
                        component="img"
                        sx={{
                        height: 200,
                        width: 'auto',
                        borderRadius: '8px',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        }}
                        src={selectedImage}
                        alt="Selected"
                    />
                    </Box>
                )}
                </Box>
                 
                  <Box mb={2}>
                    <Typography variant="body1" gutterBottom>
                        Nombre
                    </Typography>
                    <TextField
                        label = "Ingrese nombre del producto"
                        value={name}
                        variant="outlined"
                        fullWidth
                        margin="dense"
                        onChange={(e)=>setName(e.target.value)}
                        
                    />
                    
                  </Box>
                  <Box mb={2}>
                    <Typography variant="body1" gutterBottom>
                        Descripcion
                    </Typography>
                    <TextField
                        label = "Ingrese descripcion del producto"
                        variant="outlined"
                        fullWidth
                        margin="dense"
                        value={description}
                        onChange={(e)=>setDescription(e.target.value)}
                        
                    />
                    
                  </Box>
                  <Box mb={2}>
                    <p className="block w-full truncate whitespace-nowrap overflow-hidden">Categoria</p>
                    <Select
                      fullWidth
                      onChange={(e)=>setCategory(e.target.value)}
                      value = {category}
                    >
                      {productCategories.map((category)=>(
                        <MenuItem value={category.id} key={category.id}>{category.category}</MenuItem>
                      ))}
                    </Select>
                  </Box>
                  <Box mb={2}>
                    <Typography variant="body1" gutterBottom>
                        Precio
                    </Typography>
                    <TextField
                        label = "Ingrese precio del producto"
                        variant="outlined"
                        fullWidth
                        margin="dense"
                        value={price}
                        onChange={(e)=> setPrice(+e.target.value)}
                    />
                    
                  </Box>
                  <Box mb={2}>
                    <Typography variant="body1" gutterBottom>
                        Cantidad
                    </Typography>
                    <TextField
                        label = "Ingrese precio del producto"
                        variant="outlined"
                        fullWidth
                        margin="dense"
                        value={quantity}
                        onChange={(e)=> setQuantity(+e.target.value)}
                    />
                    
                  </Box>
                  <Box mt={2}>
                    <Button variant="contained" color="primary" fullWidth onClick={handleSubmit}>
                      Agregar producto
                    </Button>
                  </Box>
                </form>
              </Box>
            </Grid>
          </Grid>
        </Container>
      );

}

export default AddProductPage;