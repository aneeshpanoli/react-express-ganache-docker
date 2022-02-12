# using node alpine as base image
FROM node:14-alpine

# working dir ./app
WORKDIR /app

# Install the prerequisites to install the web3 and other ethereum npm packages
RUN apk update && apk upgrade && apk add --no-cache bash git openssh
RUN apk add --update python3 krb5 krb5-libs gcc make g++ krb5-dev

# Copy the package.json
COPY ./package.json .
COPY ./package-lock.json .

# Install the dependencies

RUN npm audit fix --force
# RUN npm install

# Copy the server and ethereum module
COPY . .

# set the default command
CMD ["npm","start"]