import useSWR from "swr";
import { fetcher } from "../../api/fetcher/fetcher";

export const useLoadSkills = () => {
  let { data, error } = useSWR(
    // eslint-disable-next-line no-undef
    `${process.env.NEXT_PUBLIC_API_URL}/skills`,
    fetcher
  );

  if (data)
  data = data.data.map((skill) => ({
      name: skill.attributes.name,
      level: skill.attributes.level,
    }));
    
  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
};

