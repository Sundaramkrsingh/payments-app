import { getServerSession } from "next-auth";
import AddMoneyCard from "../../components/AddMoneyCard";
import BalanceCard from "../../components/BalanceCard";
import OnRampTransactions from "../../components/OnRampTxnsCard";
import db from '@repo/db/client'
import { authOptions } from "../../lib/auth";
import getTxns from "../../lib/functions/getTxns";

const getBalance = async () => {
    const session = await getServerSession(authOptions)
    const balance = await db.balance.findUnique({
        where: {
            userId: Number(session?.user?.id)
        }
    })

    return {
        amount: balance?.amount || 0,
        locked: balance?.locked || 0
    }
}

export default async function() {
    const balance = await getBalance()
    const transactions = await getTxns()
    
    return <div className="w-screen">
        <div className="text-2xl text-[#6a51a6] pt-6 pl-5 mb-4 font-bold subpixel-antialiased">
            Transfer
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 p-4">
            <div>
                <AddMoneyCard />
            </div>
            <div>
                <BalanceCard amount={balance.amount} locked={balance.locked} />

                <div className="pt-4">
                    <OnRampTransactions transactions={transactions} />
                </div>
            </div>
        </div> 
    </div>
}