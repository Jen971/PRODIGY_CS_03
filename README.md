##--- Password Strength Checker Chrome Extension ---##
A real-time password strength checker for Chrome that helps users create strong and secure passwords while signing up or updating passwords on any website. This extension provides live visual feedback, detailed warnings, and advanced checks for weak password patterns.

## Features ##
1)Real-time password strength detection as you type.

2) Visual feedback:

3)Red underline & border → weak password

4)Green underline & border → strong password

--Advanced password checks:--

Minimum 8 characters

Mixed letters, numbers, and symbols

Detects numeric-only or alphabet-only passwords

Detects repeated characters

Detects birth year patterns (19XX, 20XX)

Detects inclusion of email username or personal name

Detects common weak passwords (123456, password, qwerty, etc.)

-- Tooltip and live text feedback below the password field

--Manual popup UI with blur and modern styling

-- Works on any website login form using content scripts.

## Installation ##
1) Clone or download this repository.   git clone <https://github.com/Jen971/PRODIGY_CS_03>

2) Open Chrome → chrome://extensions/

3) Enable Developer mode (top-right corner).

4) Click Load unpacked and select the project folder.

5) The extension is now active in your browser.

## Usage ##
1) Go to any website with a password field.

2) Type your password.

3) The extension automatically checks strength and shows:

4) Red/Green border for weak/strong passwords

-- Tooltip with detailed issues --

--Live text feedback below the field --

## Optionally, open the manual popup by clicking the extension icon for a custom password check ##

## Folder Structure ## 

/project-root
│
├─ manifest.json           # Chrome extension manifest
├─ content.js              # Runs on websites to check passwords
├─ popup.html              # Manual popup interface
├─ popup.js                # JS logic for popup
├─ style.css               # Shared styling (tooltips, inputs)
├─ popup-style.css         # Popup-specific styling (black background, blur)
└─ icons/                  # Extension icons (16px, 48px, 128px)


## Demo Video ##
(uploaded in folder named DEMO VIDEO)


License
This project is open-source under the MIT License.

## SCREENSHOTS ## 
https://github.com/Jen971/PRODIGY_CS_03/blob/b6f385cb3b3620b15655483e4c43f6149ebf840a/TASK3(1).png

https://github.com/Jen971/PRODIGY_CS_03/blob/b6f385cb3b3620b15655483e4c43f6149ebf840a/TASK%203(2).png

https://github.com/Jen971/PRODIGY_CS_03/blob/b6f385cb3b3620b15655483e4c43f6149ebf840a/TSK3(3).png

https://github.com/Jen971/PRODIGY_CS_03/blob/b6f385cb3b3620b15655483e4c43f6149ebf840a/TASK3(4).png
