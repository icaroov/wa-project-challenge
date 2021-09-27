################################
########## DEVELOPMENT #########
################################

# Specify the version of Node.js to use
FROM node:14 AS development

# Add a work directory
WORKDIR /backend/app

# Cache and Install dependencies
COPY package*.json ./
RUN npm install

# Copy app files to the container
COPY . .

# Build the application
RUN npm run build

# Expose port
EXPOSE 5000

################################
########## PRODUCTION ##########
################################

FROM node:14 AS production

ENV NODE_ENV production

WORKDIR /backend/app

COPY --from=development /backend/app .

EXPOSE 5000

CMD ["node", "dist/main"]