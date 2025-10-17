export default function Section({titulo, children}){
    return (
        <div className="flex flex-col items-center">
            <h1 className="text-4xl text-black w-full text-center bg-amber-400 py-5">{titulo}</h1>
            <div className="grid grid-cols-3 gap-10 w-4/5 my-5">
                {children}
            </div>
        </div>
    )
}