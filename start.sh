#!/bin/bash

echo Doing project set up

echo Doing ng build
pushd frontend/
npm install
ng build
popd

echo Starting django server
exec python3.6 manage.py runserver 8201


