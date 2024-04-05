"use client"
import TextInput from "@repo/ui/TextInput";
import { Button } from "@repo/ui/button";
import { Card } from "@repo/ui/card";
import { useState } from "react";
import Center from "@repo/ui/Center";
import { p2pTransfer } from "../lib/actions/p2ptransfer";


export default function() {
    const [number, setNumber] = useState("")
    const [amount, setAmount] = useState("") 

    return <div className="h-[90vh]">
        <Center>
            <Card title={"Send"}>
                <div className="min-w-72 pt-2">
                    <TextInput label={"Phone Number"} placeholder={"phone number"} onChange={(e)=> {
                        setNumber(e)
                    }} />
                    <TextInput label={"Amount"} placeholder={"amount"} onChange={(e) => {
                        setAmount(e)
                    }} />

                    <div className="flex justify-center pt-4">
                        <Button onClick={async () => {
                            await p2pTransfer(number, Number(amount) * 100)
                        }}>Send</Button>
                    </div>
                </div>
            </Card>
        </Center>
    </div>
}