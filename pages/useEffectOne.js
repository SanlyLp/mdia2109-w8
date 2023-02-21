import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "@/styles/useEffectOne.module.css";

export default function useEffectOne() {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    console.log(number);
    setNumber(number + 1);
  }); //infinit loop

  return (
    <div className={styles.main}>
      <Link href="/">Home</Link>
      <div>useEffectOne</div>
      <div>{number}</div>
    </div>
  );
}
