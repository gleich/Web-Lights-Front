# Building Stage
FROM node:alpine as builder

WORKDIR "/app"

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

# Production Stage:
FROM nginx
COPY --from=builder /app/build /usr/share/nginx/html

