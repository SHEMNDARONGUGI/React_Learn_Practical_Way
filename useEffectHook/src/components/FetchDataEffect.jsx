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
      <h1>Data Fetching</h1>
      {/* ?. is known as //OPTIONAL CHAINING */}
      <p>{data[0]?.title}</p>
    </div>
  );
}

export default FetchDataEffect;
