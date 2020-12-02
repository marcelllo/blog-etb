import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Link from "next/link";
import Loading from "../layout/loading";

import mockData from "../../data/data";

import Layout from "../layout";

export default function Slug() {
  const router = useRouter();
  const slug = router.query.slug;

  const [loading1, setLoading1] = useState(true);
  const [loading2, setLoading2] = useState(true);

  const subject = mockData().getSchoolSubject(slug) || {};
  const sections = mockData().getSections(subject.id);

  useEffect(() => {
    setLoading1(false);
    setLoading2(false);
  }, []);

  return (
    <Layout>
      <div className="page">
        {!loading1 && !loading2 && (
          <>
            <p className="description sub">
              {subject.name}
              <Link href="/">&larr; Voltar</Link>
            </p>
            <p>{subject.description}</p>
          </>
        )}

        {loading1 || loading2 ? (
          <Loading />
        ) : (
          sections.map((section) => (
            <section
              className={section.vertical && "vertical"}
              key={section.id}
            >
              <h2>{section.name}</h2>
              {section.files.map((f) =>
                f.type !== "youtube" ? (
                  <a href={f.url} target="_blank" key={f.id}>
                    <img
                      loading="lazy"
                      src={`/icone-${f.type ?? "download"}.png`}
                      alt=""
                      width="23"
                      height="23"
                    />
                    {f.name ? f.name : "Download"}
                  </a>
                ) : f.url ? (
                  <Link href={`/video/${slug}/${f.url}`} key={f.id}>
                    <a>
                      <img
                        loading="lazy"
                        src={`/icone-youtube.png`}
                        alt=""
                        width="23"
                        height="23"
                      />
                      {f.name ? f.name : "Download"}
                    </a>
                  </Link>
                ) : (
                  <a className="desabilitado" key={f.id}>
                    <img
                      loading="lazy"
                      src={`/icone-youtube-d.png`}
                      alt=""
                      width="23"
                      height="23"
                    />
                    {f.name}
                  </a>
                )
              )}
            </section>
          ))
        )}

        {!loading1 && !loading2 && (
          <>
            <p className="description sub">
              {subject.name}
              <Link href="/">&larr; Voltar</Link>
            </p>
          </>
        )}
      </div>
    </Layout>
  );
}
