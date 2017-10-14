FROM mhart/alpine-node:8.7.0

COPY package.json /usr/src/client/
COPY . /usr/src/client

WORKDIR /usr/src/client
RUN npm install
CMD ["npm", "start"]

ARG APIHOST=http://api.twitter.com
ENV APIHOST $APIHOST
ARG PORT=4200
ENV PORT $PORT


EXPOSE $PORT 