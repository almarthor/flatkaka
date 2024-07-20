"use client";
import { useSearchParams } from "next/navigation";
import { ServiceData } from "../../Components/constants";
import Link from "next/link";

const VorurDetail = () => {
  const searchParams = useSearchParams();
  const title = searchParams.get("title");
  const item = ServiceData.find((service) => service.title === title);

  if (!item) {
    return <div>Item not found</div>;
  }

  return (
    <div className="p-8">
      <div className="text-center mb-8">
        <h1 className="text-5xl font-bold mt-9 text-gray-800">{item.title}</h1>
      </div>
      <div className="flex justify-center relative">
        <div
          className="relative w-screen max-w-screen-lg overflow-hidden rounded-md"
          style={{ height: "calc(100vh * 1 / 3)" }}
        >
          <img
            src={item.Image}
            alt={item.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-white text-center text-2xl font-bold bg-opacity-20">
            <p className="text-white p-8">{item.content}</p>
          </div>
        </div>
      </div>
      <div className="sm:grid grid-cols-2">
        <div className="bg-gray-100 p-8 rounded-md mt-3 sm:mr-4">
          <h1 className="mb-4 font-bold text-xl">Innihaldslýsing</h1>
          <p>{item.ingredients}</p>
        </div>
        <div className="sm:ml-4 p-8">
          <h1 className="mb-4 font-bold text-xl">Næringargildi í 100 gr:</h1>
          <div className="flex justify-between border-b-2 p-2 border-red-500">
            <p>Orka(KJ)</p>
            <p>{item.kj}</p>
          </div>
          <div className="flex justify-between border-b-2 p-2 border-red-500">
            <p>Orka(kkal)</p>
            <p>{item.kkal}</p>
          </div>
          <div className="flex justify-between border-b-2 p-2 border-red-500">
            <p>Fita(g)</p>
            <p>{item.Fita}</p>
          </div>
          <div className="flex justify-between border-b-2 p-2 border-red-500">
            <p>-þar af mettaðar fitusýrur(g)</p>
            <p>{item.fitusyra}</p>
          </div>
          <div className="flex justify-between border-b-2 p-2 border-red-500">
            <p>Kolvetni(g)</p>
            <p>{item.kolvetni}</p>
          </div>
          <div className="flex justify-between border-b-2 p-2 border-red-500">
            <p>-þar af sykurtegundir(g)</p>
            <p>{item.sykur}</p>
          </div>
          <div className="flex justify-between border-b-2 p-2 border-red-500">
            <p>Prótein(g)</p>
            <p>{item.protein}</p>
          </div>
          <div className="flex justify-between border-b-2 p-2 border-red-500">
            <p>Salt(g)</p>
            <p>{item.salt}</p>
          </div>
        </div>
      </div>
      <Link
        href="/vorur"
        className="border-solid border-red-500 border-2 m-3 p-2 inline-block mt-4 hover:border-green-600 rounded-md"
      >
        VÖRUR
      </Link>
    </div>
  );
};

export default VorurDetail;
