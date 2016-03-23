FROM ecosis/ckan-base:0.0.1

ARG branch=dev

ADD install.sh /
RUN /install.sh $branch

CMD ["/run.sh"]
