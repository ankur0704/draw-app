"use client";

import { WS_URL } from "@/config";
import { initDraw } from "@/draw";
import { useEffect, useRef, useState } from "react";
import { Canvas } from "./Canvas";

export function RoomCanvas({ roomId }: { roomId: string }) {
    const [socket, setSocket] = useState<WebSocket | null>(null);
    const [unauthorized, setUnauthorized] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            setUnauthorized(true);
            return;
        }
        const ws = new WebSocket(`${WS_URL}?token=${token}`)

        ws.onopen = () => {
            setSocket(ws);
            const data = JSON.stringify({
                type: "join_room",
                roomId
            });
            console.log(data);
            ws.send(data)
        }

        ws.onclose = () => {
            setSocket(null);
        }

        ws.onerror = (error) => {
            console.error("WebSocket error:", error);
        }

        return () => {
            ws.close();
        }

    }, [roomId])

    if (unauthorized) {
        return <div>
            You need to sign in to access this page. <a href="/signin">Sign in</a>
        </div>
    }

    if (!socket) {
        return <div>
            Connecting to server....
        </div>
    }

    return <div>
        <Canvas roomId={roomId} socket={socket} />

    </div>
}