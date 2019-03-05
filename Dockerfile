FROM uscc-centos-py36-ora12c-nginx-anglr8:latest

WORKDIR /app

ADD . /app

ADD start.sh /app/start.sh

RUN chmod +x /app/start.sh
RUN chmod +x /app/frontend/

RUN mkdir /app/staticfiles/
RUN chmod +x /app/staticfiles/ 

RUN pip3.6 install -r requirements.txt

EXPOSE 15672
EXPOSE 5672
EXPOSE 8201
EXPOSE 8200

ENV NAME ChatApp
USER root

CMD ["/app/start.sh"]
