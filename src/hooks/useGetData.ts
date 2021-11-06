import { useQuery } from "react-query";
import { ENDPOINTS } from "../constants";
import { SERVICE } from "../services";
import { API_KEYS } from "../constants/Types";

const baseUrl = "https://api.covid19api.com/";

const useGetData = (endpoint: ENDPOINTS, key: API_KEYS) => {
  const { isLoading, error, data, refetch } = useQuery(key, async () => {
    try {
      return await SERVICE.makeCall(baseUrl + endpoint);
    } catch (err) {
      throw err;
    }
  });

  return { isLoading, error, data, refetch };
};

export default useGetData;
