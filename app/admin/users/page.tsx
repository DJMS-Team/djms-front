'use client'
import {
    Card,
    CardContent, 
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import { Payment, columns } from "./columns"
import { DataTable } from "@/components/data-table";


const data: Payment[] = [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
        id: "d52f",
        amount: 600,
        status: "failed",
        email: "a@example.com",
      },
    
  ]
  

const UsersPage = () => {
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
                     data={data}
                     onDelete={()=>{}}
                     disabled={false}
                      />
                </CardContent>
            </Card>
        </div>
    )
}

export default UsersPage;