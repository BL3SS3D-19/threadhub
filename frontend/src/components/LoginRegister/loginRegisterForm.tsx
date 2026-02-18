"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { usersService } from "@/services/users.service";
import { CreateUserDTO } from "@/lib/types";

export default function LoginRegisterForm() {
  const [mode, setMode] = useState<"login" | "register">("login");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState<any>({});

  const toggleMode = () => {
    setMode(mode === "login" ? "register" : "login");
    setError(null);
    setFormData({});
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      if (mode === "login") {
        const { email, password } = formData;
        if (!email || !password) throw new Error("Faltan campos obligatorios");

        const user = await usersService.login(email, password);
        console.log("Usuario logueado:", user);
        // Aquí podrías guardar el token o el user en un estado global / context
      } else {
        // Register
        const userDTO: CreateUserDTO = {
          username: formData.username,
          email: formData.email,
          password: formData.password,
          avatarUrl: formData.avatarUrl || undefined,
        };

        const newUser = await usersService.register(userDTO);
        console.log("Usuario registrado:", newUser);
        // Podrías cambiar a modo login automáticamente
        setMode("login");
      }
    } catch (err: any) {
      console.error(err);
      setError(err?.message || "Ocurrió un error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[hsl(var(--background))] p-6">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className={`w-full ${mode === "register" ? "max-w-2xl" : "max-w-md"} rounded-[var(--radius)] shadow-2xl p-8 bg-[hsl(var(--card))] transition-all duration-300`}
      >
        <h2 className="text-3xl font-heading text-center mb-6 tracking-wide">
          {mode === "login" ? "Iniciar sesión" : "Crear cuenta"}
        </h2>

        {error && (
          <div className="mb-4 text-red-500 font-semibold text-sm">{error}</div>
        )}

        <AnimatePresence mode="wait">
          {mode === "login" ? (
            <motion.form
              key="login"
              initial={{ opacity: 0, x: -18 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 18 }}
              transition={{ duration: 0.3 }}
              className="space-y-4 w-full h-full min-w-80 min-h-60"
              onSubmit={handleSubmit}
            >
              <div>
                <label className="block text-sm font-strong mb-1">Correo</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email || ""}
                  onChange={handleChange}
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
                  value={formData.password || ""}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full p-3 rounded-[var(--radius)] border border-[hsl(var(--border))] bg-[hsl(var(--input))] text-[hsl(var(--foreground))] placeholder:text-[hsl(var(--muted-foreground))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--ring))] transition"
                  required
                />
              </div>

              <Button type="submit" disabled={loading}>
                {loading ? "Cargando..." : "Entrar"}
              </Button>
            </motion.form>
          ) : (
            <motion.form
              key="register"
              initial={{ opacity: 0, x: 18 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -18 }}
              transition={{ duration: 0.3 }}
              className="space-y-4 min-w-96 w-full"
              onSubmit={handleSubmit}
            >
              <div>
                <label className="block text-sm font-strong mb-1">Nombre de usuario</label>
                <input
                  type="text"
                  name="username"
                  value={formData.username || ""}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-[var(--radius)] border border-[hsl(var(--border))] bg-[hsl(var(--input))] text-[hsl(var(--foreground))] placeholder:text-[hsl(var(--muted-foreground))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--ring))] transition"
                />
              </div>

              <div>
                <label className="block text-sm font-strong mb-1">Correo</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email || ""}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-[var(--radius)] border border-[hsl(var(--border))] bg-[hsl(var(--input))] text-[hsl(var(--foreground))] placeholder:text-[hsl(var(--muted-foreground))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--ring))] transition"
                />
              </div>

              <div>
                <label className="block text-sm font-strong mb-1">Contraseña</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password || ""}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-[var(--radius)] border border-[hsl(var(--border))] bg-[hsl(var(--input))] text-[hsl(var(--foreground))] placeholder:text-[hsl(var(--muted-foreground))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--ring))] transition"
                />
              </div>

              <Button type="submit" disabled={loading}>
                {loading ? "Cargando..." : "Registrarse"}
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
