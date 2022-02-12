# base image - node:alpine
FROM node:alpine

# set the working directory to /app
WORKDIR /app

# install ganache-cli globally
RUN npm install -g ganache-cli
ENV NODE_OPTIONS="--openssl-legacy-provider"
# set the command ganache-cli -h 0.0.0.0 
# for docker ganache-cli host on 0.0.0.0
CMD ["ganache-cli","-h","0.0.0.0"]