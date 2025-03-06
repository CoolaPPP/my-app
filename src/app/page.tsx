export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 p-6">
      <div className="bg-white bg-opacity-80 text-gray-900 rounded-3xl shadow-2xl p-8 max-w-lg text-center border-4 border-white">
        <h1 className="text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
          Hello World
        </h1>
        <p className="text-lg leading-relaxed">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci,
          dignissimos? Dignissimos voluptatum maiores accusantium nihil libero
          culpa repudiandae maxime ratione consectetur error in sapiente
          exercitationem praesentium iure, vitae alias dolorem.
        </p>
        <button className="mt-6 px-6 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-full shadow-md hover:scale-105 transition-all">
          กดไม่ได้ครับ แต่อยากใส่ไว้ก่อน 
        </button>
      </div>
    </div>
  );
}
