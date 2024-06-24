"use client";

import {
  Container,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  Grid,
  IconButton,
} from "@mui/material";

import { useEffect, useState } from "react";
import { User } from "@/interfaces/user";
import { Address } from "@/interfaces/address";
import { addressApi, userApi } from "@/APIS";
import { useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Trash, Edit, Plus, MoreVertical } from "lucide-react";
interface Props {
  params: { id: string };
}

const ProfilePage = ({ params }: Props) => {
  const [user, setUser] = useState<User>();
  const [addresses, setAddresses] = useState<Address[]>();

  const [updateName, setUpdateName] = useState<string>("");
  const [updateEmail, setUpdateEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [photo_url, setPhotoUrl] = useState<string>("");
  const [user_role, setUserRole] = useState<string>("");
  const Router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const res = await userApi.findOneUser(params.id);
      
      setUser(res);
      setAddresses(res.addresses);
      setUpdateName(res.name);
      setUpdateEmail(res.email);
      setPassword(res.password);
      setPhotoUrl(res.photo_url);
      setUserRole(res.role);
    };

    fetchData();
    //console.log(params.id)
  }, [params.id]);

  const onAddAddress = () => {
    Router.push(`/account/${params.id}/add_address`);
  };

  const onUpdateAddress = (id: string) => {
    Router.push(`/account/${params.id}/update_address/${id}`);
  };

  const onUpdateUser = async () => {
    await userApi.updateOneUser(
      params.id,
      updateName,
      updateEmail,
      photo_url,
      user_role
    );
    window.location.reload();
  };

  return (
    <Container maxWidth="md" sx={{ mt: 2 }}>
      <Typography variant="h4" gutterBottom>
        Perfil
      </Typography>

      <Typography variant="h6" gutterBottom>
        Información personal
      </Typography>

      <TextField
        fullWidth
        value={updateName}
        margin="normal"
        variant="outlined"
        onChange={(e) => setUpdateName(e.target.value)}
      />

      <TextField
        fullWidth
        value={updateEmail}
        margin="normal"
        variant="outlined"
        onChange={(e) => setUpdateEmail(e.target.value)}
      />

      <Button
        variant="contained"
        color="primary"
        sx={{ mt: 2 }}
        onClick={onUpdateUser}
      >
        Actualizar
      </Button>

      <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
        Direcciones
      </Typography>

      <Grid
        container
        onClick={onAddAddress}
        spacing={2}
        alignItems="center"
        sx={{ mb: 2 }}
      >
        <Grid item xs>
          <p className="border bg-gray-100 border-gray-400 rounded-md p-2">
            Agregar dirección
          </p>
        </Grid>
        <Grid item>
          <IconButton color="primary">
            <Plus className="size-4"/>
          </IconButton>
        </Grid>
      </Grid>

      <Grid container spacing={2} mt={2}>
        {addresses?.map((address) => (
          <Grid item xs={12} sm={6} md={4} key={address.id}>
            <Card className="relative pr-4 h-full">
              <CardContent>
                <Typography variant="h6">{`${address.street} # ${address.avenue}-${address.house_number}`}</Typography>
                <Typography variant="body2">{address.city?.name}</Typography>
                <Typography variant="body2">{user?.name}</Typography>
                <DropdownMenu>
                  <DropdownMenuTrigger className="absolute top-0 right-0 mt-2 mr-2">
                    <MoreVertical className="size-4"/>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem
                      onClick={() => onUpdateAddress(address.id)}
                    >
                      <Edit className="size-4 mr-2" />
                      Editar
                    </DropdownMenuItem>
                    <DropdownMenuItem
                    onClick={() => addressApi.deleteAddress(address.id)}
                    >
                      <Trash className="size-4 mr-2" />
                      Eliminar
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProfilePage;
