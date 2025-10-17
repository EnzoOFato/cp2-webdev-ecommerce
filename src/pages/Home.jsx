import { useEffect, useState } from "react";

export default function Home() {
  
  const [produtosM, setProdutosM] = useState([])
  const [joias, setJoias] = useState([])
  const [eletronics, setEletronics] = useState([])
  const [produtosF, setProdutosF] = useState([])
  const API  = import.meta.env.VITE_API_URL

  useEffect(() => {
    fetch(`${API}/category/men's clothing`)
    .then(res => res.json())
    .then(data => setProdutosM(data))
  }, [])

  useEffect(() => {
    fetch(`${API}/category/jewelery`)
    .then(res => res.json())
    .then(data => setJoias(data))
  }, [])

  useEffect(() => {
    fetch(`${API}/category/eletronics`)
    .then(res => res.json())
    .then(data => setEletronics(data))
  }, [])

  useEffect(() => {
    fetch(`${API}/category/women's clothing`)
    .then(res => res.json())
    .then(data => setProdutosF(data))
  }, [])

  useEffect(() => {
    console.log(produtosM)
  })

  return (
    <div className="flex flex-col items-center w-full min-h-screen">
        <h2 className="text-2xl font-bold mb-4">Bem-vindo ao Fiap Commerce!</h2>
    </div>
  );
}
