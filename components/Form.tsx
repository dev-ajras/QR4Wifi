"use client";
import Image from "next/image";
import { useState } from "react";
import { FormProps } from "@/types";
import { toDataURL } from "qrcode";

export default function Form({ componentStyle }: FormProps) {
  const [name, setName] = useState("");
  const [result, setResult] = useState("");
  const [url, setUrl] = useState(""); // Cambiar el estado para la URL

  console.log(result);
  if (result != "") {
    return (
      <div className="text-center">
        <Image src={result} alt="qr-generado" width={300} height={300} />
        <h3 className="mt-4 text-black text-xl">{name} Access</h3>
      </div>
    );
  } else {
    return (
      <div className={componentStyle}>
        <Image
          className="mb-3"
          src="https://user-images.githubusercontent.com/90206336/246813391-71b5c14d-8625-4f3b-ac33-60701664d629.png"
          alt="QR logo"
          width={200}
          height={200}
        />
        <h4 className="w-3/4 text-center mb-3">
            Convierte tus enlaces en QR para facil acceso.    </h4>
        <input
          onChange={(e) => {
            setUrl(e.target.value); // Cambiar a setUrl
          }}
          type="text"
          placeholder="Enlace web: ej: https://ejemplo.com"
          className="rounded w-3/4 mb-3"
        />
        <button
          onClick={async () => {
            setResult(
              await toDataURL(url) // Cambiar a url
            );
          }}
          className="mt-4 bg-sky-400 text-white p-3 rounded"
        >
          Generar QR
        </button>
      </div>
    );
  }
}
