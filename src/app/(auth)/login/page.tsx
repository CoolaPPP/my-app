"use client";
import { fetchActionApi, setAccessToken } from "@/app/utils/action";
import Input from "@/app/components/material/input";
import { useState } from "react";

interface LoginResponse {
    jwt: string;
    user: {
      id: number;
      documentId: number;
    }
  }
 
export default function Login() {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
 
  const login = async (e: React.FormEvent) => {
    e.preventDefault();
    let body = {
      identifier: identifier,
      password: password,
    };
    const res = await fetchActionApi("/api/auth/local", {
      method: "POST",
      body: JSON.stringify(body),
    } as any);
    console.log(res);
    if(res) {
        if (res.status === 200) {
            const token = res.data as LoginResponse;
            await setAccessToken(token.jwt);
                window.location.href = "/";
        } else {
            alert("เข้าสู่ระบบไม่สําเร็จ");
        }
    }
  };
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-2xl shadow-lg max-w-sm w-full">
                <h1 className="text-2xl font-semibold text-center mb-6 text-gray-700">เข้าสู่ระบบ</h1>
                <form onSubmit={(e) => login(e)} className="space-y-4">   
                    <Input
                        type="text"
                        id="identifier"
                        value={identifier}
                        label="ชื่อผู้ใช้"
                        onChange={(e) => setIdentifier(e.target.value)}
                        required                    
                    />
                    <Input
                        type="password"
                        id="password"
                        value={password}
                        label="รหัสผ่าน"
                        onChange={(e) => setPassword(e.target.value)}
                        required                    
                    />
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                    >
                        เข้าสู่ระบบ
                    </button>
                </form>
            </div>
        </div>
    );
}