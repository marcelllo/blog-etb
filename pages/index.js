import { useEffect, useState } from "react";
import Link from "next/link";
import Layout from "./layout";
import Loading from "./layout/loading";

import api from "../data/api";
import mockData from "../data/data";


export default function Index() {
  const [subjects, setSubjects] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const subjects = mockData().getAllSchoolSubjects();
    setSubjects(subjects);
    setLoading(false);
    // api.get('/subjects').then(res => {
    //     setSubjects(res.data);
    //     setLoading(false);
    // });    
  }, []);
  

  return (
    <Layout>
      <div className="grid">
        {loading ? 
          <Loading />
        :
        subjects.map((subject) => (
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
