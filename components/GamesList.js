'use client';

export default function GamesList() {
  const games = [
    { name: "Free Fire", image: "https://www.cdnlogo.com/logos/f/51/freefire-1.svg" },
    { name: "Call of Duty Mobile", image: "https://www.citypng.com/public/uploads/preview/hd-call-of-duty-mobile-codm-game-official-logo-png-7017516947877289uky0ombog.png" },
    { name: "PUBG Mobile", image: "https://upload.wikimedia.org/wikipedia/commons/b/b9/PUBG_Mobile_logo.svg" },
    { name: "Mobile Legends", image: "https://upload.wikimedia.org/wikipedia/en/9/91/Mobile_Legends_Bang_Bang_logo.png" },
    { name: "Fortnite", image: "https://1000logos.net/wp-content/uploads/2021/11/Fortnite-Logo-2017.png" },
    { name: "Clash of Clans", image: "https://upload.wikimedia.org/wikipedia/en/5/5f/Clash_of_Clans_logo.png" }
  ];

  return (
    <div className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {games.map((game, index) => (
            <div key={index} className="bg-gray-100 dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition transform hover:scale-105">
              <img src={game.image} alt={game.name} className="w-full h-40 object-contain bg-white p-4" />
              <div className="p-4 text-center">
                <h3 className="font-bold text-gray-900 dark:text-white">{game.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
