import { useEffect, useState } from "react";

function FetchDataEffect() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      if (data && data.length) setData(data);
    }

    fetchData();
  }, []);
  return (
    <div>
      <h1>First Post Title</h1>
      {/* ?. is known as //OPTIONAL CHAINING */}
      <p>{data[0]?.title}</p>

      {/* solution from the class */}
      {data.length > 0 ? <p>{data[0].title}</p> : <p>Loading...</p>}
    </div>
  );
}

export default FetchDataEffect;
