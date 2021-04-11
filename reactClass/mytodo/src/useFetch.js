import { useEffect, useState } from "react";


const useFetch = (callback, url) => {
    const [loading, setLoading] = useState(false);
  
    const fetchInitialData = async () => {
      setLoading(true);
      const response = await fetch(url);
      const initialData = await response.json();
      callback(initialData);
      setLoading(false);
    }
  
    useEffect(() => {
      fetchInitialData();
      console.log("data received");
    }, []);
  
    return loading;
  }



export default useFetch;