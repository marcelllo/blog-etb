import { useRouter } from "next/router";
import Link from "next/link";

import mockData from "../../data/data";

import Layout from "../layout";

export default function Name() {
  const router = useRouter();
  const { slug } = router.query;
  const subject = mockData().getSchoolSubject(slug) || {};
  const sections = mockData().getSections(subject.id);

  return (
    <Layout>
        <p className="description sub">
          {subject.name}
          <Link href="/">
            &larr; Voltar
          </Link>
        </p>

        {sections.map((section) => (
          <section style={section.vertical ? {flexDirection: "column"} : {}}>
            <h2>{section.name}</h2>
            {section.files.map((f) => (
              <a href={f.url} target="_blank">
                <img
                  loading="lazy"
                  src={`/icone-${f.type ?? 'download'}.png`}
                  alt=""
                  width="23"
                  height="23"
                />
                {f.name ? f.name : "Download"}
              </a>
            ))}
          </section>
        ))}
    </Layout>
  );
}
