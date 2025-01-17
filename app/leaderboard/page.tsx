"use client";

import { useEffect, useState } from "react";
import ParticlesComponent from "@/components/Particles";

interface LeaderboardEntry {
    OSPC_ID: number;
    Name: string;
    REG_NO: string;
    Points: number | null;
}

const Leaderboard = () => {
    const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
    const [error, setError] = useState<string>("");
  
    useEffect(() => {
        const fetchLeaderboard = async () => {
          const res = await fetch("/api/leaderboard");
          const {data , error} = await res.json();
          

            if (error) {
                setError(`Error fetching leaderboard: ${error.message}`);
                return;
            }

            if (data?.length) {
                const sortedData = data.sort(
                    (a: LeaderboardEntry, b: LeaderboardEntry) => {
                        if (b.Points === null || b.Points === 0) return -1;
                        if (a.Points === null || a.Points === 0) return 1;
                        return (b.Points || 0) - (a.Points || 0);
                    }
                );
                setLeaderboard(sortedData);
            } else {
                setError("No data found.");
            }
        };

        fetchLeaderboard();
    }, []);

    return (
        <div className="min-h-screen ">
            <ParticlesComponent id="particles-background" />

            <div className="relative z-10 container mx-auto px-4 py-8">
                <div className="text-center mb-10">
                    <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-gray-100">
                        Leaderboard
                    </h1>
                </div>

                <div className="bg-gray-800/80 backdrop-blur rounded-lg border border-green-500/20 shadow-xl">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-green-500/20">
                                    <th className="px-6 py-4 bg-gray-800/50 text-left text-green-400 font-mono">
                                        #
                                    </th>
                                    <th className="px-6 py-4 bg-gray-800/50 text-left text-green-400 font-mono">
                                        Member
                                    </th>
                                    <th className="px-6 py-4 bg-gray-800/50 text-left text-green-400 font-mono">
                                        ID
                                    </th>
                                    <th className="px-6 py-4 bg-gray-800/50 text-left text-green-400 font-mono">
                                        Reg No
                                    </th>
                                    <th className="px-6 py-4 bg-gray-800/50 text-left text-green-400 font-mono">
                                        Points
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {error ? (
                                    <tr>
                                        <td
                                            colSpan={5}
                                            className="px-6 py-4 text-red-400 font-mono text-center"
                                        >
                                            {error}
                                        </td>
                                    </tr>
                                ) : (
                                    leaderboard.map((entry, index) => (
                                        <tr
                                            key={entry.OSPC_ID}
                                            className="border-b border-green-500/10 hover:bg-gray-700/50 transition-colors"
                                        >
                                            <td className="px-6 py-4 font-mono text-gray-300">
                                                {String(index + 1).padStart(
                                                    2,
                                                    "0"
                                                )}
                                            </td>
                                            <td className="px-6 py-4 font-mono text-gray-300">
                                                {entry.Name}
                                            </td>
                                            <td className="px-6 py-4 font-mono text-gray-400">
                                                OSPC_{entry.OSPC_ID}
                                            </td>
                                            <td className="px-6 py-4 font-mono text-gray-300">
                                                {entry.REG_NO}
                                            </td>
                                            <td className="px-6 py-4 font-mono text-gray-300">
                                                {entry.Points !== null
                                                    ? entry.Points
                                                    : 0}
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>

                <footer className="mt-8 text-center text-gray-500 font-mono text-sm">
                    <p>$ contributors.length && growing</p>
                </footer>
            </div>
        </div>
    );
};

export default Leaderboard;
