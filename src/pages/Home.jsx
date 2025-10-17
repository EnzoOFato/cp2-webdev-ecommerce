import { useEffect, useState } from "react";
import Card from "../components/Card";
import Section from "../components/Section"

export default function Home() {
  
  const [produtosM, setProdutosM] = useState([])
  const [joias, setJoias] = useState([])
  const [eletronics, setEletronics] = useState([])
  const [produtosF, setProdutosF] = useState([])
  const API  = import.meta.env.VITE_API_URL

  useEffect(() => {
    fetch(`${API}category/men's clothing`)
    .then(res => res.json())
    .then(data => setProdutosM(data))
  }, [])

  useEffect(() => {
    fetch(`${API}category/jewelery`)
    .then(res => res.json())
    .then(data => setJoias(data))
  }, [])

  useEffect(() => {
    fetch(`${API}category/electronics`)
    .then(res => res.json())
    .then(data => setEletronics(data))
  }, [])

  useEffect(() => {
    fetch(`${API}category/women's clothing`)
    .then(res => res.json())
    .then(data => setProdutosF(data))
  }, [])

  useEffect(() => {
    console.log(eletronics)
  })

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen">
        <h2 className="text-5xl font-bold py-5 text-center">Bem-vindo ao Fiap Commerce!</h2>
        <Section titulo="Roupas Masculinas">
          {
            produtosM.map(item => (
              <Card {...item}></Card>
            ))
          }
        </Section>
        <Section titulo="Jóias">
          {
            joias.map(item => (
              <Card {...item}></Card>
            ))
          }
        </Section>
        <Section titulo="Eletronicos">
          {
            eletronics.map(item => (
              <Card {...item}></Card>
            ))
          }
        </Section>
        <Section titulo="Roupas Femininas">
          {
            produtosF.map(item => (
              <Card {...item}></Card>
            ))
          }
        </Section>
    </div>
  );
}
