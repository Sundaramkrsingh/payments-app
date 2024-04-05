"use client"

import { Button } from "./button"

interface AppbarProps {
    user?: {
        name?: string | null;
    };
    onSignIn: any;
    onSignOut: any;
}

export default function({
    user, 
    onSignIn,
    onSignOut
}: AppbarProps) {

    return <div className="flex justify-between  shadow-sm border-b border-slate-300 px-4">
        <div className="flex justify-center flex-col text-3xl text-[#6a51a6] font-bold subpixel-antialiased">
            Paytm
        </div>
        <div className="flex justify-between pt-2">
            <div className="border-1">{user?.name}</div>
            <Button onClick={user? onSignOut: onSignIn}>{user? "Logout": "Login"}</Button>
        </div>
    </div>
}