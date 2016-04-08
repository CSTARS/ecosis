FROM ecosis/ecosis-base:0.0.1

ARG branch=dev

COPY install.sh /install.sh
COPY run.sh /run.sh

RUN /install.sh $branch

EXPOSE 3000

CMD ['/run.sh']
