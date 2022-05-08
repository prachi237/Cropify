import os
from flask import Flask

def create_app():
	app = Flask(__name__)
	app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY')
	# app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///site.db"
	# app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True

	from cropify.api.routes import api
	app.register_blueprint(api)

	return app