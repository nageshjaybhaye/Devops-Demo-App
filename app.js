const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>DevOps Demo App</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
    }
    .container {
      text-align: center;
      padding: 2rem;
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      border-radius: 20px;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
      max-width: 600px;
      animation: fadeIn 0.8s ease-in;
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    h1 {
      font-size: 3rem;
      margin-bottom: 1rem;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    }
    .emoji { font-size: 4rem; margin: 1rem 0; animation: bounce 2s infinite; }
    @keyframes bounce {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }
    p { font-size: 1.2rem; margin: 1rem 0; opacity: 0.9; }
    .badge {
      display: inline-block;
      padding: 0.5rem 1rem;
      margin: 0.5rem;
      background: rgba(255, 255, 255, 0.2);
      border-radius: 50px;
      font-size: 0.9rem;
    }
    .status { color: #4ade80; font-weight: bold; }
  </style>
</head>
<body>
  <div class="container">
    <div class="emoji">🚀</div>
    <h1>DevOps Demo</h1>
    <p>Welcome to your containerized application!</p>
    <div>
      <span class="badge">Node.js</span>
      <span class="badge">Express</span>
      <span class="badge">Docker</span>
    </div>
    <p class="status">✓ Application Running</p>
  </div>
</body>
</html>
  `);
});

const PORT = 3000;
app.listen(PORT, () => console.log(`App running on port ${PORT}`));
