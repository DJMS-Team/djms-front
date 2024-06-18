
import {
    Card,
    CardContent, 
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import { columns } from "./columns"
import { DataTable } from "@/components/data-table";

import { getUsers } from "@/actions/get-users";
  

const UsersPage = async () => {

   const response = await getUsers(1, 50, 'ASC');

    return (
        <div className="max-w-screen-2xl mx-auto w-full pb-10 -mt-24">
            <Card className="border-none drop-shadow-sm">
                <CardHeader className="gap-y-2 lg:flex-row lg:items-center lg:justify-between">
                    <CardTitle className="text-xl line-clamp-1">
                        Users Page
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <DataTable
                     filterKey="email"
                     columns={columns}
                     data={response.users}
                    //  onDelete={()=>{}}
                     disabled={false}
                      />
                </CardContent>
            </Card>
        </div>
    )
}

export default UsersPage;