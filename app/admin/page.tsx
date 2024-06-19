import { getIncome } from "@/actions/income-report";
import { DataCharts } from "@/components/dashboard/data-charts";
import { DataGrid } from "@/components/dashboard/data-grid";

const AdminPage = async () => {
    const data = await getIncome();
   
    return (
        <div className="max-w-screen-2xl mx-auto w-full pb-10 -mt-24">
            <DataGrid
             currentPeriod={data.currentPeriod.income}
             incomeChange={data.incomeChange}
             orderDays={data.orderDays} />
            <DataCharts
             currentPeriod={data.currentPeriod.income}
             incomeChange={data.incomeChange}
             orderDays={data.ordersDays}/>
        </div>
    )
}

export default AdminPage;