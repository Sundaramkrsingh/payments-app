"use client"
import Select from "@repo/ui/Select";
import TextInput from "@repo/ui/TextInput";
import { Button } from "@repo/ui/button";
import { Card } from "@repo/ui/card";
import { useState } from "react";
import { createOnRampTransaction } from "../lib/actions/createOnRampTxn";

const SUPPORTED_BANKS = [{
    name: "HDFC Bank",
    redirectURL: "https://netbanking.hdfcbank.com"
}, {
    name: "AXIS Bank",
    redirectURL: "https://netbanking.axisbank.com"
}]

export default function() {
    const [redirectURL, setRedirectURL] = useState(SUPPORTED_BANKS[0]?.redirectURL)
    const [provider, setProvider] = useState(SUPPORTED_BANKS[0]?.name || "")
    const [amount, setAmount] = useState(0)

    return <Card title={"Add Money"} >
        <div className="w-full">
            <TextInput label={'Amount'} onChange={(val) => {
                setAmount(Number(val))
            }} placeholder={'amount'} />
            <div className="pt-4 pb-2 text-left text-md font-medium text-gray-600">
                Bank
            </div>
            <Select onSelect={(value) => {
                setRedirectURL(SUPPORTED_BANKS.find(x => x.name === value)?.redirectURL)
                setProvider(SUPPORTED_BANKS.find(x => x.name === value)?.name || "")
            }} options={SUPPORTED_BANKS.map(x => ({
                key: x.name,
                value: x.name
            }))} />
            <div className="flex justify-center pt-4">
                <Button onClick={async() => {
                    await createOnRampTransaction(provider, amount)
                    window.location.href = redirectURL || ""
                }}>
                    Add Money
                </Button>
            </div>
        </div>
    </Card>
}