# TaskFlow — Interactive To-Do List App

A modern and responsive personal task management web app built with HTML, Tailwind CSS, and vanilla JavaScript. TaskFlow allows users to create, complete, and delete tasks while keeping task data saved in the browser with LocalStorage.

## 🚀 Live Demo

https://code-orbit-todo-app-3hxl.vercel.app/

## 📸 Preview

![TaskFlow Preview](https://i.ibb.co.com/ds9qrHV6/preview.png)

## ✨ Features

- Add new tasks
- Add a category/tag to each task
- Set task priority
- Mark tasks as completed or active
- Delete tasks with a confirmation dialog
- Persist tasks using browser LocalStorage
- Automatically restore saved tasks after page refresh
- Press **Enter** to quickly add a task
- Empty-state UI when there are no tasks
- Responsive navigation with a mobile menu
- Responsive layout for different screen sizes
- SweetAlert2 confirmation and notification dialogs
- Font Awesome icons
- Clean, productivity-focused UI inspired by a modern task management product

## 🛠️ Technologies Used

- HTML5
- Tailwind CSS
- JavaScript (Vanilla JS)
- LocalStorage API
- SweetAlert2
- Font Awesome
- Google Fonts

## 📁 Project Structure

```text
TaskFlow/
│
├── assets/
│   ├── TaskFlow Logo.png
│   ├── Container.png
│   ├── Keyboard.png
│   ├── work-icon.png
│   └── ...
│
├── index.html
├── input.css
├── style.css
├── scrpt.js
├── package.json
├── package-lock.json
└── README.md
```

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/emonahmed-dev/CodeOrbit_Todo-App.git
```

### 2. Open the project directory

```bash
cd TaskFlow
```

### 3. Install dependencies

```bash
npm install
```

### 4. Build the Tailwind CSS

```bash
npm run build
```

This generates/updates the `style.css` file from `input.css`.

### 5. Run the project

Open `index.html` in your browser.

For the best development experience, you can use the **Live Server** extension in VS Code.

## 💾 How Data Persistence Works

TaskFlow uses the browser's `localStorage` API to save tasks.

The application:

1. Stores tasks as JavaScript objects inside an array.
2. Converts the task array into JSON using `JSON.stringify()`.
3. Saves the JSON data in `localStorage`.
4. Reads the saved data with `localStorage.getItem()`.
5. Converts it back into JavaScript data using `JSON.parse()`.

Because the data is stored locally in the browser, tasks remain available after refreshing the page on the same browser/device.

## 🧠 JavaScript Concepts Practiced

This project was built as a practical JavaScript fundamentals revision project.

Key concepts practiced:

- Variables and data types
- Functions
- Objects and arrays
- Array methods such as `push()`, `find()`, and `filter()`
- DOM manipulation
- Event listeners
- Keyboard events
- Conditional rendering
- Template literals
- JSON
- LocalStorage
- CRUD-style task operations
- UI re-rendering after state changes

## 🚀 Deployment

The project can be deployed as a static website using Netlify or another static hosting platform.

For Netlify with Git-based deployment:

- **Build command:** `npm run build`
- **Publish directory:** `.`

## 🔮 Future Improvements

Possible future improvements include:

- Task editing
- Search tasks
- Filter by status
- Sort tasks
- Clear completed tasks
- Better task statistics
- Dark mode
- Due dates
- More detailed task management

## 📚 What I Learned

Through this project, I practiced building an interactive frontend application without a JavaScript framework. The main goal was to strengthen JavaScript fundamentals by connecting user interactions, application data, DOM updates, and browser storage into one complete project.

## 👨‍💻 Author

**Md Emon**

Frontend Web Development Learner
