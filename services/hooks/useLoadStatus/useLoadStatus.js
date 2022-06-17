import useSWR from "swr";
import { apiAddress } from "../../../configs/api/config";
import { fetcher } from "../../api/fetcher/fetcher";

export const useLoadStatus = () => {
  let { data, error } = useSWR(`${apiAddress}/status`, fetcher);

  if (data) {
    data = {
      status: data.data.attributes.status,
      level: data.data.attributes.level,
    };
    data.level > 3
      ? (data.level = 3)
      : data.level < 1
      ? (data.level = 1)
      : data.level;
  }

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
};
