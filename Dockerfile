FROM node:18-alpine
LABEL maintainer="admin@dreampond.org"

RUN apk update && apk upgrade && \
    apk add --no-cache bash git npm

WORKDIR /src
RUN git clone https://github.com/quivsoth/nightmare.clare

WORKDIR /src/nightmare.clare

#CMD ["npm", "install"]
RUN npm i
#RUN npm run build

EXPOSE 3000
ENV PORT 3000
CMD ["npm", "start"]