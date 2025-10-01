import PageHeader from "@/components/modules/PageHeader/PageHeader";
import Reservation from "@/components/templates/Home/Reservation";
import React from "react";

function Reserve() {
  return (
    <div>
      <PageHeader route="Reservation" />
      <Reservation />
    </div>
  );
}

export default Reserve;
