import PageHeader from "@/components/modules/PageHeader/PageHeader";
import ServicesDetails from "@/components/templates/Services/ServicesDetails";
import React from "react";

function Service({ data }) {
  return (
    <div className="">
      <PageHeader route="Services" />
      <ServicesDetails data={data}/>
    </div>
  );
}

export default Service;

export async function getStaticProps() {
  const res = await fetch("http://localhost:4000/services");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
