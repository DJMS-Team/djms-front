"use client"

import { Container, Typography, TextField, Button, Card, CardContent, Grid, IconButton } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useEffect, useState } from 'react';
import { User } from '@/interfaces/user';
import { Address } from '@/interfaces/address';
import { addressApi, userApi } from '@/APIS';
import { AddresApi } from '@/APIS/address.api';
import { useRouter } from 'next/navigation';

interface Props {
    params: { id: string }
}

const ProfilePage = ({params}: Props) =>{

    const [user, setUser] = useState<User>()
    const [addresses, setAddresses] = useState<Address[]>()

    const [updateName, setUpdateName] = useState<string>('')
    const [updateEmail, setUpdateEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [photo_url, setPhotoUrl] = useState<string>('')
    const [user_role, setUserRole] = useState<string>('')
    const Router = useRouter();

    useEffect(()=>{
        const fetchData = async () =>{
            const res = await userApi.findOneUser(params.id)
            console.log(res)
            setUser(res)
            setAddresses(res.addresses)
            setUpdateName(res.name)
            setUpdateEmail(res.email)
            setPassword(res.password)
            setPhotoUrl(res.photo_url)
            setUserRole(res.role)
        }

        fetchData();
        //console.log(params.id)
    },[params.id])

    const onAddAddress = () =>{
      Router.push(`/account/${params.id}/add_address`)
    }

    const onUpdateAddress = (id:string) =>{
      Router.push(`/account/${params.id}/update_address/${id}`)
    }

    const onUpdateUser = async () => {
      await userApi.updateOneUser(params.id,updateName,updateEmail, photo_url, user_role)
      window.location.reload()
    }

    return (
        <Container maxWidth="md" sx={{ mt: 4 }}>
          <Typography variant="h4" gutterBottom>
            Perfil
          </Typography>
    
          <Typography variant="h6" gutterBottom>
            Información personal
          </Typography>
    
          <TextField
            fullWidth
            value = {updateName}
            margin="normal"
            variant="outlined"
            onChange={(e)=>setUpdateName(e.target.value)}
          />
    
          <TextField
            fullWidth
            value = {updateEmail}
            margin="normal"
            variant="outlined"
            onChange={(e)=>setUpdateEmail(e.target.value)}
          />
    
          <Button variant="contained" color="primary" sx={{ mt: 2 }} onClick={onUpdateUser} >
            Actualizar
          </Button>
    
          <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
            Direcciones
          </Typography>
    
          <Grid container spacing={2} alignItems="center" sx={{ mb: 2 }}>
            <Grid item xs>
              <TextField
                fullWidth
                label="Agregar dirección"
                variant="outlined"
              />
            </Grid>
            <Grid item>
              <IconButton color="primary">
                <AddCircleIcon onClick={onAddAddress} />
              </IconButton>
            </Grid>
          </Grid>
    
        <Grid container spacing={2}>
        <Grid container spacing={2}>
      {addresses?.map((address) => (
        <Grid item xs={12} sm={6} key={address.id}>
          <Card>
            <CardContent>
              <Typography variant="h6">{`${address.street} # ${address.avenue}-${address.house_number}`}</Typography>
              <Typography variant="body2">{address.city?.name}</Typography>
              <Typography variant="body2">{user?.name}</Typography>
              <IconButton sx={{ float: 'right' }}>
                <MoreVertIcon />
              </IconButton>
              <Button variant="contained" color="primary" onClick={() => onUpdateAddress(address.id)}>
                Update Address
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
      </Grid>
        </Container>
      );

}

export default ProfilePage