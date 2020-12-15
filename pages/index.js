import Link from "next/link";
import Layout from "./layout";

import api from '../data/api';

function Index(props) {

  const { subjects } = props;

  return (
    <Layout>
      <div className="grid">
        {subjects && subjects.map((subject) => (
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

export async function getStaticProps() {

  const res = await api.get('/subjects');
  const subjects = await res.data;

  return {
    props: {
      subjects
    },
    revalidate: 5
  }
}

export default Index;