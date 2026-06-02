FROM mhart/alpine-node:14.17.0

# add project to build
COPY src /root/api/src
COPY package.json /root/api/package.json
COPY newrelic.js /root/api/newrelic.js
WORKDIR /root/api

RUN npm install

ENV PORT 3000

EXPOSE 3000

CMD ["node", "src/bin/www"]
