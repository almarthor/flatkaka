import Link from "next/link";

const Vorur = () => {
  return (
    <div className="p-8">
      <h1>Vörur Hérna með id</h1>
      <Link href="/" className="border-solid border-black border-2 m-3">
        Til Baka
      </Link>
    </div>
  );
};

export default Vorur;
