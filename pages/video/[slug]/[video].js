import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";

import mockData from "../../../data/data";

export default function Video() {
  const router = useRouter();

  const { slug, video } = router.query;

  return (
    <div className="video">
      <header>
        <img src="/foto.png" alt="Vercel Logo" className="logo" />
        <h1 className="title">
          Professor Marcelo Santos
          <p className="description">Escola Técnica de Brasília - ETB</p>
        </h1>
        <Link href={`/school-subject/${slug}`} class="back">&larr; Voltar</Link>
      </header>
      <main>
        <iframe
          src={`https://www.youtube.com/embed/${video}`}
          allow={"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"}
          allowFullScreen={true}
        ></iframe>
      </main>

      <style jsx>{`
        html, body {
            overflow: hidden;
        }
      `}</style>
    </div>
  );
}
