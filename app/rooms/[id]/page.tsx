// Отключаем проверку "мгновенной навигации" для этой страницы
export const instant = false;

export default async function RoomDetails({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  // Берем адрес из переменной окружения Render, иначе используем localhost
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  const res = await fetch(`${baseUrl}/api/rooms`, { cache: "no-store" });
  
  const rooms = await res.json();
  const room = rooms.find((r: any) => r.id === Number(id));

  if (!room) {
    return <main style={{ padding: "2rem" }}><h1>Номер не найден</h1></main>;
  }

  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Номер {room.number}</h1>
      
      <div style={{ backgroundColor: "#f9f9f9", padding: "20px", borderRadius: "8px", marginTop: "20px", borderLeft: "5px solid #ffafcc" }}>
        <p><strong>Категория:</strong> {room.category}</p>
        <p><strong>Описание:</strong> {room.description}</p>
        <p><strong>Статус:</strong> 
          <span style={{ color: room.isAvailable ? "green" : "red", marginLeft: "5px" }}>
            {room.isAvailable ? "Свободен" : "Занят"}
          </span>
        </p>
        <h2 style={{ color: "#e91e63" }}>{room.price} BYN / ночь</h2>
        
        <button disabled={!room.isAvailable} style={{
          padding: "10px 20px",
          backgroundColor: room.isAvailable ? "#e91e63" : "#ccc",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: room.isAvailable ? "pointer" : "not-allowed",
          marginTop: "10px"
        }}>
          {room.isAvailable ? "Забронировать" : "Недоступен"}
        </button>
      </div>

      <a href="/rooms" style={{ display: "inline-block", marginTop: "20px", color: "blue" }}>← Назад к каталогу</a>
    </main>
  );
}
