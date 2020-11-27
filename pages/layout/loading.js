import Head from "next/head";

export default function Layout({ children }) {
  return (
    <div className="loading">
      <h1>Carregando...</h1>
      <img src="/loading.gif" alt="carregando" width={100} />
      {children}
    </div>
  )
}