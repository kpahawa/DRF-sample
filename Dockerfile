FROM nas-redesign-test/centos

WORKDIR /app

ADD . /app

ADD start.sh /app/start.sh
RUN chmod +x /app/start.sh

RUN yum install -y yum-utils
RUN yum groupinstall -y development
RUN yum install -y ius-release-1.0-15.ius.centos7.noarch.rpm
RUN yum install -y python36u
RUN yum install -y python36u-pip

RUN pip3.6 install -r requirements.txt

EXPOSE 15672
EXPOSE 5672
EXPOSE 8201
EXPOSE 8200

ENV NAME ChatApp
USER root

CMD ["/app/start.sh"]
