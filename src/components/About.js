import { useEffect, useState } from "react"

function About() {
    const [data, setData] = useState([])

    useEffect(() => {
        let mounted = true;
        async function fetchData() {
            const result = await fetch("https://jsonplaceholder.typicode.com/posts");
            const jsonData = await result.json();
            if (mounted) {
                setData(jsonData)
            }
        }
        fetchData();

        return () => {
            mounted = false;
        };
    }, [])

  return (
    <div>
        <h1>About this website</h1>
        <ul>
            {data.map((item) => (
                <li key={item.id}>{item.title}</li>
            ))}
        </ul>
    </div>
  )
}

export default About