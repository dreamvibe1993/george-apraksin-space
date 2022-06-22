import useSWR from "swr";
import { apiAddress } from "../../../configs/api/config";
import { blogsMapper } from "../../../utils/mappers/blogsMapper";
import { fetcher } from "../../api/fetcher/fetcher";

export const useLoadBlogs = () => {
  let { data, error } = useSWR(`${apiAddress}/blogs`, fetcher);

  if (data) data = blogsMapper(data);

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
};
