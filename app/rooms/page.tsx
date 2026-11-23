// import RoomCard from "../components/RoomCard";

// const rooms = [
//     { id: 1, number: "101", category: "Стандарт", price: 3500, isAvailable: true },
//     { id: 2, number: "102", category: "Люкс", price: 9000, isAvailable: false },
//     { id: 3, number: "201", category: "Комфорт", price: 5200, isAvailable: true }
// ];

// export default function Rooms() {
//     return (
//         <main style={{ padding: "2rem" }}>
//             <h1>Каталог номеров</h1>
//             {rooms.map((room) => (
//                 <RoomCard
//                     key={room.id}
//                     number={room.number}
//                     category={room.category}
//                     price={room.price}
//                     isAvailable={room.isAvailable}
//                 />
//             ))}
//         </main>
//     );
// }

import RoomCard from "../components/RoomCard";

// Отключаем проверку "мгновенной навигации" для этой страницы
export const instant = false;

type Room = {
  id: number;
  number: string;
  category: string;
  price: number;
  isAvailable: boolean;
  description: string;
};

async function getRooms(): Promise<Room[]> {
  // Берем адрес из переменной окружения Render, иначе используем localhost
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  const response = await fetch(`${baseUrl}/api/rooms`);
  return response.json();
}

export default async function Rooms() {
  const rooms = await getRooms();

  return (
    <main style={{ padding: "2rem" }}>
      <h1>Каталог номеров</h1>
      <p>Данные получены из API Next.js</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "20px" }}>
        {rooms.map((room) => (
          <RoomCard 
            key={room.id} 
            id={room.id}
            number={room.number} 
            category={room.category} 
            price={room.price} 
            isAvailable={room.isAvailable} 
            description={room.description} 
          />
        ))}
      </div>
    </main>
  );
}
