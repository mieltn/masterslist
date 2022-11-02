import { useEffect, useState } from 'react'

function Programs() {

  const [programs, setPrograms] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch('/program');
    const json = await response.json();
    console.log(json);
    setPrograms(json);
  }

  return (
    <div className="Programs">
      <h1>programs</h1>
      {programs.map(program => {
        return (
          <div
            className="card"
            style={{margin: "10px 25% 10px 25%"}}
            key={program.id}
          >
            <div className="card-body">
              <h5 className="card-title">{program.name}</h5>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Programs;