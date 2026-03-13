import Link from "next/link";
import { volumes, introduction } from "../../lib/data";
import { useRouter } from "next/router";

export default function Volumes() {
  const router = useRouter();

  function handleRandomVolume() {
    const randomIndex = Math.floor(Math.random() * volumes.length);
    const randomVolume = volumes[randomIndex];
    router.push(`/volumes/${randomVolume.slug}`);
  }

  return (
    <>
      <h1>Lord of the Rings</h1>
      <p>{introduction}</p>
      <h2>All Volumes</h2>
      <ul>
        {volumes.map((volume) => (
          <li key={volume.slug}>
            <Link href={`/volumes/${volume.slug}`}>{volume.title}</Link>
          </li>
        ))}
      </ul>
      <button onClick={handleRandomVolume}>RANDOM Volume</button>
    </>
  );
}
