from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_login import (
    LoginManager,
    login_user,
    logout_user,
    login_required,
    current_user,
)
from werkzeug.security import generate_password_hash, check_password_hash
from flask_migrate import Migrate

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = (
    "mysql://1234!@#$@localhost:root@localhost:3306/userdatadb"
)
app.config["SECRET_KEY"] = "39a8472e8fa391fc"
db = SQLAlchemy(app)
migrate = Migrate(app, db)
login_manager = LoginManager(app)
login_manager.login_view = "login"


class Admin(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    password_hash = db.Column(db.String(128), nullable=False)

    def set_password(self, password):
        self.password_hash = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password_hash, password)


@login_manager.user_loader
def load_user(admin_id):
    return Admin.query.get(int(admin_id))


@app.route("/register", methods=["POST"])
def register():
    data = request.json
    username = data.get("username")
    password = data.get("password")
    if username is None or password is None:
        return jsonify({"message": "Username and password are required"}), 400
    if Admin.query.filter_by(username=username).first():
        return jsonify({"message": "User already exists"}), 400

    admin = Admin(username=username)
    admin.set_password(password)
    db.session.add(admin)
    db.session.commit()
    return jsonify({"message": "Admin registered successfully"}), 201


@app.route("/login", methods=["POST"])
def login():
    data = request.json
    username = data.get("username")
    password = data.get("password")
    admin = Admin.query.filter_by(username=username).first()
    if admin is None or not admin.check_password(password):
        return jsonify({"message": "Invalid credentials"}), 401
    login_user(admin)
    return jsonify({"message": "Login successful"}), 200


@app.route("/logout", methods=["POST"])
@login_required
def logout():
    logout_user()
    return jsonify({"message": "Logout successful"}), 200


@app.route("/admin-data", methods=["GET"])
@login_required
def get_admin_data():
    # Admin dashboard data fetching logic
    return jsonify({"message": "Admin data"}), 200


if __name__ == "__main__":
    app.run(debug=True)


# from flask import Flask, jsonify, request
# from flask_sqlalchemy import SQLAlchemy

# # from flask_migrate import Migrate
# from flask_cors import CORS

# app = Flask(__name__)
# CORS(app)


# # app.config["SQLALCHEMY_DATABASE_URI"] = (
# #     "postgresql://postgres:postgres@localhost/arnoldsdb"
# # )
# # app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

# # db = SQLAlchemy(app)
# # #migrate = Migrate(app, db)


# # # define user model
# # class User(db.Model):
# #     id = db.Column(db.Integer, primary_key=True)
# #     name = db.Column(db.String(100), nullable=False)
# #     phone_number = db.Column(db.String(15), nullable=False)
# #     device_imei = db.Column(db.String(15), nullable=False)
# #     complaint = db.Column(db.String(255))

# #     def __repr__(self):
# #         return f"<User {self.name}>"


# # # initialise the database
# # with app.app_context():
# #     db.create_all()


# # class Admin(db.Model):
# #     id = db.Column(db.Integer, primary_key=True)
# #     name = db.Column(db.String(80), nullable=False)
# #     email = db.Column(db.String(120), unique=True, nullable=False)


# @app.route("/")
# def home():
#     return jsonify(message="Welcome to the Flask Backend!")


# @app.route("/api/register", methods=["POST"])
# def register_user():
#     data = request.json
#     new_user = User(
#         name=data["name"],
#         phone_number=data["phone_number"],
#         device_imei=data["device_imei"],
#         complaint=data["complaint"],
#     )
#     db.session.add(new_user)
#     db.session.commit()
#     return jsonify({"message": "User registered successfully"}), 201


# @app.route("/api/users", methods=["GET"])
# def get_users():
#     users = User.query.all()
#     return jsonify(
#         [
#             {
#                 "id": user.id,
#                 "name": user.name,
#                 "phone_number": user.phone_number,
#                 "device_imei": user.device_imei,
#                 "complaint": user.complaint,
#             }
#             for user in users
#         ]
#     )


# if __name__ == "__main__":
#     app.run(debug=True)

# @app.route("/api/user", methods=["GET", "POST"])
# def manage_users():
#     if request.method == "GET":
#         users = User.query.all()
#         return jsonify(
#             [{"id": user.id, "name": user.name, "email": user.email} for user in users]
#         )
#     elif request.method == "POST":
#         data = request.json
#         new_user = User(name=data["name"], email=data["email"])
#         db.session.add(new_user)
#         db.session.commit()
#         return jsonify({"message": "User created successfully"}), 201


# @app.route("/api/admin", methods=["GET", "POST"])
# def manage_admins():
#     if request.method == "GET":
#         admins = Admin.query.all()
#         return jsonify(
#             [
#                 {"id": admin.id, "name": admin.name, "email": admin.email}
#                 for admin in admins
#             ]
#         )
#     elif request.method == "POST":
#         data = request.json
#         new_admin = Admin(name=data["name"], email=data["email"])
#         db.session.add(new_admin)
#         db.session.commit()
#         return jsonify({"message": "Admin created successfully"}), 201


# if __name__ == "__main__":
#     app.run(debug=True)
