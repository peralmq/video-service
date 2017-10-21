FROM openjdk:8-jdk-alpine
FROM gradle:jdk8-alpine

USER root

COPY . /target
WORKDIR /target
RUN gradle build

RUN addgroup appgroup && adduser -S -G appgroup appuser
RUN chown -R appuser:appgroup .
USER appuser

CMD ["java", \
     "-server", \
     "-Xms4g", \
     "-Xmx4g", \
     "-XX:+UseG1GC", \
     "-XX:MaxGCPauseMillis=100", \
     "-XX:+UseStringDeduplication", \
     "-jar", "build/libs/stack-kotlin.jar"]
