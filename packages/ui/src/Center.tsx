export default function({ children }: { children: React.ReactNode } ) {
    return <div className="flex justify-center flex-col h-full">
        <div className="flex justify-center">
            {children}
        </div>
    </div>
}