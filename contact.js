// import core module
// import fs
import * as fs from "node:fs";

// import readline
import * as readline from "node:readline";

// import stdin, stdout
// value from commandline
import { stdin as input, stdout as output } from "node:process";

const rl = readline.createInterface({
  input,
  output,
});

// check directory data sudah ada atau tidak
const dirPath = "./data";
if (!fs.existsSync(dirPath)) {
  // membuat folder data jika tidak ada
  fs.mkdirSync(dirPath);
}

// check file contact.json ada atau tidak
const dataPath = "./data/contacts.json";
if (!fs.existsSync(dataPath)) {
  // membuat file contacts.json jika tidak ada
  fs.writeFileSync(dataPath, "[]", "utf-8");
}

const jawabPertanyaan = (pertanyaan) => {
  return new Promise((resolve, reject) => {
    rl.question(pertanyaan, (jawaban) => {
      if (!jawaban) {
        console.log("Jawab dulu");
        resolve(jawabPertanyaan(pertanyaan));
      }
      resolve(jawaban);
    });
  });
};

const simpanContact = (nama, noHP, email) => {
  const data = {
    nama,
    noHP,
    email,
  };
  const file = fs.readFileSync("data/contacts.json", "utf-8");
  const contacts = JSON.parse(file);

  contacts.push(data);

  fs.writeFileSync("data/contacts.json", JSON.stringify(contacts));

  console.log("terimakasi telah memasukkan data");

  rl.close();
};

export { jawabPertanyaan, simpanContact };
