from flask import Flask
from flask import render_template
import pyrebase
app = Flask(__name__)

config = {
	"apiKey": "AIzaSyCUeQILRjIK7-3om5eyIWwFOYx4YPHOvaY",
    "authDomain": "sensortower-dashboard.firebaseapp.com",
    "databaseURL": "https://sensortower-dashboard.firebaseio.com",
	"storageBucket": "sensortower-dashboard.appspot.com",
	"serviceAccount": "./auth/sensortower-dashboard-firebase-adminsdk-xuy2n-65d15773de.json" 
}
firebase = pyrebase.initialize_app(config)

# auth = firebase.auth()
# user = auth.sign_in_with_email_and_password("khazanahamericas@gmail.com", "kai-2019")

db=firebase.database()

@app.route('/')
def hello():
	return render_template("dashboard.html")

# def push_data(latitude, longitude):
# 	new_car = {"name": "Car1", "location": {"latitude":latitude,"longitude":longitude}}
# 	data={"name":"test"}
# 	db.child("cars-spotted").push(new_car)
# 	users = db.child('cars-spotted').get()
# 	print(users.val())
# 	# db.child("users").push()

@app.route('/get_data')
def get_all_data():
	cars = db.child('cars').get()
	print(cars.val())
	return "data"

get_all_data()


if __name__ == "__main__":
    app.run(debug=True)