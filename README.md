# React Dropdown
 
1. Clone the repository:
    ```bash
    git clone https://github.com/Gaurav8757/ReactDropdown.git
    cd ReactDropdown
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Install Tailwind CSS:
    ```bash
    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init -p
    ```
3. Run Dev & build Command:
    ```bash
    npm run dev
    npm run build
    ```
    
## Folder Structure
reactdropsown/
├── public/
│   └── title.png
├── src/
│   ├── components/
│   │   └── Dropdown/
│   │       ├── Dropdown.js
│   │       └── Dropdown.css
│   ├── App.js
│   ├── index.js
│   └── index.css
|
├── index.js
├── package.json
├── README.md
├── tailwind.config.js
└── vite.config.js


Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
