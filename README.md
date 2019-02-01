Displays the information on the sensortower in a web app.

Setup instuctions:

1.) Outside of the folder install virtualenv using:

pip3 install virtualenv

Then create a virtual environment with:

virtualenv venv

2.) Activate the virtual environment with:

source venv/bin/activate

3.) Go into the folder and install the dependencies specified by requirements.txt

pip3 install -r requirements.txt

4.) Run the application by running main.py with

 python3 main.py

Alternatively, tell FLASK the entry point for your app:

set FLASK_APP=main

set FLASK_ENV=development

flask run 
