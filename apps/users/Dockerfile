ARG SERVICE_NAME="users"
ARG PATH_TO_SERVICE="apps/${SERVICE_NAME}"
ARG WORKDIR="/var/www/app"

# Build Stage
FROM node:alpine3.18 as build

ARG SERVICE_NAME
ARG PATH_TO_SERVICE
ARG WORKDIR

RUN mkdir -p ${WORKDIR}
WORKDIR ${WORKDIR}

COPY ./package.json ./
COPY ./${PATH_TO_SERVICE}/package.json ./${PATH_TO_SERVICE}/

RUN yarn install --no-lockfile

COPY ./.eslintrc.js ./
COPY ./nest-cli.json ./
COPY ./tsconfig*.json ./
COPY ./${PATH_TO_SERVICE}/ ./${PATH_TO_SERVICE}/

RUN yarn build ${SERVICE_NAME}

# Runtime Stage 
FROM node:alpine3.18 as runtime

ARG SERVICE_NAME
ARG PATH_TO_SERVICE
ARG WORKDIR

RUN mkdir -p ${WORKDIR}
WORKDIR ${WORKDIR}

COPY package.json ./
COPY ./${PATH_TO_SERVICE}/package.json ./${PATH_TO_SERVICE}/

RUN yarn install --no-lockfile --prod
RUN rm -rf ./apps package.json

COPY --from=build ${WORKDIR}/${PATH_TO_SERVICE}/dist dist

CMD ["node", "dist/main"]