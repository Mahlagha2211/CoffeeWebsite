import PageHeader from "@/components/modules/PageHeader/PageHeader";
import Booking from "@/components/templates/Reserve/Booking";
import React from "react";

function Reserve() {
  return (
    <div>
      <PageHeader route="Reservation" />
      <Booking />
    </div>
  );
}

export default Reserve;
