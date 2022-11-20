import Image from "next/image";
import styles from "./page.module.css";
import Socials from "./Socials";

export default function Home() {
   return (
      <div className={styles.container}>
         <main className={styles.main}>
            <h1 className="text-5xl text-center font-bold text-blue-400">
               Quintessence ADGITM (Site work in progress.)
            </h1>

            <h2 className="text-4xl underline text-rose-800 py-8 font-semibold">
               <a href="http://qys.quintdebsoc.in">
                  Quintessence Youth Summit 2022
               </a>
            </h2>

            <Socials />
         </main>

         <footer className={styles.footer}>
            <a
               href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
               target="_blank"
               rel="noopener noreferrer"
            >
               Quintessence, All rights reserved.
            </a>
         </footer>
      </div>
   );
}
