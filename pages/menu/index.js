import PageHeader from "@/components/modules/PageHeader/PageHeader";
import Price from "@/components/templates/Menu/Price";
import React from "react";

function Menu({ data }) {
  return (
    <div>
      <PageHeader route="Menu" />
      <Price data={data} />
    </div>
  );
}

export default Menu;

export async function getStaticProps() {
  const res = await fetch("http://localhost:4000/menu");
  const data = await res.json();
  return {
    props: { data },
    revalidate: 12 * 60 * 60,
  };
}
