import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

function About() {
    const [data, setData] = useState([])

    const { t} = useTranslation();

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
        <h1>{t("AboutInfo")}</h1>
        <ul>
            {data.map((item) => (
                <li key={item.id}>{item.title}</li>
            ))}
        </ul>
    </div>
  )
}

export default About