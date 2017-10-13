FROM mhart/alpine-node:8.7.0

COPY package.json /usr/src/app/
# COPY . /usr/src/app

WORKDIR /usr/src/app
RUN npm install
CMD ["npm", "start"]

ARG APIHOST=http://api.twitter.com
ENV APIHOST $APIHOST
ARG PORT=3000
ENV PORT $PORT

VOLUME ["/usr/src/app"]

EXPOSE $PORT