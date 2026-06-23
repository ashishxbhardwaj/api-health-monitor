# API Health Checker CLI

A simple Command Line Interface (CLI) tool to quickly check if an API endpoint is up, how fast it responds, and whether it is healthy.

---

## What It Does

The script sends a GET request to the URL you provide and measures how long it takes to respond. It then categorizes the API health:

- Healthy → Status is 200 and response time is ≤ 200ms  
- Slow → Status is 200 and response time is 201ms – 999ms  
- Bad → Status is 200 but response time is ≥ 1000ms  
- DOWN → Request fails or server is unreachable  

---

## Setup Instructions

### 1. Save the Script

Save your code in a file named `index.js`.

---

### 2. Install Dependencies

Run the following command in your terminal:

npm install axios chalk@4

Note: chalk@4 is used because it supports require() syntax.

---

## How to Use It

Run the CLI using:

node index.js https://api.github.com

---

## Example Output

URL: https://api.github.com  
Time: 12:16:45 PM  
Status: 200  
Response Time: 150ms  
Condition: Healthy  

---

## If No URL Is Provided

Please provide a URL  
Example: node index.js https://api.github.com  

---

## Optional: Run as a Global CLI Command

You can make it behave like a real system command.

---

### 1. Add bin in package.json

Open your package.json file and add:

{
  "name": "api-health-checker",
  "version": "1.0.0",
  "bin": {
    "api-health": "./index.js"
  }
}

---

### 2. Make Script Executable (macOS/Linux)

chmod +x index.js

---

### 3. Link Globally

npm link

---

### 4. Run From Anywhere

Now you can run:

api-health https://api.github.com
