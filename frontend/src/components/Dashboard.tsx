import React, { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:5000"); // Connect to backend WebSocket

interface EnergyData {
    powerUsage: number;
    timestamp: string;
}

const Dashboard: React.FC = () => {
    const [energyData, setEnergyData] = useState<EnergyData | null>(null);

    useEffect(() => {
        socket.on("energyData", (data: EnergyData[]) => {
            if (data.length > 0) {
                setEnergyData(data[0]);
            }
        });

        return () => {
            socket.off("energyData");
        };
    }, []);

    return (
        <div>
            <h2>Live Energy Consumption</h2>
            {energyData ? (
                <div>
                    <p>Power Usage: {energyData.powerUsage} kW</p>
                    <p>Timestamp: {new Date(energyData.timestamp).toLocaleString()}</p>
                </div>
            ) : (
                <p>No data available</p>
            )}
        </div>
    );
};

export default Dashboard;
