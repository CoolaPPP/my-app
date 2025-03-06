"use client";
import { fetchActionApi } from "@/app/utils/action";
import { useState } from "react";
import Input from "../components/material/input";
 
export default function Register() {
    const [ username, setUsername] = useState("");
    const [ email, setEmail] = useState("");
    const [ password, setPassword] = useState("");
    const [ confirmPassword, setConfirmPassword] = useState("");
    const register = async (e: React.FormEvent) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("รหัสผ่านไม่ตรงกัน")
            return;
        }
        let body = {
            username: username,
            email: email,
            password: password
        };
        const res = await fetchActionApi("/api/auth/local/register", {
            method: "POST",
            body: JSON.stringify(body)
        });
        if (res) {
            if (res.status === 200) {
                window.location.href = "/";
            } else {
                alert("สมัครสมาชิกไม่สําเร็จ");
            }
        }
        console.log(res);
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                <h2 className="text-2xl font-bold text-center mb-6">สมัครสมาชิก</h2>
                <form onSubmit={(e) => register(e)} className="space-y-4">
                    <Input
                        type="text"
                        id="username"
                        value={username}
                        label="ชื่อผู้ใช้"
                        onChange={(e) => setUsername(e.target.value)}
                        required                    
                    />
                    <Input
                        type="text"
                        id="email"
                        value={email}
                        label="อีเมล"
                        onChange={(e) => setEmail(e.target.value)}
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
                    <Input
                        type="password"
                        id="comfirmpassword"
                        value={confirmPassword}
                        label="ยืนยันรหัสผ่าน"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required                    
                    />
                    
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
                    >
                        สมัครสมาชิก
                    </button>
                </form>
            </div>
        </div>
    );
}