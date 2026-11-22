import Link from "next/link";

export default function Home() {
    return (
        <main style={{ padding: "2rem", fontFamily: "sans-serif", maxWidth: "800px", margin: "0 auto" }}>
            <h1>Отель Pravotorik</h1>
            <p>Добро пожаловать в систему управления отелем на Next.js!</p>

            {/* Навигация по страницам */}
            <nav style={{ marginTop: "20px", marginBottom: "30px", paddingBottom: "20px", borderBottom: "1px solid #ccc" }}>
                <h2>Страницы приложения:</h2>
                <ul style={{ listStyle: "none", padding: 0, display: "flex", gap: "15px" }}>
                    <li>
                        <Link href="/about" style={{ color: "blue", textDecoration: "underline" }}>О приложении</Link>
                    </li>
                    <li>
                        <Link href="/rooms" style={{ color: "blue", textDecoration: "underline" }}>Номера</Link>
                    </li>
                    <li>
                        <Link href="/guests" style={{ color: "blue", textDecoration: "underline" }}>Гости</Link>
                    </li>
                    <li>
                        <Link href="/reservations" style={{ color: "blue", textDecoration: "underline" }}>Брони</Link>
                    </li>
                    <li>
                        <Link href="/contacts" style={{ color: "blue", textDecoration: "underline" }}>Контакты</Link>
                    </li>
                </ul>
            </nav>

            {/* Блок для проверки API */}
            <section>
                <h2>Проверка API (Серверные маршруты):</h2>
                <ul style={{ listStyle: "none", padding: 0 }}>
                    <li style={{ marginBottom: "10px" }}>
                        <a href="/api/rooms" target="_blank" style={{ color: "green", fontWeight: "bold" }}>
                            GET /api/rooms
                        </a>
                        <span style={{ color: "#666", marginLeft: "10px" }}>(Список всех номеров в JSON)</span>
                    </li>
                    <li style={{ marginBottom: "10px" }}>
                        <a href="/api/info" target="_blank" style={{ color: "green", fontWeight: "bold" }}>
                            GET /api/info
                        </a>
                        <span style={{ color: "#666", marginLeft: "10px" }}>(Информация о приложении)</span>
                    </li>
                </ul>
            </section>
        </main>
    );
}