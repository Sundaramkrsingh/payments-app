"use server"

import db from '@repo/db/client'
import { getServerSession } from 'next-auth'
import { authOptions } from '../auth'

export const p2pTransfer = async (number: string, amount: number) => {
    // fetching sender's details
    const session = await getServerSession(authOptions)
    const senderId = session?.user?.id
    if (!senderId) {
        return {
            message: 'unauthenticated'
        }
    }

    // fetching receiver's details
    const receiver = await db.user.findFirst({ where: { number: number } })
    if (!receiver) {
        return {
            message: "User not found"
        }
    }

    // transaction
    await db.$transaction( async(txn) => {
        // checking sender's balance first
        await txn.$queryRaw`SELECT * FROM "Balance" WHERE "userId"=${Number(senderId)} FOR UPDATE`

        const senderBalance = await txn.balance.findFirst({
            where: { userId: Number(senderId) }
        })

        if (!senderBalance || senderBalance.amount < amount) {
            throw new Error('Insufficient Balance')
        }
        
        // deduct from sender's cwallet
        await txn.balance.update({
            where: { userId: Number(senderId) },
            data: { amount: { decrement: amount } }
        })

        // credit to receiver's wallet
        await txn.balance.update({
            where: { userId: receiver.id }, 
            data: { amount: { increment: amount } } 
        })

        await txn.p2PTransfer.create({
            data: {
                amount,
                timeStamp: new Date(),
                senderPhone: session?.user?.email,
                receiverPhone: receiver.number
            }
        })
    })
}