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

    const [selectedImages, setSelectedImages] = useState<string[]>([]);
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
        if (event.target.files) {
            const files = Array.from(event.target.files);
            const readers = files.map(file => {
                return new Promise<string | ArrayBuffer | null>((resolve, reject) => {
                    const reader = new FileReader();
                    reader.onloadend = () => {
                        resolve(reader.result);
                    };
                    reader.onerror = reject;
                    reader.readAsDataURL(file);
                });
            });

            Promise.all(readers).then((results) => {
                const images = results.map(result => result?.toString() || "");
                setSelectedImages(images);
            });
        }
    };

    const handleSubmit = async () => {
        const uploadPromises = selectedImages.map(image => uploadImageCloudinaryProduct(image));

        const uploadResults = await Promise.all(uploadPromises);

        const uploadedUrls = uploadResults
            .filter(([status, url]) => status)
            .map(([status, url]) => url);

        const product = await productApi.createProduct(name, description, price, quantity, uploadedUrls, category, params.id);
        router.push(`/account/${params.id}/products`);
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
                    multiple
                />
                <label htmlFor="upload-button-file">
                    <Button variant="contained" color="primary" component="span">
                    Seleccionar Imágenes
                    </Button>
                </label>
                {selectedImages.length > 0 && (
                    <Box mt={2}>
                    <Typography variant="subtitle1" gutterBottom>
                        Vista previa de las imágenes:
                    </Typography>
                    <Grid container spacing={2}>
                        {selectedImages.map((image, index) => (
                        <Grid item key={index}>
                            <Box
                            component="img"
                            sx={{
                                height: 200,
                                width: 'auto',
                                borderRadius: '8px',
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                            }}
                            src={image}
                            alt={`Selected ${index + 1}`}
                            />
                        </Grid>
                        ))}
                    </Grid>
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
                        label = "Ingrese cantidad del producto"
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
