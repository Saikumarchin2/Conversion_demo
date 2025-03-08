Currency Converion Rate 
Overview
The Currency Conversion Project is a web-based application that enables users to convert amounts between 
different currencies using predefined exchange rates. It offers a user-friendly interface for quick conversions 
and maintains a history of past transactions for reference.

Features
Real-Time Currency Conversion: Convert amounts between various currencies using predefined exchange rates.
Conversion History: Automatically save each conversion with details like currency codes, amounts, converted values, date, time, and status.
User-Friendly Interface: Intuitive design with clear input fields and buttons for seamless user experience.

How It Works
Input Currency Code and Amount:
Users enter the three-letter currency code (e.g., USD, EUR) and the amount they wish to convert.
Perform Conversion:
Upon submission, the application calculates the converted amount based on predefined exchange rates.
Display Result:
The converted amount is displayed on the screen, and the conversion details are saved to the history.
View Conversion History:
Users can view their past conversions by clicking the "Show History" button, which navigates to the history.html page displaying a table of all previous transactions.

Code Structure
index.html: Main HTML file containing the form for currency conversion and the button to navigate to the conversion history.
history.html: HTML file dedicated to displaying the conversion history in a structured table format.
styles.css: CSS file for styling the application, including layout, colors, and responsiveness.
script.js: JavaScript file handling form submissions, performing currency conversions, and managing conversion history storage and display.
