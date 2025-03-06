import { useRouter } from "next/router";

export default function Home() {

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-[#D7CCC8] to-[#A1887F] p-6">
      <div className="bg-[#F5F5DC] text-gray-900 rounded-3xl shadow-2xl p-8 max-w-lg text-center border-2 border-[#8D6E63]">
        <h1 className="text-5xl font-extrabold mb-4 text-[#5D4037]">
          ยินดียิ่งแล้ว แขกแก้วมาเยือน
        </h1>
        <p className="text-lg leading-relaxed text-[#6D4C41]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi expedita quasi debitis. Praesentium dicta doloremque illo recusandae, quos sapiente aperiam ipsam quo? At itaque, ex blanditiis exercitationem vitae deleniti fuga?
        </p>
        <a href="/our-team" className="mt-6 inline-block bg-blue-500 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
          Our Team
        </a>
      </div>
    </div>
  );
}
