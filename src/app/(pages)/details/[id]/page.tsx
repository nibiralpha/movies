"use client";
import React from "react";
import styles from "./Details.module.css";

import HeaderComponent from "@/src/app/Components/HeaderComponent/HeaderComponent";
import MenuComponent from "@/src/app/Components/MenuComponent/MenuComponent";
import MediaComponent from "@/src/app/Components/MediaComponent/MediaComponent";
import VideosComponent from "@/src/app/Components/VideosComponent/VideosComponent";
import PhotosComponent from "@/src/app/Components/PhotosComponent/PhotosComponent";
import { useParams } from "next/navigation";

export default function Detail() {
  const params = useParams();
  const id = Number(params.id);

  return (
    <div>
      <MenuComponent />
      <HeaderComponent id={id}/>
      <MediaComponent />
      <VideosComponent />
      <PhotosComponent />
      {/* <PhotosComponent /> */}
    </div>
  );
}
