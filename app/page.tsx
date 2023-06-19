import Form from "../components/Form";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-200 rounded text-black font-medium flex flex-col items-center md:w-2/5 md:h-3/5 w-screen h-screen">
      <h2 className="mb-3 mt-2">QR4Wifi</h2>
      <Form componentStyle="flex flex-col items-center" />
    </div>
  );
}
