// const rooms = [
//     { id: 1, number: "101", category: "Стандарт", price: 3500, isAvailable: true },
//     { id: 2, number: "102", category: "Люкс", price: 9000, isAvailable: false },
//     { id: 3, number: "201", category: "Комфорт", price: 5200, isAvailable: true }
// ];

// export async function GET() {
//     return Response.json(rooms);
// }

const rooms = [
    { id: 1, number: "101", category: "Стандарт", price: 3500, isAvailable: true, description: "Уютный номер с видом на сад." },
    { id: 2, number: "102", category: "Люкс", price: 9000, isAvailable: false, description: "Просторный номер с джакузи." },
    { id: 3, number: "201", category: "Комфорт", price: 5200, isAvailable: true, description: "Семейный номер с дополнительным местом." }
];

export async function GET() {
    return Response.json(rooms);
}