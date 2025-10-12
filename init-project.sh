#!/bin/bash

# Crear directorio del proyecto
mkdir retrama-react-app
cd retrama-react-app

# Crear los archivos de Docker
cat > Dockerfile << EOF
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
EOF

cat > docker-compose.yml << EOF
version: '3.8'

services:
  retrama-react-app:
    container_name: retrama-react-container
    build: 
      context: .
      dockerfile: Dockerfile
    ports:
      - "3000:3000"
    volumes:
      - .:/app
      - /app/node_modules
    environment:
      - CHOKIDAR_USEPOLLING=true
    stdin_open: true
    tty: true
EOF

cat > .dockerignore << EOF
node_modules
npm-debug.log
.git
.gitignore
README.md
.env
.nyc_output
coverage
.DS_Store
EOF

# Crear package.json básico para React
cat > package.json << EOF
{
  "name": "retrama-react-app",
  "version": "1.0.0",
  "description": "React app with Docker - Retrama",
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-scripts": "5.0.1"
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}
EOF

# Crear estructura básica de React
mkdir -p public src

cat > public/index.html << EOF
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Retrama React App</title>
</head>
<body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
</body>
</html>
EOF

cat > src/index.js << EOF
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
EOF

cat > src/App.js << EOF
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>¡Bienvenido a Retrama React App!</h1>
        <p>Esta aplicación está ejecutándose en Docker con nombre personalizado</p>
        <div className="retrama-logo">
          🚀 RETRAMA CONTAINER
        </div>
      </header>
    </div>
  );
}

export default App;
EOF

cat > src/App.css << EOF
.App {
  text-align: center;
}

.App-header {
  background-color: #282c34;
  padding: 20px;
  color: white;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.retrama-logo {
  background: linear-gradient(45deg, #61dafb, #ff6b6b);
  padding: 20px;
  border-radius: 10px;
  margin-top: 20px;
  font-weight: bold;
  font-size: 24px;
  color: white;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
}
EOF

echo "✅ Proyecto Retrama React creado exitosamente!"
echo "📁 Directorio: retrama-react-app"
echo "🐳 Container name: retrama-react-container"
echo ""
echo "Para ejecutar:"
echo "cd retrama-react-app"
echo "docker-compose up --build"