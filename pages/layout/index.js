import Head from "next/head";

export default function Layout({ children }) {
  return (
    <div className="container">
      <Head>
        <title>Professor Marcelo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          <img src="/foto.png" alt="Vercel Logo" className="logo" />
          Professor Marcelo Santos
          <p className="description">Escola Técnica de Brasília - ETB</p>
        </h1>
        {children}
      </main>
      
      <footer>
        <a
          href="https://marcelosantos.bsb.br"
          target="_blank"
          rel="noopener noreferrer"
        >
          Marcelo Santos &copy; 2020 - versão 1.0
        </a>
      </footer>
    </div>
  );
}
