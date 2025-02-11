from flask import Flask, url_for, render_template, request
from markupsafe import escape

app = Flask(__name__)

@app.get("/")
def render_index():
    return render_template("index.html",person = escape(request.args.get('key','')))

# @app.post("/")
# def update_index():
#     return render_template("index.html",person = "bro")

@app.route("/<name>")
def hello_man(name):
    return f"<p>hello {escape(name)}</p>"

# with app.test_request_context():
#     print(url_for("hello_man", name="bro"))