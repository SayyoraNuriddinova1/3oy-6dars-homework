// //3vazifa
let cars = [
    "BMW",
    "BYD",
    "Mercedes"
]
let savol = prompt("quyidagi mashinalar ro'yxatiga qaysi mashinani qo'shishni istaysiz? BMW, BYD, Mercedez" )

if (cars.includes(savol) ) {
    alert ("allaqachon qo'shilgan")
}else{
    cars.push( savol)
    alert(cars)
}