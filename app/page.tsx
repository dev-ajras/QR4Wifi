import { Form } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-200 rounded text-sky-400 flex flex-col items-center md:w-2/5 md:h-3/5 w-screen h-screen">
      <h2 className="mb-3 mt-2">QR4Wifi</h2>
      <Image
        className="mb-3"
        src="/../public/logo.png"
        alt="QR logo"
        width={200}
        height={200}
      />

      <Form componentStyle="flex flex-col items-center" />
    </div>
  );
}
