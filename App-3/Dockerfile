FROM node:20-alpine
WORKDIR /app3
COPY package*.json ./
RUN npm install
COPY . .
expose 3002
CMD ["node","app3.js"]
