FROM node as build-stage
WORKDIR /build/
COPY frontend ./frontend/
RUN cd frontend && npm install && npm run build

FROM node
WORKDIR /app/
COPY --from=build-stage /build/frontend/build ./backend/build
COPY backend ./backend
RUN cd backend && npm install
WORKDIR /app/backend
CMD ["npm", "start"]