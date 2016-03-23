FROM debian:stable

COPY solr-4.10.1.tgz /
ADD ckan_install.sh /
ADD ckan_install_p2.sh /
ADD run_ckan.sh /
ADD run_solr.sh /
ADD run.sh /

EXPOSE 5000 8983

CMD ["/run.sh"]
