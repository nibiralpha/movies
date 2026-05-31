"use client";
import React from "react";
import styles from "./Details.module.css";

import HeaderComponent from "@/src/app/Components/HeaderComponent/HeaderComponent";
import MenuComponent from "@/src/app/Components/MenuComponent/MenuComponent";
import MediaComponent from "@/src/app/Components/MediaComponent/MediaComponent";

export default function Detail() {
  return (
    <div>
      <MenuComponent />
      <HeaderComponent />
      <MediaComponent />
    </div>
  );
}
