import PageHeader from "@/components/modules/PageHeader/PageHeader";
import Result from "@/components/templates/Search/Result";
import React from "react";

function Search({ resultSearch }) {
  return (
    <div>
      <PageHeader route="Search" />
      <Result data={resultSearch} />
    </div>
  );
}

export default Search;

export async function getServerSideProps(context) {
  const { query } = context;
  const res = await fetch("http://localhost:4000/menu");
  const data = await res.json();
  const resultSearch = data.filter(
    (item) =>
      item.type.toLowerCase().includes(query.q.toLowerCase()) ||
      item.title.toLowerCase().includes(query.q.toLowerCase())
  );

  return { props: { resultSearch } };
}
