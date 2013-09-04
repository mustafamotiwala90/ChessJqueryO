from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def hello_world():
    return render_template('chessboard.html')


if __name__ == '__main__':
    from werkzeug.serving import run_simple
    run_simple('localhost', 5020, app, use_reloader=True, use_debugger=True, use_evalex=True)
