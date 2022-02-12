# using node alpine as base image
FROM node:14-alpine

# working dir ./app
WORKDIR /app

# Copy react package.json
COPY ./package.json .
COPY ./package-lock.json .

# install dependencies
RUN npm audit fix --force

# COPY client directory folder
COPY . .

# default command
CMD ["npm","start"]