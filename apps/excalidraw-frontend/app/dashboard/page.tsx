"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { HTTP_BACKEND } from "@/config";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { LogOut, Plus, ArrowRight, LayoutGrid } from "lucide-react";

interface Room {
    id: string;
    slug: string;
    createdAt: string;
}

export default function Dashboard() {
    const [rooms, setRooms] = useState<Room[]>([]);
    const [loading, setLoading] = useState(true);
    const [creating, setCreating] = useState(false);
    const [newRoomName, setNewRoomName] = useState("");
    const [showModal, setShowModal] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const fetchRooms = async () => {
            const token = localStorage.getItem("token");
            if (!token) {
                router.push("/signin");
                return;
            }

            try {
                const response = await axios.get(`${HTTP_BACKEND}/rooms`, {
                    headers: {
                        Authorization: token
                    }
                });
                setRooms(response.data.rooms);
            } catch (e) {
                console.error("Failed to fetch rooms", e);
            } finally {
                setLoading(false);
            }
        };

        fetchRooms();
    }, [router]);

    const handleCreateRoom = async () => {
        if (!newRoomName) return;
        setCreating(true);
        const token = localStorage.getItem("token");
        try {
            const response = await axios.post(`${HTTP_BACKEND}/room`, {
                name: newRoomName
            }, {
                headers: {
                    Authorization: token
                }
            });

            router.push(`/canvas/${response.data.roomId}`);
        } catch (e) {
            console.error("Failed to create room", e);
            alert("Failed to create room. Name might be taken.");
            setCreating(false);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem("token");
        router.push("/signin");
    };

    if (loading) {
        return <div className="flex items-center justify-center h-screen bg-gray-50">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>;
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white shadow-sm sticky top-0 z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <LayoutGrid className="w-6 h-6 text-blue-600" />
                        <h1 className="text-xl font-bold text-gray-800">Dashboard</h1>
                    </div>
                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition-colors px-3 py-2 rounded-md hover:bg-gray-100"
                    >
                        <LogOut className="w-5 h-5" />
                        <span className="hidden sm:inline">Logout</span>
                    </button>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Action Bar */}
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-2xl font-bold text-gray-800">Your Rooms</h2>
                    <button
                        onClick={() => setShowModal(true)}
                        className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow transition-all hover:shadow-md active:scale-95"
                    >
                        <Plus className="w-5 h-5" />
                        Create New Room
                    </button>
                </div>

                {/* Room Grid */}
                {rooms.length === 0 ? (
                    <div className="text-center py-20 bg-white rounded-xl shadow-sm border border-gray-100">
                        <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Plus className="w-8 h-8 text-blue-500" />
                        </div>
                        <h3 className="text-lg font-medium text-gray-900 mb-2">No rooms yet</h3>
                        <p className="text-gray-500 mb-6">Create your first room to start drawing!</p>
                        <button
                            onClick={() => setShowModal(true)}
                            className="text-blue-600 font-semibold hover:text-blue-700"
                        >
                            Create a room &rarr;
                        </button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {rooms.map((room) => (
                            <div key={room.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                                            {room.slug}
                                        </h3>
                                        <p className="text-xs text-gray-500 mt-1">
                                            Created {new Date(room.createdAt).toLocaleDateString()}
                                        </p>
                                    </div>
                                    <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <ArrowRight className="w-4 h-4" />
                                    </div>
                                </div>
                                <Link
                                    href={`/canvas/${room.id}`}
                                    className="block w-full text-center bg-gray-50 hover:bg-blue-50 text-gray-700 hover:text-blue-700 font-medium py-2 rounded-lg transition-colors border border-gray-200 hover:border-blue-200"
                                >
                                    Join Room
                                </Link>
                            </div>
                        ))}
                    </div>
                )}
            </main>

            {/* Create Room Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 backdrop-blur-sm">
                    <div className="bg-white rounded-xl shadow-2xl w-full max-w-md p-6 transform transition-all scale-100">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-xl font-bold text-gray-900">Create New Room</h3>
                            <button
                                onClick={() => setShowModal(false)}
                                className="text-gray-400 hover:text-gray-600 text-2xl leading-none"
                            >
                                &times;
                            </button>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Room Name</label>
                                <input
                                    type="text"
                                    placeholder="e.g., Project Brainstorming"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
                                    value={newRoomName}
                                    onChange={(e) => setNewRoomName(e.target.value)}
                                    autoFocus
                                />
                            </div>

                            <div className="flex gap-3 pt-2">
                                <button
                                    onClick={() => setShowModal(false)}
                                    className="flex-1 py-2.5 px-4 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    disabled={creating}
                                    className={`flex-1 py-2.5 px-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 shadow-sm hover:shadow transition-all ${creating ? 'opacity-50 cursor-not-allowed' : ''}`}
                                >
                                    {creating ? "Creating..." : "Create Room"}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
