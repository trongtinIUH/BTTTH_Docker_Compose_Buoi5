FROM maven:3.8.5-openjdk-11 AS build
WORKDIR /app
COPY pom.xml /app
COPY ./src /app/src
RUN mvn -f /app/pom.xml clean package

FROM openjdk:11
WORKDIR /app
COPY --from=build /app/target/voting-worker-1.0-SNAPSHOT.jar /app/voting-worker.jar
CMD ["java", "-jar", "/app/voting-worker.jar"]