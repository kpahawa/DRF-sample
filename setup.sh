#!/bin/sh
clear


echo "install virtual env"
virtualenv --no-site-packages --distribute --python=/usr/bin/python36 venv
echo "finished installing your virtual environment"

echo "NOTE: you must have pip3 installed for the requirements.txt to be installed"

echo "about to activate your virtual environment"
source ./venv/bin/activate ||  echo "virtual environment not found"

echo "successfully activated your virtual environment"

echo "about to install from requirements.txt"
./venv/bin/pip3 install -r requirements.txt

echo "Finished installing dependencies"
