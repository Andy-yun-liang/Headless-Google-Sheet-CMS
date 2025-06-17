FROM node:22-alpine

WORKDIR /app 

COPY package.json package-lock.json* ./

RUN npm install

COPY . .

RUN npm run build 

RUN npm install -g serve 

EXPOSE 8741 

#we are going to run our application in port 8741
CMD ["serve","dist","-l","8741"]
