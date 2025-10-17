export default function Section({titulo, children}){
    return (
        <div className="flex flex-col justify-center">
            <h1 className="text-4x text-black">{titulo}</h1>
            <div className="grid grid-cols-3">
                {children}
            </div>
        </div>
    )
}