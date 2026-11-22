const guests = [
    { id: 1, fullName: "Анна Смирнова", email: "anna@mail.com", country: "Беларусь" },
    { id: 2, fullName: "Иван Петров", email: "ivan@mail.com", country: "Россия" },
    { id: 3, fullName: "Мария Ковалёва", email: "maria@mail.com", country: "Польша" }
];

export default function Guests() {
    return (
        <main style={{ padding: "2rem" }}>
            <h1>Гости отеля</h1>
            <ul>
                {guests.map((guest) => (
                    <li key={guest.id}>
                        <strong>{guest.fullName}</strong> ({guest.country}) — {guest.email}
                    </li>
                ))}
            </ul>
        </main>
    );
}