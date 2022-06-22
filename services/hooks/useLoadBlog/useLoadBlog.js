import useSWR from "swr";
import { apiAddress } from "../../../configs/api/config";
import { blogMapper } from "../../../utils/mappers/blogsMapper";
import { fetcher } from "../../api/fetcher/fetcher";

export const useLoadBlog = ({ id }) => {
  let { data, error } = useSWR(`${apiAddress}/blogs/${id}`, fetcher);

  if (data) data = blogMapper(data);

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
};
