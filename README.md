## ⚽ **Upcoming Football Fixtures Widget**

🚀 A simple, lightweight **web widget** that shows the nearest upcoming football matches using the **API-Football** API. It filters out past games and displays a clean list of the next 30 fixtures starting from the current system time.

---

## 🌟 **Key Features**

✅ **🕒 Shows Only Upcoming Matches** – Automatically filters out matches that already started or finished.  
✅ **🔢 Limits to 30 Matches** – Displays up to 30 upcoming fixtures for better readability.  
✅ **⚽ Supports Filters** – Filter matches by league, season, team, and date.  
✅ **🔄 Auto Refresh** – Configurable refresh interval to keep fixtures up to date.  
✅ **🛡️ Secure API Key Handling** – Pass API key securely through HTML data attributes.  
✅ **🎨 Minimal & Responsive Styling** – Clean, simple CSS for neat display across devices.  

---

## 🛠 **How It Works**

1️⃣ **Fetch Fixtures** – Calls API-Football with user-defined filters and API key.  
2️⃣ **Filter Matches** – Removes all matches before the current system date/time.  
3️⃣ **Sort & Limit** – Sorts by ascending date/time and limits output to 30 matches max.  
4️⃣ **Render List** – Dynamically creates and inserts match elements into the webpage.  
5️⃣ **Handle Errors** – Displays friendly messages on API failure or empty results.  

---

## 📌 **Setup Instructions**

### 1️⃣ Get an API Key  
- Sign up and get your free API key at [API-Football](https://www.api-football.com/).

### 2️⃣ Insert Widget Container in Your HTML  
- Add a `<div>` with relevant `data-` attributes like API key, league, season, refresh rate, etc.

### 3️⃣ Add CSS  
- Include the provided minimal CSS file to style the widget cleanly.

### 4️⃣ Load JavaScript Module  
- Import the widget script (`widgets.js`) which will handle fetching and rendering fixtures.

---

## ⚙ **Customization & Configuration**

- Adjust the number of upcoming matches by changing the `data-next` attribute.  
- Filter fixtures by league, season, team, or date using data attributes on the container.  
- Modify the CSS file to customize fonts, colors, and spacing.  
- Change refresh interval with the `data-refresh` attribute (in seconds).  

---

## 🎯 **Use Cases**

⚽ **Football Websites & Blogs** – Display live upcoming matches for your visitors.  
📱 **Sports Apps** – Integrate quick fixture views within your web apps.  
📰 **Fan Pages** – Keep fans updated with latest and upcoming football events.  

---

## 💻 **Contributing**

🚀 Interested in improving the widget?  
- Fork the repository and submit Pull Requests with bug fixes or enhancements.  
- Report issues or feature requests on the repository's Issues page.  
- Share the project with others passionate about football!  

---

⚡ **Stay ahead with real-time updates of upcoming football fixtures — made simple!** ⚽✨

---
