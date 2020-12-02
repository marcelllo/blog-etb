import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Link from "next/link";
import Loading from "../layout/loading";

import api from "../../data/api";
import mockData from "../../data/data";

import Layout from "../layout";

function Slug({ subject, sections }) {
  
  return (
    <Layout>
      <div className="page">
        {(
          <>
            <p className="description sub">
              {subject.name}
              <Link href="/">&larr; Voltar</Link>
            </p>
            <p>{subject.description}</p>
          </>
        )}

        {sections.map((section) => (
            <section
              className={section.vertical && "vertical"}
              key={section.id}
            >
              <h2>{section.name}</h2>
              {section.files.map((f) =>
                f.type !== 'youtube' ? (
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
                  <Link href={`/video/${section.slug}/${f.url}`} key={f.id}>
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
                  <a className="desabilitado">
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

        {(
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

Slug.getInitialProps = async (ctx) => {

  const slug = ctx.query.slug;

  const subjectQuery = await api.get(`/subjects/${slug}`);
  const subject = await subjectQuery.data;

  const sectionsQuery = await api.get(`/subjects/${slug}/sections`);
  const sections = sectionsQuery.data;


  return { subject, sections };
}

export default Slug