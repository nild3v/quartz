FROM buildpack-deps:trixie-curl

ARG TZ
ARG LANG
ARG LOCALE
ARG LC_ALL

ENV TZ=${TZ}
ENV LANG=${LANG}
ENV LOCALE=${LOCALE}
ENV LC_ALL=${LC_ALL}

RUN apt-get update \
    && apt-get install -y starship locales locales-all \
    && rm -rf /var/lib/apt/lists/*
