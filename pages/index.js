import Head from "next/head";
import Link from "next/link";

import mockData from "../data/data";

export default function Home() {

  const subjects = mockData().getAllSchoolSubjects();

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
        </h1>

        <p className="description">Escola Técnica de Brasília - ETB</p>

        <div className="grid">
          {
            subjects.map(subject => (
              <Link href={"/school-subject/" + subject.slug} key={subject.id}>
                <div className="card link">
                  <h3>{subject.name} &rarr;</h3>
                  <p>
                    {subject.description}
                  </p>
                </div>
              </Link>
            ))
          }          
        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Marcelo Santos &copy; 2020
        </a>
      </footer>
    </div>
  );
}
