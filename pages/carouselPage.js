import Carousel from "@/components/carousel";
import Link from "next/link";
import styles from "@/styles/carouselPage.module.css"

export default function carouselPage() {
  return (
    <div className={styles.main}>
      <Link href="/">Home</Link>
      <Carousel />
    </div>
  );
}
