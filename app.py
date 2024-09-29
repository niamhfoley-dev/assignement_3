import json
import os
import secrets

from flask import Flask, render_template, request, flash, redirect, url_for

app = Flask(__name__)

app.secret_key = secrets.token_hex(16)



# Home Page Route
@app.route('/')
def home():
    return render_template('home.html')


# About Page Route
@app.route('/about')
def about():
    return render_template('about.html')


# Menu Route
@app.route('/menu')
def menu():
    # Get the absolute path to the JSON file
    menu_file_path = os.path.join(app.root_path, 'menu.json')

    # Read the menu items from the JSON file
    with open(menu_file_path, 'r') as json_file:
        menu_items = json.load(json_file)

    # Get unique categories
    categories = sorted(set(item['category'] for item in menu_items))

    return render_template('menu.html', menu_items=menu_items, categories=categories)


# Events Page Route
@app.route('/events')
def events():
    events_file_path = os.path.join(app.root_path, 'events.json')

    try:
        with open(events_file_path, 'r') as json_file:
            events_list = json.load(json_file)
    except FileNotFoundError:
        print("Events JSON file not found.")
        events_list = []
    except json.JSONDecodeError:
        print("Error decoding JSON.")
        events_list = []

    # Sort events by date
    events_list = sorted(events_list, key=lambda x: x['date'])

    return render_template('events.html', events=events_list)

# Route to handle booking submissions
@app.route('/book_event', methods=['POST'])
def book_event():
    name = request.form.get('name')
    email = request.form.get('email')
    event_title = request.form.get('event_title')

    # Here, you could save the booking to a database or send an email.
    # For this example, we'll just flash a success message.

    flash(f'Thank you, {name}! You have successfully booked "{event_title}".')
    return redirect(url_for('events'))


# Contact Page Route
@app.route('/contact', methods=['GET', 'POST'])
def contact():
    if request.method == 'POST':
        # Handle form submission
        name = request.form.get('name')
        email = request.form.get('email')
        subject = request.form.get('subject')
        message = request.form.get('message')

        # Process the form data here (e.g., send email, save to database)
        # For this example, we'll just flash a success message

        flash('Thank you for reaching out! Your message has been received.', 'success')

        return redirect(url_for('contact'))

    # For GET request, render the contact page
    return render_template('contact.html')



if __name__ == '__main__':
    app.run(debug=True)
