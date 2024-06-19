import { getIncome } from "@/actions/income-report";
import { DataCharts } from "@/components/dashboard/data-charts";
import { DataGrid } from "@/components/dashboard/data-grid";
import { Suspense } from "react";
const AdminPage = async () => {
    const data = await getIncome();
   
    return (
        <div className="max-w-screen-2xl mx-auto w-full pb-10 -mt-24">
            <Suspense fallback={<div>Loading...</div>}>
                <DataGrid
                currentPeriod={data.currentPeriod.income}
                incomeChange={data.incomeChange}
                orderDays={data.orderDays} />
             </Suspense>
            <DataCharts
             currentPeriod={data.currentPeriod.income}
             incomeChange={data.incomeChange}
             orderDays={data.ordersDays}/>
        </div> 
    )
}

export default AdminPage;