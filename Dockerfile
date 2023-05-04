FROM node:18-alpine
RUN apk add --no-cache python3 g++ make 
WORKDIR /app
COPY . .
RUN npm install --force
CMD npm run animal-serve
