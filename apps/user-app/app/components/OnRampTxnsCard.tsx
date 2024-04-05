import { Card } from "@repo/ui/card"

type OnRampStatus = 'Success' | 'Failure' | 'Processing';

export default function({ transactions }: {
    transactions: {
        time: Date, // type can be Date
        amount: number,
        status: OnRampStatus,    // type can be wrong
        provider: string
    }[]
}) {
    if(!transactions.length) {
        return <Card title="Recent Transactions">
            <div className="text-center pb-8 pt-8">
                No recent Transactions
            </div>
        </Card>
    }

    

    return <Card title="Recent Transactions">
        <div>
            { transactions.map(t => 
                <div className="flex justify-between py-1 border-t border-gray-300">
                    <div>
                        <div className="text-sm text-slate-600 subpixel-antialiased">
                            Received INR
                        </div>
                        <div className="text-slate-400 text-xs subpixel-antialiased">
                            {t.time.toDateString()}
                        </div>
                    </div>
                    <div className="flex items center">
                        <div className="font-semibold text-gray-600 antialiased">
                            Rs 
                        </div>  
                        <div className="w-20 text-right antialiased">
                            {t.amount / 100}
                        </div>
                    </div> 
                </div>)
            }
        </div>
    </Card>
} 