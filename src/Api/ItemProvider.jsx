import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ItemContext = createContext(null);
const ItemProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10"
        );
        setData(response.data.Items);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  const itemInfo = {
    data,
    loading,
    setData
  };
  return (
    <ItemContext.Provider value={itemInfo}>{children}</ItemContext.Provider>
  );
};

export default ItemProvider;
