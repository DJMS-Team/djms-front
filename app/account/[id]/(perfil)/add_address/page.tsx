"use client"

import { addressApi } from "@/APIS"
import { City } from "@/interfaces/city"
import { Department } from "@/interfaces/departmen"
import { Box, Button, Container, Grid, MenuItem, Select, SelectChangeEvent, TextField, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

interface Props {
    params: { id: string }
}



const AddressPage = ({params}:Props) =>{

    const router = useRouter();

    const [deparments, setDeparments] = useState<Department[]>()
    const [cities, setCities] = useState<City[]>()


    const [deparment, setDeparment] = useState<string | undefined>()
    const [city, setCity] = useState<string>('')
    const [user, setUser] = useState<string>('')
    const [calle, setCalle] = useState<string>('')
    const [avenida, setAvenida] = useState<string>('')
    const [house_number,SetHouse_Number] = useState<string>('')
    useEffect(()=>{
        const fetchData = async () =>{
            const response:Department[] = await addressApi.findDepartments();
            console.log(response)
            setDeparments(response)
            setUser(params.id)
        }

        fetchData();
    },[params.id])
    
    async function changeDepartment( cities:City[]) {
        console.log(cities)
        setCities(cities)
    }

    async function onCreateAddress() {
        await addressApi.createAddress(calle, avenida,house_number, user, city );
        router.push(`/account/${params.id}`)
    }

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
                  Agregar direccion
                </Typography>
                <form noValidate autoComplete="off" className="mt-5">
                  <Box mb={2}>
                    <Typography variant="body1" gutterBottom>
                      Departamento
                    </Typography>

                    <Select
                        value={deparment}
                        onChange={(e)=>setDeparment(e.target.value)}
                        fullWidth
                    > 
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    {deparments?.map((deparment) =>(
                        <MenuItem value = {deparment.id} key={deparment.id} onClick={()=>changeDepartment(deparment?.cities)}>{deparment.name}</MenuItem>
                    ))}
                  </Select>
                  </Box>
                  <Box mb={2}>
                    <Typography variant="body1" gutterBottom>
                      Municipio
                    </Typography>
                    <Select
                        value={city}
                        onChange={(e)=>setCity(e.target.value)}
                        fullWidth
                    > 
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    {cities?.map((deparment) =>(
                        <MenuItem value = {deparment.id} key={deparment.id}>{deparment.name}</MenuItem>
                    ))}
                  </Select>
                  </Box>
                  <Box mb={2}>
                    <Typography variant="body1" gutterBottom>
                        Calle
                    </Typography>
                    <TextField
                        label = "Ingrese calle"
                        variant="outlined"
                        fullWidth
                        margin="dense"
                        onChange={(e)=>setCalle(e.target.value)}
                    />
                    
                  </Box>
                  <Box mb={2}>
                    <Typography variant="body1" gutterBottom>
                        Avenida
                    </Typography>
                    <TextField
                        label = "Ingrese avenida"
                        variant="outlined"
                        fullWidth
                        margin="dense"
                        onChange={(e)=>setAvenida(e.target.value)}
                    />
                    
                  </Box>
                  <Box mb={2}>
                    <Typography variant="body1" gutterBottom>
                        Numero de casa
                    </Typography>
                    <TextField
                        label = "Ingrese # casa"
                        variant="outlined"
                        fullWidth
                        margin="dense"
                        onChange={(e) => SetHouse_Number(e.target.value)}
                    />
                    
                  </Box>
                  <Box mt={2}>
                    <Button variant="contained" color="primary" fullWidth onClick={onCreateAddress}>
                      Agregar dirección
                    </Button>
                  </Box>
                </form>
              </Box>
            </Grid>
          </Grid>
        </Container>
      );
}

export default AddressPage