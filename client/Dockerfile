FROM node:14-slim

# Workdir để thiết lập context khi gọi lệnh
WORKDIR /usr/src/client

# Copy từ context của Dockerfile vào context của Docker
COPY ./package.json ./
COPY ./yarn.lock ./
COPY ./public ./public
COPY ./src ./src


# Mở cổng 3000
EXPOSE 3000

# Khi run image thì sẽ chạy npm run dev
# Ở đây mình thiết lập script dev là sẽ chạy nodemon
CMD yarn install && yarn start