# 1. Clonar tu repo y crear estructura backend
git clone https://github.com/BL3SS3D-19/threadhub.git
cd threadhub

# 2. Crear carpeta backend y archivos
mkdir backend
mkdir backend/src
mkdir backend/src/routes
mkdir backend/prisma

# Copiar todos los archivos que te pasé

# 3. Instalar dependencias del backend
cd backend
npm install
cd ..

# 4. Levantar Docker (PostgreSQL + Backend + Frontend)
docker-compose up -d

# 5. Ver logs
docker-compose logs -f

# 6. Ejecutar migraciones (primera vez)
docker-compose exec backend npx prisma migrate dev --name init

# 7. Abrir Prisma Studio (opcional)
docker-compose exec backend npx prisma studio

8. URLs de acceso:

Frontend: http://localhost:5173
Backend API: http://localhost:3000
Prisma Studio: http://localhost:5555 (cuando lo ejecutes)
PostgreSQL: localhost:5432