import React from "react";
import { useEffect } from "react";
import Link from "next/link";
import { useState } from "react";
import styles from "@/styles/useEffectThree.module.css";

export default function useEffectThree() {
  const [number, setNumber] = useState(0);
  const [value, setValue] = useState(-10);

  useEffect(() => {
    setValue(value + 10);
  }, [number]); // whenever this number changes, run useEffcet

  return (
    <>
      <div className={styles.home}>
        <Link href="/">Home</Link>
      </div>
    
      <div className={styles.useEff}>
      <div>
        <button className={styles.btn} onClick={() => setNumber(number + 1)}>Click me</button>
      </div>
      <div >useEffectThree : </div>
      <div>Value : {value}</div>

      </div>
     
    </>
  );
}
