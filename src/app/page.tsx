import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-[#D7CCC8] to-[#A1887F] p-6">
      <div className="bg-[#F5F5DC] text-gray-900 rounded-3xl shadow-2xl p-8 max-w-lg text-center border-2 border-[#8D6E63]">
        <h1 className="text-5xl font-extrabold mb-4 text-[#5D4037]">
          ยินดียิ่งแล้ว แขกแก้วมาเยือน
        </h1>
        <p className="text-lg leading-relaxed text-[#6D4C41]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi expedita quasi debitis. Praesentium dicta doloremque illo recusandae, quos sapiente aperiam ipsam quo? At itaque, ex blanditiis exercitationem vitae deleniti fuga?
        </p>
        <button
          onClick={() => router.push("/our-team")}
          className="mt-6 px-6 py-2 bg-[#8D6E63] text-white font-semibold rounded-full shadow-md hover:bg-[#6D4C41] hover:scale-105 transition-all"
        >
          Our Team
        </button>
      </div>
    </div>
  );
}
