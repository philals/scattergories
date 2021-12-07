import Head from "next/head";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [playClicked, setPlayClicked] = useState(false);

  useEffect(() => {
    if (playClicked) {
      const audio = new Audio("./xmas.mp3");
      audio.volume = parseFloat(1);
      audio.play();
    }
  }, [playClicked]);

  return (
    <div className={styles.container}>
      <Head>
        <title>New Game</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Scattergories</h1>
        <p>.</p>
        <button
          styles={{ "touch-action": "manipulation" }}
          onClick={() => setPlayClicked(true)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          New Game
        </button>
      </main>
      v1
    </div>
  );
}
