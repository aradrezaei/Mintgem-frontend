'use client';

export default function GamesList() {
  const games = [
    { name: "Free Fire", image: "/images/freefire.jpg" },
    { name: "Call of Duty Mobile", image: "/images/codm.jpg" },
    { name: "PUBG Mobile", image: "/images/pubgm.jpg" },
    { name: "Mobile Legends", image: "/images/mlbb.jpg" },
    { name: "Fortnite", image: "/images/fortnite.jpg" },
    { name: "Clash of Clans", image: "/images/clash.jpg" }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {games.map((game, index) => (
            <div key={index} className="bg-gray-50 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition transform hover:scale-105">
              <img src={game.image} alt={game.name} className="w-full h-40 object-cover" />
              <div className="p-4 text-center">
                <h3 className="font-bold text-gray-800">{game.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
