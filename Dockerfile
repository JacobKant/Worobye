FROM mhart/alpine-node:8.7.0
COPY ./ /usr/src/app/
WORKDIR /usr/src/app/
RUN npm install \
     && npm --prefix ./client install \
     && npm --prefix ./client install --only=dev \
     && npm --prefix ./client run build

CMD ["npm", "start"]

EXPOSE 3000