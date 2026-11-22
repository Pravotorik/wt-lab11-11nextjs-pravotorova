export default function Contacts() {
    return (
        <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
            <h1>Контакты</h1>
            <div style={{ marginTop: "20px", lineHeight: "1.6" }}>
                <p><strong>Адрес:</strong> г. Минск, ул. Московская, 117</p>
                <p><strong>Телефон:</strong> +375 (29) 123-45-67</p>
                <p><strong>Электронная почта:</strong> info@pravotorik-hotel.by</p>
            </div>
            <a href="/" style={{ display: "inline-block", marginTop: "20px", color: "blue" }}>← На главную</a>
        </main>
    );
}