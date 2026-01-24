"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";


export default function Home() {

  const [roomId, setRoomId] = useState("");
  const router = useRouter();



  return (
    <div className="flex h-100vh w-100vh align-items-center justify-content-center">
      <input className="p-10" value={roomId} onChange={(e) => {
        setRoomId(e.target.value);

      }} type="text" placeholder="Room id"></input>
      <button className="p-10" onClick={() => {
        router.push(`/room/${roomId}`);
      }}>Join Room</button>
    </div>
  )
}