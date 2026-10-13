import React from "react";
import styles from "./MovieSkeleton.module.css";

interface MovieSkeletonProp {
  height?: number | string;
  width?: number | string;
  borderRadius?: number | string;
}

export default function MovieSkeleton({
  height = "100%",
  width = "100%",
  borderRadius = "4px",
}: MovieSkeletonProp) {
  return (
    <div
      className={styles.skeleton}
      style={{
        height,
        width,
        borderRadius,
      }}
    />
  );
}