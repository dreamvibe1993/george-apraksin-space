import React from "react";
import useSWR from "swr";
import { fetcher } from "../services/api/fetcher/fetcher";
import { AppDataContext } from "../utils/contexts/contexts";

export async function getServerSideProps(context) {
  console.log(context.params);
  return {
    props: {},
  };
}

export function SkillPage(props) {
  console.log(props);
  const { apiAddress } = React.useContext(AppDataContext);
  let { data, error } = useSWR(`${apiAddress}/projects`, fetcher);

  console.log(data)

  return <div>skills</div>;
}

export default SkillPage;
