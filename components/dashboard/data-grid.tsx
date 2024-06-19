'use client'

import { formatDateRange } from "@/lib/utils"
import { useSearchParams } from "next/navigation"
import { FaPiggyBank } from "react-icons/fa"
import { FaArrowTrendUp, FaArrowTrendDown } from "react-icons/fa6"

import { DataCard } from "./data-card"

interface DataGridProps {
    currentPeriod: number
    incomeChange: number
    orderDays: []
}

export const DataGrid = ({currentPeriod, incomeChange, orderDays}:DataGridProps) => {


    const params = useSearchParams()
    const to = params.get('to') || ''
    const from = params.get('from') || ''

    const dateRangeLabel = formatDateRange({to, from})
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-2 mb-8">
            {/* <DataCard
             title="Remaining"
             value={currentPeriod}
             icon={FaPiggyBank}
             variant='default'
             dateRange={dateRangeLabel} /> */}
             <DataCard
             title="Income"
             value={currentPeriod}
             icon={FaArrowTrendUp}
             percentage={incomeChange}
             variant='default'
             dateRange={dateRangeLabel} />
             {/* <DataCard
             title="Expenses"
             value={currentPeriod}
             icon={FaArrowTrendDown}
             variant='default'
             dateRange={dateRangeLabel} /> */}
        </div>
    )
}