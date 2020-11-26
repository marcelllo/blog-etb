import Link from "next/link";

export default function Logica() {

  return (
    <div className="container">
      <main>
        <h1 className="title">
          <img src="/foto.png" alt="Vercel Logo" className="logo" />
          Professor Marcelo Santos
        </h1>
        <p className="description sub">
            Estrutura de Dados e Lógica de Programação
            <Link href="/" className="back">&larr; Voltar</Link>
        </p>

        <img loading="lazy" class="alignnone wp-image-294" src="https://marcelo.portalceilandia.com.br/site/wp-content/uploads/2016/06/zip-file.jpg" alt="" width="23" height="23"></img>
      </main>
    </div>
  );
}
