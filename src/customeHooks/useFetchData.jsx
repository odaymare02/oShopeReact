import axios from "axios";
import { useEffect, useState } from "react";

export default function useFetchData(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const fetchData = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(url);
      setData(data);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, [url]);
  return { data, error, loading };
}
