'use client'
import { userApi, orderApi } from "@/APIS";
import { getUsers } from "@/actions/get-users";
import { DataTable } from "@/components/data-table";
import { useState, useCallback, useEffect } from "react";
import { columns } from "./columns";
import { EditOrderSheet } from "@/components/profile/edit-order-sheet";


interface Props{
    params: { id: string }

}

const OrdersPage = ({params}:Props) => {
    const [orders, setOrders] = useState([]);
    const [reload, setReload] = useState(false);
    
    const fetchOrders = useCallback(async () => {
        const res = await orderApi.findSellerOrders(params.id)
        console.log(res)
        setOrders(res);
    }, []);

    useEffect(() => {
        fetchOrders();
    }, [fetchOrders, reload]);
    const handleOrderUpdate = () => {
        setReload(!reload);
    };
    return (
        <div className="px-10">
            <DataTable
                filterKey="date"
                columns={columns}
                data={orders}
                disabled={false} />
            <EditOrderSheet onOrderUpdate={handleOrderUpdate}/>
        </div>
    )
}

export default OrdersPage