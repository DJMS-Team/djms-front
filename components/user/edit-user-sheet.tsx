import { userApi } from "@/APIS"
import { 
     Sheet,
     SheetContent,
     SheetDescription,
     SheetHeader,
     SheetTitle } from "@/components/ui/sheet"
import { useOpenUser } from "@/hooks/use-open-user"
import { UserForm } from "./user-form"
import { z } from "zod"
import { UserSchema } from "@/schemas"
import { useUserData } from "@/hooks/use-user-data"
import { Loader2 } from "lucide-react"
import { useUpdateUser } from "@/hooks/use-update-user"

type FormValues = z.input<typeof UserSchema>

interface User {
    name: string;
    email: string;
    role: string;
    password: string;
    photo_url: string;
}

type Props = {
    onUserUpdate: () => void;
}

export const EditUserSheet = ({ onUserUpdate }: Props) => {
    const {isOpen, onClose, id} = useOpenUser();
    const { user, loading, error } = useUserData(id as string, 'token');
    const { onSubmit, updating } = useUpdateUser(id as string, onClose, onUserUpdate);
    console.log('user', user);
    const defaultValues: User = {
        name: user?.name || '',
        email: user?.email || '',
        role: user?.role || '',
        password: user?.password || '',
        photo_url: user?.photo_url || ''
    };
    if (!user) return null;
    
    if (error) return <div>Error: {error.message}</div>;
  
    return (
        <Sheet open={isOpen} onOpenChange={onClose}>
            <SheetContent className="space-y-4">
                <SheetHeader>
                    <SheetTitle>
                        Edit User
                    </SheetTitle>
                    <SheetDescription>
                        Edit user details
                    </SheetDescription>
                </SheetHeader>
                {loading 
                  ? (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <Loader2 className="size-4 text-muted-foreground animate-spin"/>
                    </div>
                  ) : (
                    <UserForm 
                        onSubmit={onSubmit} 
                        disabled={updating}
                        defaultValues={defaultValues}
                     />
                  )
                }
            </SheetContent>
        </Sheet>
    )
}