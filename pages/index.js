import Head from "next/head";
import Link from "next/link";

import mockData from "../data/data";

import Layout from "./layout";

export default function Index() {
  const subjects = mockData().getAllSchoolSubjects();

  return (
    <Layout>
      <div className="grid">
        {subjects.map((subject) => (
          <Link href={"/school-subject/" + subject.slug} key={subject.id}>
            <div className="card link">
              <h3>{subject.name} &rarr;</h3>
              <p>{subject.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </Layout>
  );
}
