FROM uscc-centos-py36-ora12c:latest

WORKDIR /app

ADD . /app

ADD start.sh /app/start.sh
RUN chmod +x /app/start.sh

RUN pip3.6 install -r requirements.txt

RUN python3.6 manage.py makemigrations
RUN python3.6 manage.py migrate
RUN python3.6 manage.py collectstatic

EXPOSE 15672
EXPOSE 5672
EXPOSE 8201

ENV NAME ChatApp
USER root

CMD ["/app/start.sh"]
