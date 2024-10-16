from flask import Flask,render_template,request

app=Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def email_splitter():
    username = None
    domain = None
    error_message = None

    if request.method == 'POST':
        email = request.form['email']  # Get the email input from the form

        # Validate the email by checking for '@' character
        if email.count("@") != 1:
            error_message = "Not a valid email address"
        else:
            # Split the email into username and domain
            username = email[:email.index("@")]
            domain = email[email.index("@") + 1:]

    # Render the result in the HTML template
    return render_template('index.html', username=username,domain=domain, error_message=error_message)


if __name__=='__main__':
    app.run(debug=True)