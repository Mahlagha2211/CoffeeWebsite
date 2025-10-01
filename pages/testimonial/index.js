import PageHeader from "@/components/modules/PageHeader/PageHeader";
import Testimonials from "@/components/templates/Home/Testimonials";
import React from "react";

function Testimonial({ data }) {
  return (
    <div>
      <PageHeader route="Testimonial" />
      <Testimonials data={data.commentsData} />
    </div>
  );
}

export default Testimonial;
export async function getStaticProps() {
  const commentsResponse = await fetch("http://localhost:4000/comments");
  const commentsData = await commentsResponse.json();
  return {
    props: {
      data: {
        commentsData,
      },
      revalidate: 12 * 60 * 60,
    },
  };
}
