import "./styles.css";

document.getElementById("app").innerHTML = `
<h1 class="text-center">Contact Manager</h1>
<br>
`;

let db = {
    contacts: []
};
  
const contacts = [
{
    id: 1,
    fullName: "Genna Arnli",
    phoneNumber: "5278765234",
    email: "garnli0@photobucket.com",
    gender: "Female"
},
{
    id: 2,
    fullName: "Jojo Scotchford",
    phoneNumber: "7925766855",
    email: "jscotchford1@booking.com",
    gender: "Female"
},
{
    id: 3,
    fullName: "Kakalina Pietasch",
    phoneNumber: "3118199662",
    email: "kpietasch2@auda.org.au",
    gender: "Female"
},
{
    id: 4,
    fullName: "Araldo Coil",
    phoneNumber: "5887272284",
    email: "acoil3@behance.net",
    gender: "Male"
},
{
    id: 5,
    fullName: "Shadow Maffi",
    phoneNumber: "8455497996",
    email: "smaffi4@bravesites.com",
    gender: "Male"
}
];
  
//menampilkan data contact
function view() {
    let tbody = document.getElementById("table-rows");
    contacts.map((item, index) => {
    let row = tbody.insertRow(); //tr, table row
    let id = row.insertCell(0); //td, table , column
    let fullName = row.insertCell(1); //column 1
    let phoneNumber = row.insertCell(2);
    id.innerHTML = item.id;
    fullName.innerHTML = item.fullName;
    phoneNumber.innerHTML = item.phoneNumber;
    });
}
  
//menampilkan data per id
function detail(data, id) {
// menampilkan detail per id
let contactfind = data.find(item => item.id == id);
console.log(contactfind);
}

function add(data) {
    let result = [...contacts, data];
    return result;
}
  
function edit(data, id) {
let result = contacts.map(item => {
    if (item.id == id) {
    return { ...item, ...data };
    }
    return item;
});
return result;
}
  
  //hapus data contact
  // function remove(id) {
  //   let contactremove = [...contacts];
  //   contactremove.splice(contactremove.findIndex(item => item.id === id), 1);
  //   console.log(contactremove);
  // }
  
  function remove(id) {
    let result = contacts.filter(item => item.id !== id);
    return result;
  }
  
  function updateDb(data) {
    db = db.contact = data;
  }
  
  let MyInput = {
    id: 1,
    fullName: "New User",
    phoneNumber: 12345
    // email : "newuser@mail.com",
    // gender : "Male"
  };
  
  let result;
  result = add(MyInput);
  updateDb(result);
  console.log(db);
  
  view();
  
  // edit(MyInput, 1);
  
  // result = edit(MyInput, 1);
  // console.log(result);
  // console.log(MyInput);
  
  // result = remove(1)
  // console.log(result);
  
  //memanggil fungsi view
  view(contacts);
  
  //memanggil fungsi detail
  detail(contacts, 2);
  
  //tambah data dengan parameter id, nama, phone, email, dan gender
  add(6, "Azmi azmi", "098765432", "azmi@ok.com", "Male");
  
  //update data dengan parameter id, nama, phone, email, dan gender
  edit(1, "Mimi mimi", "087654321", "ami@ok.com", "Female");
  
  //hapus data dengan parameter id
  remove(1);
  
