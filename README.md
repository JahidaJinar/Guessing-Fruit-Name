# Guessing-Fruit-Name🍎🥭
---

### **Project Summary: "Guess the Fruit" Game**  
**A simple web game where players guess fruits using hints.**  
Perfect for learning HTML, CSS, and JavaScript basics! 🌟  

---

#### **1. What It Does**  
- **Home Page**: Players enter their name, age, and institute.  
- **Game Page**: Players guess a fruit based on hints like *"5-letter fruit starting with 'm'"*.  
- **Feedback**: Shows if the guess is correct or wrong.  

---

#### **2. Technologies Used**  
- **HTML**: Creates the structure (forms, buttons, text).  
- **CSS**: Styles the pages (colors, animations, layout).  
- **JavaScript**: Adds logic (hints, guess validation, data storage).  

---

#### **3. Key Features**  
- **Form Validation**:  
  - "Start Game" button works only when all fields are filled.  
- **Game Logic**:  
  - Randomly picks a fruit (e.g., "mango").  
  - Generates dynamic hints.  
  - Checks guesses and shows results.  
- **Storage**:  
  - Saves player info using `localStorage`.  
- **Responsive Design**:  
  - Works on both desktop and mobile.  

---

#### **4. How It Works (Step-by-Step)**  
1. **Home Page** (`home.html`):  
   - User fills out the form.  
   - Clicks "Start Game" → Redirects to `fruits.html`.  

2. **Game Page** (`fruits.html`):  
   - Shows a hint (e.g., *"Starts with 'm', ends with 'o'"*).  
   - Player types a guess (e.g., "mango").  
   - If correct: 🎉 "Correct!" + "Play Again" button.  
   - If wrong: ❌ "Try again!"  

3. **Quit**:  
   - Redirects back to the home page.  

---

#### **5. Files You Need**  
- `home.html` + `home.css` + `home.js` → Landing page.  
- `fruits.html` + `fruits.css` + `fruits.js` → Game page.  

---

#### **6. How to Run**  
1. **Download all 6 files** into one folder.  
2. **Open `home.html`** using a browser (use **Live Server** in VS Code for best results).  

---

#### **7. What You’ll Learn**  
- **HTML**: Forms, buttons, page linking.  
- **CSS**: Styling, animations (floating fruits).  
- **JavaScript**:  
  - DOM manipulation (updating text/buttons).  
  - `localStorage` (saving data).  
  - Event handling (clicks, form submission).  

---

#### **8. Customize It!**  
- Add more fruits to the list.  
- Change colors in `home.css`/`fruits.css`.  
- Create a scoring system (e.g., +10 points per correct guess).  

---

**Perfect for beginners!** 🚀 Modify the code, experiment, and learn how web apps work!
