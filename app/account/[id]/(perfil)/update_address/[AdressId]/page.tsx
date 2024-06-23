"use client"
import { addressApi } from "@/APIS"
import { Address } from "@/interfaces/address"
import { City } from "@/interfaces/city"
import { Department } from "@/interfaces/departmen"
import { Box, Button, Container, Grid, MenuItem, Select, TextField, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"


interface Props {
  params: {AdressId: string, id:string }
}



const UpdateAddressPage = ({params}: Props) =>{

    const Router = useRouter()
    const [address, setAddress] = useState<Address>()

    const [actualDepartment, setActualDeparment] = useState<Department>()
    const [actualCity, setActualCity] = useState<City>()

    const [deparments, setDeparments] = useState<Department[]>()
    const [cities, setCities] = useState<City[]>()

    const [deparment, setDeparment] = useState<string | undefined>('')
    const [city, setCity] = useState<string>('')
    const [user, setUser] = useState<string>('')
    const [calle, setCalle] = useState<string>('')
    const [avenida, setAvenida] = useState<string>('')
    const [house_number,SetHouse_Number] = useState<string>('')

    useEffect(()=>{
        const fetchData = async () =>{
            const res = await addressApi.findOneAddress(params.AdressId)
            setAddress(res)
            setActualCity(res.city)
            const response:Department[] = await addressApi.findDepartments();
            console.log(response)
            setDeparments(response)
            const resD = await addressApi.findOneCity(res.city.id)
            setActualDeparment(resD.department)
            setDeparment(resD.department?.name)
            setCity(res.city?.name)
            setUser(params.id)
            setCalle(res.street)
            setAvenida(res.avenue)
            SetHouse_Number(res.house_number)
            console.log(res)
        }

        fetchData();
    },[params.id])

    async function changeDepartment( cities:City[]) {
        console.log(cities)
        setCities(cities)
    }

    async function onCreateAddress() {
        await addressApi.updateAddress(params.AdressId, calle, avenida,house_number, user, city );
        Router.push(`/account/${params.id}`)
    }

    return (
        <Container>
          <Grid
            container
            direction="column"
            style={{ minHeight: '100vh' }} // Para centrar verticalmente
          >
            <Grid item>
              <Box 
                p={4} 
                bgcolor="grey.100" 
                boxShadow={3} 
                borderRadius={8} 
                style={{ width: '100%', maxWidth: '900px' }}
              >
                <Typography variant="h5" gutterBottom>
                  Agregar direccion
                </Typography>
                <form noValidate autoComplete="off">
                  <Box mb={2}>
                    <Typography variant="body1" gutterBottom>
                      Departamento
                    </Typography>

                    <Select
                        value={deparment}
                        onChange={(e)=>setDeparment(e.target.value)}
                        fullWidth
                    > 
                    <MenuItem value={actualDepartment?.id} key={actualDepartment?.id}>
                      <em>(actual) {actualDepartment?.name}</em>
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
                    <MenuItem value={actualCity?.id} key={actualCity?.id}>
                      <em>(actual) {actualCity?.name}</em>
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
                        value = {calle}
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
                        value = {avenida}
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
                        value = {house_number}
                        fullWidth
                        margin="dense"
                        onChange={(e) => SetHouse_Number(e.target.value)}
                    />
                    
                  </Box>
                  <Box mt={2}>
                    <Button variant="contained" color="primary" fullWidth onClick={onCreateAddress}>
                      Actualizar direccion
                    </Button>
                  </Box>
                </form>
              </Box>
            </Grid>
          </Grid>
        </Container>
    )
}

export default UpdateAddressPage