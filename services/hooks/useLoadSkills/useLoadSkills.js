import React from "react";
import useSWR from "swr";
import { AppDataContext } from "../../../utils/contexts/contexts";
import { fetcher } from "../../api/fetcher/fetcher";

export const useLoadSkills = () => {
  const { apiAddress } = React.useContext(AppDataContext);

  let { data, error } = useSWR(`${apiAddress}/skills`, fetcher);

  if (data)
    data = data.data.map((skill) => ({
      name: skill.attributes.name,
      level: skill.attributes.level,
      id: skill.attributes.identifier
    }));

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
};
