FROM uscc-centos-py36-ora12c-nginx-anglr8:latest

WORKDIR /app

ADD . /app

ADD start.sh /app/start.sh

RUN chmod +x /app/start.sh
RUN chmod +x /app/frontend/

RUN mkdir /app/staticfiles/
RUN chmod +x /app/staticfiles/ 

RUN  chmod -R 777 /app

RUN mkdir /.npm
RUN chmod -R 777 /.npm

RUN pip3.6 install -r requirements.txt

EXPOSE 8201

ENV NAME ChatApp
USER root

CMD ["/app/start.sh"]
