"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import '../../app/globals.css';
import {Button } from '@/components/ui/button';

export default function LoginRegisterForm() {
  const [mode, setMode] = useState("login");

  const toggleMode = () => setMode((m) => (m === "login" ? "register" : "login"));

  return (
    <div className="min-h-screen flex items-center justify-center bg-[hsl(var(--background))] p-6">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className={`
          w-full 
          ${mode === "register" ? "max-w-2xl" : "max-w-md"} 
          rounded-[var(--radius)] 
          shadow-2xl 
          p-8 
          bg-[hsl(var(--card))]
          transition-all duration-300
        `}
      >

      
        <h2 className="text-3xl font-heading text-center mb-6 tracking-wide">
          {mode === "login" ? "Iniciar sesión" : "Crear cuenta"}
        </h2>

        <AnimatePresence mode="wait">
          {mode === "login" ? (
            <motion.form
              key="login"
              initial={{ opacity: 0, x: -18 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 18 }}
              transition={{ duration: 0.3 }}
              className="space-y-4 w-full h-full min-w-80 min-h-60"
            >
              <div>
                <label className="block text-sm font-strong mb-1">Correo</label>
                <input
                  type="email"
                  name="email"
                  placeholder="correo@example.com"
                  className="w-full p-3 rounded-[var(--radius)] border border-[hsl(var(--border))] bg-[hsl(var(--input))] text-[hsl(var(--foreground))] placeholder:text-[hsl(var(--muted-foreground))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--ring))] transition"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-strong mb-1">Contraseña</label>
                <input
                  type="password"
                  name="password"
                  placeholder="••••••••"
                  className="w-full p-3 rounded-[var(--radius)] border border-[hsl(var(--border))] bg-[hsl(var(--input))] text-[hsl(var(--foreground))] placeholder:text-[hsl(var(--muted-foreground))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--ring))] transition"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full py-3 rounded-[var(--radius)] font-strong bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] hover:brightness-105 active:scale-[0.995] transition"
              >
                Entrar
              </Button>
            </motion.form>
          ) : (
            <motion.form
              key="register"
              initial={{ opacity: 0, x: 18 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -18 }}
              transition={{ duration: 0.3 }}
              className="space-y-4 min-w-96 w-full "
            >
              <div>
                <label className="block text-sm font-strong mb-1">Nombre</label>
                <input
                  type="text"
                  name="firstName"
                  className="w-full p-3 rounded-[var(--radius)] border border-[hsl(var(--border))] bg-[hsl(var(--input))] text-[hsl(var(--foreground))] placeholder:text-[hsl(var(--muted-foreground))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--ring))] transition"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-strong mb-1">Apellidos</label>
                <input
                  type="text"
                  name="lastName"
                  className="w-full p-3 rounded-[var(--radius)] border border-[hsl(var(--border))] bg-[hsl(var(--input))] text-[hsl(var(--foreground))] placeholder:text-[hsl(var(--muted-foreground))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--ring))] transition"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-strong mb-1">Fecha de nacimiento</label>
                <input
                  type="date"
                  name="dob"
                  className="w-full p-3 rounded-[var(--radius)] border border-[hsl(var(--border))] bg-[hsl(var(--input))] text-[hsl(var(--foreground))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--ring))] transition"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-strong mb-1">Negocio (opcional)</label>
                <input
                  type="text"
                  name="business"
                  className="w-full p-3 rounded-[var(--radius)] border border-[hsl(var(--border))] bg-[hsl(var(--input))] text-[hsl(var(--foreground))] placeholder:text-[hsl(var(--muted-foreground))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--ring))] transition"
                />
              </div>

              <Button
                type="submit"
                className="w-full py-4 !mt-8 rounded-[var(--radius)] font-strong bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] hover:brightness-105 active:scale-[0.995] transition"
              >
                Registrarse
              </Button>
            </motion.form>
          )}
        </AnimatePresence>

        <button
          onClick={toggleMode}
          className="w-full mt-4 text-sm font-strong text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--accent))] transition"
          aria-pressed={mode === "register"}
        >
          {mode === "login"
            ? "¿No tienes cuenta? Regístrate"
            : "¿Ya tienes cuenta? Inicia sesión"}
        </button>
      </motion.div>
    </div>
  );
}
