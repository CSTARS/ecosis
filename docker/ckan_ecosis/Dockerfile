FROM ecosis/ckan-base:0.0.1

ARG branch=dev

ADD run_ckan.sh /
ADD install.sh /
RUN /install.sh $branch

CMD ["/run.sh"]
