import { useRouter } from "next/router";
import { volumes } from "../../lib/data";
import Link from "next/link";
import Image from "next/image";

export default function VolumeDetail() {
  const router = useRouter();
  const { slug } = router.query;

  const volumeData = volumes.find((volume) => volume.slug === slug);

  if (!volumeData) {
    return <h1>Volume not found!</h1>;
  }

  return (
    <>
      <Link href="/volumes">Back to Volumes </Link>
      <h1>{volumeData.title}</h1>
      <p>{volumeData.description}</p>
      <ul>
        {volumeData.books.map((book) => (
          <li key={book.ordinal}>
            {book.ordinal}: {book.title}
          </li>
        ))}
      </ul>
      <Image
        src={`${volumeData.cover}`}
        width={140}
        height={230}
        alt="Picture of the book"
      />
    </>
  );
}
