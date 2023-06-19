"use client";
import React from "react";
import { Input } from "./Input";
import { Button } from "./Button";
import { FormProps } from "@/types";
export function Form({ componentStyle }: FormProps) {
  return (
    <div className={componentStyle}>
      <h4 className="w-3/4 text-center mb-3">
        Accesible, rapido y seguro, inicia la camara de tu celu y apunta hacie
        el QR para conectarte automaticamente a la red
      </h4>
      <Input
        type="text"
        placeholder="Nombre: ej: Tele-123"
        componentStyle="rounded w-3/4 mb-3"
      />
      <Input
        type="text"
        placeholder="tipo de seguridad: ej: WPA, WPA2"
        componentStyle="rounded w-3/4 mb-3"
      />
      <Input
        type="text"
        placeholder="Contraseña de la red: ej: Clavesegura123"
        componentStyle="rounded w-3/4 mb-3"
      />
      <Button
        to="/generado"
        value="Generar QR"
        componentStyle="mt-4 bg-sky-400 text-white p-3 rounded"
      />
    </div>
  );
}
