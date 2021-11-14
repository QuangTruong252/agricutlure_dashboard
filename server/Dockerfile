# Dùng image alpine cho nhẹ có (80MB), thay vì cái image gốc tận 800MB
FROM node:14-slim

# Workdir để thiết lập context khi gọi lệnh
WORKDIR /usr/src/api

# Copy từ context của Dockerfile vào context của Docker
COPY ./package.json ./
COPY ./.env ./
COPY ./src ./src





# RUN npm install
# RUN npm rebuild bcrypt --build-from-source


# Mở cổng 5000
EXPOSE 5000

# Khi run image thì sẽ chạy npm run dev
CMD npm install && npm run server