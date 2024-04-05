import SendCard from "../../components/SendCard";
import P2pTransactions from "../../components/p2pTxnsCard";

export default function() {

    return <div className="w-full">
        <div className="text-2xl text-[#6a51a6] pt-6 pl-5 mb-4 font-bold subpixel-antialiased">
            P2P Transfer
        </div>
        <SendCard />
    </div>
}