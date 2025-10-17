export default function Card({image, title, price, rating}){
    return(
        <div className="flex flex-col items-center px-5 py-10 shadow-xl gap-5">
            <img src={image} alt={title} className="w-80 h-80"/>
            <h1 className="text-3xl text-black">{title}</h1>
            <div className="flex justify-center items-center text-yellow-400 gap-2 self-start">
                <h2>{rating["rate"]}</h2>
                <h2>({rating["count"]})</h2>
            </div>
            <h3 className="text-gray-600 self-start">${price}</h3>
            <button className="py-2 px-8 bg-amber-400 rounded-xl self-start border border-transparent hover:bg-amber-500 hover:border hover:border-black font-bold">Detalhes</button>
        </div>
    )
}