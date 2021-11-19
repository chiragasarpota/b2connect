import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LabelList,
} from "recharts";

import { getCryptoPrices } from "../services/api";

export default function CryptoPrices() {
  const [priceData, setPriceData] = useState(null);

  useEffect(() => {
    const dataUpdate = async () => {
      const data = await getCryptoPrices();
      setPriceData(data);
    };
    dataUpdate();

    let dataUpdateTimer = setInterval(dataUpdate, 5000);
    return () => {
      clearInterval(dataUpdateTimer);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center md:mx-20 lg:mx-20 mx-4 ">
      <h1 className="text-4xl text-black font-bold pb-6">
        Live Bitcoin (BTC) Prices (5 sec refresh):
      </h1>
      <h1 className="text-4xl text-black font-md pb-6">1 BTC =</h1>
      <div className="bg-white w-full h-screen rounded-2xl lg:pt-16 lg:p-28 md:pt-16 md:p-28 py-8 px-4">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={800}
            height={400}
            data={priceData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" name="Price" fill="#F7931A">
              <LabelList dataKey="value" position="top" />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
