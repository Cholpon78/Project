import React from "react";
import Discount from "../../component/Discount";
import CategoriesList from "../../component/CategoriesList";
import Banner from "../../component/Banner";
import Sale from "../../component/Sale";


export default function HomePage() {
  return (
    <div>
      <Banner/>
      <CategoriesList visibleCount={4} />
      <Discount />
      <Sale />
    </div>
  );
}
