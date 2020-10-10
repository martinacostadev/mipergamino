# mipergamino

cd mipergamino
cd server
npm update
npm install
npm run dev

cd ..
cd client
npm update
npm install
npm run dev

cd ..
docker-compose up --build

Change Proxy URL in:
client/package.json
client/pages/alquileres.js 
and .env file


docker-compose.yml

mongo:
    volumes:
      - ./mongo_data:/data/db (Windows)
      - data-volume:/data/db (Mac)