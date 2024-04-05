import { Card } from "@repo/ui/card";

export default function({ amount, locked }: {
    amount: number,
    locked: number
}) {

    return <Card title={"Balance"}> 
        <Box name="Unlocked Balance" value={amount / 100} />
        <Box name="Locked Balance" value={locked / 100} />
        <Box name="Total Balance" value={(amount + locked) / 100} />
    </Card>
}

function Box({name, value}: { 
    name: string,
    value: number
}) {

    return <div className="flex justify-between border-b border-slate-300 py-2">
        <div className="text-slate-600 subpixel-antialiased">
            {name}
        </div>
        <div className="text-md antialiased">
            {value} INR
        </div>
    </div>
}