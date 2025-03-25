import React, { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [data, setData] = useState([]);

  const TOTAL_RECORDS = 1_000_000;

  const fRecords = async (startIndex, stopIndex) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const data = Array.from({ length: stopIndex - startIndex }, (_, i) => ({
          id: startIndex + i,
          text: `Item ${startIndex + i}`,
          height: 30 + Math.floor(Math.random() * 100)
        }));
        resolve(data);
      }, 500);
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await fRecords(0, 100);
      console.log(data);
      setData(data);
    };

    fetchData();
  }, []);

  return (
    <table>
      {data.map((item) => (
        <tr key={item.id}>
          <td height={item.height}>{item.text}</td>
        </tr>
      ))}
    </table>
  );
}
