"use client";
import React, { useState } from "react";

export default function Login() {
    const [identifier, setIdentifier] = useState("");
    const [password, setPassword] = useState("");

    const login = async (e: React.FormEvent) => {
        e.preventDefault();
        let body = {
            identifier: identifier,
            password: password
        };
        await fetch("/api/auth/local", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        });
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-2xl shadow-lg max-w-sm w-full">
                <h1 className="text-2xl font-semibold text-center mb-6 text-gray-700">เข้าสู่ระบบ</h1>
                <form onSubmit={login} className="space-y-4">
                    <div>
                        <label className="block text-gray-600 text-sm mb-1" htmlFor="identifier">ชื่อผู้ใช้</label>
                        <input
                            type="text"
                            id="identifier"
                            name="identifier"
                            value={identifier}
                            onChange={(e) => setIdentifier(e.target.value)}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-600 text-sm mb-1" htmlFor="password">รหัสผ่าน</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            required
                        />
                    </div>
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