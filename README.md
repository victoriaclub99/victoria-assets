# victoria-assets

This project is a simple web application that demonstrates the use of HTML, CSS, and JavaScript. 

## Project Structure

```
victoria-assets/
├── index.html
├── style.css
├── script.js
├── mock_online.json
├── mock_jackpot.json
├── assets/
│   ├── promo/
│   │   ├── banner-main.png
│   │   └── banner-fallback.png
│   ├── ads/
│   ├── buttons/
│   ├── gif/
│   ├── photo/
│   └── logo.png
└── .nojekyll

```


---

## 🧩 Files Description

- `index.html`: Main mock landing page with embedded modules and fallback logic
- `style.css`: Styling for layout, fonts, colors, and responsive design
- `script.js`: Frontend logic for dynamic updates and event triggers
- `mock_online.json`: Simulated online user count
- `mock_jackpot.json`: Simulated jackpot data
- `mock_online.sh`: Shell script to auto-update mock JSON files
- `user-rotate.html`: Standalone iframe module for rotating user display

---

## 🔄 Mock Backend Workflow

### 1. Shell Script (`mock_online.sh`)
- Generates `mock_online.json` and `mock_jackpot.json`
- Updates numbers every 10 seconds
- Simulates time-based behavior (e.g. higher traffic at night)

```bash
nohup bash mock_online.sh &


## Getting Started

1. Clone the repository or download the project files.
2. Open the project folder in your code editor.
3. Install the "Live Server" extension in your development environment.
4. Open `index.html` with Live Server to preview the application.

## Usage

You can modify the HTML, CSS, and JavaScript files to customize the application as needed.


🛠️ Notes
.nojekyll ensures GitHub Pages serves all folders correctly

All assets use fallback logic for reliability

Designed for modular reuse across campaigns
##iframe <iframe src="https://victoriaclub99.github.io/victoria-assets/user-rotate.html"
        style="border:none; width:100%; height:50px;"></iframe>
