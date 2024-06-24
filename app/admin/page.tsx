import { getIncome } from "@/actions/income-report";
import { DataCharts } from "@/components/dashboard/data-charts";
import { DataGrid } from "@/components/dashboard/data-grid";
import { Suspense } from "react";
const AdminPage = async () => {
    let data;
    try {
        data = await getIncome();
    } catch (error) {
        console.error('Failed to fetch income data:', error);
        data = {
            currentPeriod: { income: 0 },
            incomeChange: 0,
            ordersDays: [],
            topCategories: []
        };
    }
    const currentPeriodIncome = data?.currentPeriod?.income ?? 0;
    const incomeChange = data?.incomeChange ?? 0;
    const orderDays = data?.ordersDays ?? [];
    const topCategories = data?.topCategories ?? [];
    return (
        <div className="max-w-screen-2xl mx-auto w-full pb-10 -mt-24">
            <Suspense fallback={<div>Loading...</div>}>
                <DataGrid
                currentPeriod={currentPeriodIncome}
                incomeChange={incomeChange}
                orderDays={orderDays} />
             </Suspense>
            <DataCharts
             currentPeriod={currentPeriodIncome}
             incomeChange={incomeChange}
             orderDays={orderDays}
             topCategories={topCategories}/>
        </div> 
    )
}

export default AdminPage;