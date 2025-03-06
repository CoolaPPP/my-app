export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-indigo-600 text-white p-6">
      <div className="bg-white text-gray-900 rounded-2xl shadow-xl p-8 max-w-lg text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome Home</h1>
        <p className="text-lg leading-relaxed">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci,
          dignissimos? Dignissimos voluptatum maiores accusantium nihil libero
          culpa repudiandae maxime ratione consectetur error in sapiente
          exercitationem praesentium iure, vitae alias dolorem.
        </p>
        <button className="mt-6 px-6 py-2 bg-indigo-600 text-white font-semibold rounded-full shadow-md hover:bg-indigo-700 transition-all">
          Get Started
        </button>
      </div>
    </div>
  );
}

