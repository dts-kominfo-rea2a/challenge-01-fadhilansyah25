// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca

const monicaFavoriteColor = new Set(["Yellow", "Pink", "White", "Purple"]);
const wendyFavoriteColor = new Set(["Blue", "Black", "Gray"]);

const monicaEducation = [
  {
    name: "SD 01",
    city: "Jakarta",
    graduate: 2016,
  },
  {
    name: "SMP 02",
    city: "Jakarta",
    graduate: 2019,
  },
  {
    name: "SMA 03",
    city: "Tangerang",
    graduate: null,
  },
];
const wendyEducation = [
  {
    name: "SD 02",
    city: "Jakarta",
    graduate: 2010,
  },
  {
    name: "SMP 03",
    city: "Bogor",
    graduate: 2013,
  },
  {
    name: "SMA 01",
    city: "Surabaya",
    graduate: 2016,
  },
  {
    name: "Universitas Maju",
    city: "Tangerang",
    graduate: null,
  },
];

const monicaFavoriteRestaurant = new Set([
  "Bento",
  "Sushi",
  "Pancake",
  "Eggy",
  "Tempura",
  "Bento",
  "Eggy",
  "Padang",
  "Tteok",
  "Sushi",
  "Sushi",
]);
const wendyFavoriteRestaurant = new Set([
  "Tempura",
  "Bento",
  "Sushi",
  "Pancake",
  "Padang",
  "Katsu",
  "Geprek",
  "Pancake",
  "Eggy",
]);

const firstUser = {
  name: "Monica",
  gender: "Female",
  age: 17,
  email: "monica@dingdong.com",
  favoriteColor: [...monicaFavoriteColor],
  isHavePet: "Yes",
  education: [...monicaEducation],
  favoriteRestaurant: [...monicaFavoriteRestaurant],
};

const secondUser = {
  name: "Wendy",
  gender: "Male",
  age: 23,
  email: "wendy@dingdong.com",
  favoriteColor: [...wendyFavoriteColor],
  isHavePet: "No",
  education: [...wendyEducation],
  favoriteRestaurant: [...wendyFavoriteRestaurant],
};

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [];
users.push(firstUser);
users.push(secondUser);

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
  console.log(users.length || users.size);
  console.log(users);
}

main();

module.exports = {
  users,
};
