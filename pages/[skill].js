import React from "react";

export async function getServerSideProps(context) {
  console.log(context.params);
  return {
    props: {},
  };
}

export function SkillPage(props) {
  console.log(props);
  return <div>skills</div>;
}

export default SkillPage;