const reservations = [
    { id: 1, roomId: 101, guestName: "Иван Петров", checkIn: "2026-06-01", status: "Подтверждена" },
    { id: 2, roomId: 102, guestName: "Анна Смирнова", checkIn: "2026-07-10", status: "Ожидает оплаты" }
];

export default function Reservations() {
    return (
        <main style={{ padding: "2rem" }}>
            <h1>Активные брони</h1>
            <ul>
                {reservations.map((res) => (
                    <li key={res.id}>
                        Номер {res.roomId} — Гость: {res.guestName} | Дата заезда: {res.checkIn} | Статус: <b>{res.status}</b>
                    </li>
                ))}
            </ul>
        </main>
    );
}