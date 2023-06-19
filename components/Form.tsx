"use client";
import { useState } from "react";
import { Button } from "./Button";
import { FormProps } from "@/types";
import { toDataURL } from "qrcode";
let Qr = "";
export async function Form({ componentStyle }: FormProps) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [securityType, setSecurityType] = useState("");
  console.log(Qr);
  async function generate() {
    const generated = await toDataURL(
      `WIFI:S:${name};T:${securityType};P:${password};H:false;;`
    );
    Qr += generated;
  }
  return (
    <div className={componentStyle}>
      <h4 className="w-3/4 text-center mb-3">
        Accesible, rapido y seguro, inicia la camara de tu celu y apunta hacie
        el QR para conectarte automaticamente a la red
      </h4>
      <input
        onChange={(e) => {
          setName(e.target.value);
        }}
        type="text"
        placeholder="Nombre: ej: Tele-123"
        className="rounded w-3/4 mb-3"
      />
      <input
        onChange={(e) => {
          setSecurityType(e.target.value);
        }}
        type="text"
        placeholder="tipo de seguridad: ej: WPA, WPA2"
        className="rounded w-3/4 mb-3"
      />
      <input
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        type="text"
        placeholder="Contraseña de la red: ej: Clavesegura123"
        className="rounded w-3/4 mb-3"
      />
      <Button
        work={generate}
        value="Generar QR"
        componentStyle="mt-4 bg-sky-400 text-white p-3 rounded"
      />
    </div>
  );
}
