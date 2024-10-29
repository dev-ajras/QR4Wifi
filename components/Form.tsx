"use client";
import Image from "next/image";
import { useState } from "react";
import { FormProps } from "@/types";
import { toDataURL } from "qrcode";

export default function Form({ componentStyle }: FormProps) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [securityType, setSecurityType] = useState("");
  const [url, setUrl] = useState("");
  const [result, setResult] = useState("");
  const [isWifiMode, setIsWifiMode] = useState(true);

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
        
        <div className="flex items-center gap-4 mb-4">
          <span className={`${!isWifiMode && 'text-gray-400'}`}>URL</span>
          <button
            onClick={() => setIsWifiMode(!isWifiMode)}
            className="w-16 h-8 rounded-full bg-sky-400 relative"
          >
            <div className={`w-6 h-6 bg-white rounded-full absolute top-1 transition-all ${isWifiMode ? 'right-1' : 'left-1'}`} />
          </button>
          <span className={`${isWifiMode && 'text-gray-400'}`}>WiFi</span>
        </div>

        <h4 className="w-3/4 text-center mb-3">
          {isWifiMode 
            ? "Accesible, rapido y seguro, inicia la camara de tu celu y apunta hacia el QR para conectarte automaticamente a la red"
            : "Convierte tus enlaces en QR para facil acceso."}
        </h4>

        {isWifiMode ? (
          <>
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Nombre: ej: Tele-123"
              className="rounded w-3/4 mb-3"
            />
            <input
              onChange={(e) => setSecurityType(e.target.value)}
              type="text"
              placeholder="tipo de seguridad: ej: WPA, WPA2"
              className="rounded w-3/4 mb-3"
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="text"
              placeholder="Contraseña de la red: ej: Clavesegura123"
              className="rounded w-3/4 mb-3"
            />
          </>
        ) : (
          <input
            onChange={(e) => setUrl(e.target.value)}
            type="text"
            placeholder="Enlace web: ej: https://ejemplo.com"
            className="rounded w-3/4 mb-3"
          />
        )}

        <button
          onClick={async () => {
            const qrData = await toDataURL(
              isWifiMode
                ? `WIFI:S:${name};T:${securityType};P:${password};H:false;;`
                : url,
              { type: 'image/png' }
            );
            setResult(qrData);
          }}
          className="mt-4 bg-sky-400 text-white p-3 rounded"
        >
          Generar QR
        </button>
      </div>
    );
  }
}
