import { useEffect, useState } from "react";
import Link from "next/link";
import Layout from "./layout";
import Loading from "./layout/loading";

import api from "../data/api";

function Index({ subjects }) {

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

Index.getInitialProps = async (ctx) => {
  
  const res = await api.get("/subjects");
  const data = await res.data;

  return { subjects: data };
  
};

export default Index;
