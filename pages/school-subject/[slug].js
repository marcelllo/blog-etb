import Link from "next/link";
import { useRouter } from "react";

import api from "../../data/api";

import Layout from "../layout";

function Slug(props) {

  const { subject, sections, slug } = props;

  return (
    <Layout>
      <div className="page">
        {
          <>
            <p className="description sub">
              {subject && subject.name}
              <Link href="/">&larr; Voltar</Link>
            </p>
            <p>{subject && subject.description}</p>
          </>
        }

        {sections &&
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
          ))}

        {
          <>
            <p className="description sub">
              {subject && subject.name}
              <Link href="/">&larr; Voltar</Link>
            </p>
          </>
        }
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const res = await api.get("/subjects");
  const subjects = await res.data;

  const paths = subjects.map((subject) => ({
    params: { slug: subject.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps(ctx) {
  const slug = ctx.params.slug;

  const subjectQuery = await api.get(`/subjects/${slug}`);
  const subject = await subjectQuery.data;

  const sectionsQuery = await api.get(`/subjects/${slug}/sections`);
  const sections = sectionsQuery.data;

  return {
    props: { subject, sections, slug },
    revalidate: 5,
  };
}

export default Slug;