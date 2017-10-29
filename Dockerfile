FROM mhart/alpine-node:8.7.0
COPY ./ /usr/src/app/
WORKDIR /usr/src/app/
RUN npm install
CMD ["npm", "start"]
EXPOSE 3000