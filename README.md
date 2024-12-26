# Basic Node.js Express Template with Handlebars

## Overview
This project is a **basic template for a Node.js application** using **Express.js**, **Handlebars.js**, **JavaScript**, and **SCSS**. It provides a clean and modular structure to kickstart web application development.

---

## Features
- **Express.js Framework**: Simplifies server-side development.
- **Handlebars.js**: Template engine for dynamic HTML rendering.
- **SCSS Integration**: For modular and maintainable styling.
- **Static File Serving**: Serves CSS, JS, and image assets.
- **Basic File Structure**: Organized for scalability and easy extension.

---

## Tech Stack
- **Node.js**: JavaScript runtime environment.
- **Express.js**: Web framework for Node.js.
- **Handlebars.js**: Template engine for building dynamic views.
- **SCSS**: CSS preprocessor for modular and reusable styles.

---

## Installation and Setup

### Prerequisites
- **Node.js** (v14+)
- **npm** (comes with Node.js)
- Code editor (optional, e.g., VSCode)

### Steps
1. Clone the repository or download the zip file:
   ```bash
   git clone https://github.com/yourusername/nodejs-express-handlebars-template.git
   cd nodejs-express-handlebars-template
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

---

## Usage
1. Modify `src/views` to add or update Handlebars templates.
2. Update routes in `src/routes` to define API or page endpoints.
3. Add SCSS styles in the `src/scss` folder and compile them using:
   ```bash
   npm run sass
   ```

---

## Customization
1. **Add Routes**:
   - Create new route files in `src/routes` and include them in `src/app.js`.

2. **Update Views**:
   - Modify or add `.hbs` files in `src/views` for dynamic rendering.

3. **Modify Styles**:
   - Edit SCSS files in `src/scss` and recompile using `npm run sass`.

---

## File Structure
```
├── node_modules      # Node.js dependencies
├── src
│   ├── routes        # Route definitions
│   │   └── index.js  # Main route file
│   ├── scss          # SCSS source files
│   │   └── style.scss
│   ├── views         # Handlebars templates
│   │   ├── layouts   # Main layout files
│   │   │   └── main.hbs
│   │   └── index.hbs # Home page template
│   └── app.js        # Main application file
├── package-lock.json
├── package.json      # Project metadata and dependencies
└── README.md         # Project documentation
```

---

## License
This project is open-source and free to use under the MIT License.

---

## Contact
For any questions or suggestions, feel free to contact [daongocanhkhoi@gmail.com].
