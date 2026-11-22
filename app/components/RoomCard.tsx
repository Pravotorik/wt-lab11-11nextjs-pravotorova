// type RoomCardProps = {
//     number: string;
//     category: string;
//     price: number;
//     isAvailable: boolean;
// };

// export default function RoomCard({ number, category, price, isAvailable }: RoomCardProps) {
//     return (
//         <article style={{ border: "1px solid #ccc", padding: "15px", margin: "10px 0", borderRadius: "8px" }}>
//             <h2>Номер {number} ({category})</h2>
//             <p>Цена: {price} BYN / ночь</p>
//             <p style={{ color: isAvailable ? "green" : "red" }}>
//                 Статус: {isAvailable ? "Свободен" : "Занят"}
//             </p>
//         </article>
//     );
// }

import Link from "next/link";

type RoomCardProps = {
    id: number;
    number: string;
    category: string;
    price: number;
    isAvailable: boolean;
    description: string; // Добавили описание
};

export default function RoomCard({ id, number, category, price, isAvailable, description }: RoomCardProps) {
    return (
        <article style={{ border: "1px solid #ccc", padding: "15px", margin: "10px 0", borderRadius: "8px", display: "flex", flexDirection: "column", gap: "10px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h2 style={{ margin: 0 }}>Номер {number}</h2>
                <span style={{
                    padding: "4px 8px",
                    borderRadius: "4px",
                    fontSize: "14px",
                    backgroundColor: isAvailable ? "#e6fffa" : "#ffe6e6", // Признак доступности (цвет)
                    color: isAvailable ? "#006644" : "#cc0000",
                    border: isAvailable ? "1px solid #006644" : "1px solid #cc0000"
                }}>
                    {isAvailable ? "Свободен" : "Занят"}
                </span>
            </div>

            <p style={{ margin: 0 }}><strong>Категория:</strong> {category}</p>
            <p style={{ margin: 0, color: "#666" }}>{description}</p> {/* Описание */}
            <p style={{ margin: 0, fontSize: "18px", fontWeight: "bold" }}>{price} BYN / ночь</p>

            <Link href={`/rooms/${id}`}>
                <button style={{
                    marginTop: "10px",
                    padding: "10px 15px",
                    backgroundColor: "#0e0e52",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    width: "100%"
                }}>
                    Подробнее
                </button>
            </Link>
        </article>
    );
}