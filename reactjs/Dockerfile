# using node alpine as base image
FROM node:16-alpine

# working dir ./app
WORKDIR /app

# Copy react package.json
ADD . /app

# install dependencies
RUN npm install


# default command
CMD ["npm","start"]
