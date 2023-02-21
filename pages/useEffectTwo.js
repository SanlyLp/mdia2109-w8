import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "@/styles/useEffectTwo.module.css"

export default function useEffectTwo() {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    console.log(number);
    setNumber(number + 50);
  }, []); //only runs on page load just once

  return (
    <>
    <div className= {styles.main}>
    <Link href="/">Home</Link>
    </div>
    <div className={styles.useEff}>

      <div>useEffectTwo : </div>
      <div>{number}</div>
    </div>

    
  
    </>
  );
}
