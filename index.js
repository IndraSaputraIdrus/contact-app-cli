// import file contact.js
import { jawabPertanyaan, simpanContact } from "./contact.js";

const main = async () => {
  const nama = await jawabPertanyaan("Masukkan Nama Anda: ");
  const noHP = await jawabPertanyaan("Masukkan NoHP Anda: ");
  const email = await jawabPertanyaan("Masukkan Email Anda: ");

  simpanContact(nama, noHP, email);
};

main();
