import CommentsId from "@/components/templates/Id/CommentsId";
import IdDetails from "@/components/templates/Id/IdDetails";
import { useRouter } from "next/router";

import React from "react";

function Detail({ data, need }) {
  const route = useRouter();
  const idDetail = route.query.id;

  return (
    <>
      <div className="bg-[url('/img/bg.jpg')] bg-center h-[700px] bg-[#362726] bg-blend-multiply flex justify-center items-center">
        <IdDetails data={data} />
      </div>
      <CommentsId data={need} />
    </>
  );
}

export default Detail;

export async function getStaticPaths() {
  const res = await fetch("http://localhost:4000/menu");
  const data = await res.json();
  const paths = data.map((item) => {
    return { params: { id: String(item.id) } };
  });
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps(context) {
  const { params } = context;
  //menusItem
  const res = await fetch(`http://localhost:4000/menu/${params.id}`);
  const data = await res.json();
  //comments
  const commentsRes = await fetch(`http://localhost:4000/comments/`);
  const commentsDatas = await commentsRes.json();
  const need = commentsDatas.filter(
    (item) => item.productId == Number(params.id)
  );
  return {
    props: {
      data,
      need,
    },
  };
}
