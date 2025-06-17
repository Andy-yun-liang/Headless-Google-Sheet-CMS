# Google Sheets Powered CMS

A lightweight content management system (CMS) powered by **Google Sheets** and **Google Apps Script**, designed to serve structured JSON data to any frontend like Astro, React, or Vue.

---

##  Features

- Edit content in a friendly Google Sheet UI  
- Automatically serve content as a **JSON API endpoint**  
- Perfect for personal sites, portfolios, or prototypes  
- No backend infrastructure needed  
- Works with Astro, Next.js, plain React, etc.

---

## 📁 Sheet Format

| Item         | Category    | Pricing | Description                                     |
|--------------|-------------|---------|-------------------------------------------------|
| Blue Shorts  | clothing    | 25      | Very comfy shorts, perfect for the summer time. |
| Green Scarf  | clothing    | 20      | Warm cotton scarf, perfect for snowy weather.   |
| Laptop       | technology  | 500     | A great laptop with great specs.                |

Make sure the first row is a header row — this defines the object keys in your JSON output.

---

## How It Works

1. Data is stored in a public Google Sheet
2. Google Apps Script turns the sheet into a live JSON API
3. Your frontend fetches and renders this data

---

## Deployment (Google Apps Script)

1. Open the sheet and go to **Extensions > Apps Script**
2. Replace the default code with:

```js
function doGet() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");
  const data = sheet.getDataRange().getValues();
  const headers = data[0];
  const rows = data.slice(1);

  const output = rows.map(row => {
    let obj = {};
    headers.forEach((key, i) => obj[key] = row[i]);
    return obj;
  });

  return ContentService
    .createTextOutput(JSON.stringify(output))
    .setMimeType(ContentService.MimeType.JSON);
}
