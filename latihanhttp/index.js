/**
 * Impor HTTP Standar Library dari Node.js
 * Hal inilah yang nantinya akan kita gunakan untuk membuat
 * HTTP Server
 * */
const http = require('http');
const fs = require('fs');
const { PORT = 8000 } = process.env; // Ambil port dari environment variable

const path = require('path');
const PUBLIC_DIRECTORY = path.join(__dirname, 'public'); 

function getHTML(htmlFileName) {
    const htmlFilePath = path.join(PUBLIC_DIRECTORY, htmlFileName);
    return fs.readFileSync(htmlFilePath, 'utf-8')
}

  
// Request handler
// Fungsi yang berjalan ketika ada request yang masuk.
function onRequest(req, res) {
//   // Membuat path ke html file yang ada di directory public
//   const htmlFile = path.join(PUBLIC_DIRECTORY, 'index.html');

//   // Membaca file HTML pada path htmlFile
//   const html = fs.readFileSync(htmlFile, 'utf-8')

//   // Set header agar client tau kalo response kita itu berupa HTML
//   res.setHeader('Content-Type', 'text/html')

//   // Memberi status 200
//   res.writeHead(200);
// //   res.end("Halo dari server!"); // ini kalo return bukan html
//   res.end(html)

//pakai routing
// switch(req.url) {
//     case "/":
//       res.writeHead(200)
//       res.end(getHTML("index.html"))
//       return;
//     case "/about":
//       res.writeHead(200)
//       res.end(getHTML("about.html"))
//       return;
//     default:
//       res.writeHead(404)
//       res.end(getHTML("404.html"))
//       return;
//   }
// }

// //tampilkan json
function toJSON(value) {
    return JSON.stringify(value);
}


const responseJSON = toJSON({
    id: "0aa3e62a-9a27-45a2-9e7a-0d4f1d7f02dd",
    username: "sabrina",
    email: "sabrina@binar.co.id",
    encrypted_password: "ldfgkj78%^&appdKO039*"
  })

  res.setHeader("Content-Type", "application/json")
  res.writeHead(200)
  res.end(responseJSON);
}

const server = http.createServer(onRequest);

// Jalankan server
server.listen(PORT, '0.0.0.0', () => {
  console.log("Server sudah berjalan, silahkan buka http://0.0.0.0:%d", PORT);
})