FROM node:20-alpine

WORKDIR /app/

COPY package.json .

RUN npm install

COPY package.json .
COPY vite.config.ts .

RUN npm install typescript

COPY . .

RUN npm run build

EXPOSE 8080
CMD ["npm", "run", "preview"]