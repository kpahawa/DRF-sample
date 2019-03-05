#!/bin/bash

echo Doing project set up

echo collecting static now
exec python3.6 manage.py collectstatic

echo Starting django server
exec python3.6 manage.py runserver 8201


