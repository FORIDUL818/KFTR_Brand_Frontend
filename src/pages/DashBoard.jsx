
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">

      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          Dashboard Overview
        </h1>
        <p className="text-gray-500">
          Welcome back 👋 here’s what’s happening today
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        <div className="bg-white rounded-xl shadow p-5">
          <h3 className="text-gray-500 text-sm">Total Users</h3>
          <p className="text-3xl font-bold text-gray-800">1,240</p>
          <span className="text-green-500 text-sm">+12% this week</span>
        </div>

        <div className="bg-white rounded-xl shadow p-5">
          <h3 className="text-gray-500 text-sm">Total Orders</h3>
          <p className="text-3xl font-bold text-gray-800">320</p>
          <span className="text-green-500 text-sm">+5% this week</span>
        </div>

        <div className="bg-white rounded-xl shadow p-5">
          <h3 className="text-gray-500 text-sm">Revenue</h3>
          <p className="text-3xl font-bold text-gray-800">$12,400</p>
          <span className="text-green-500 text-sm">+18% this week</span>
        </div>

      </div>

      {/* Middle Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">

        {/* Recent Activity */}
        <div className="bg-white rounded-xl shadow p-5">
          <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>

          <ul className="space-y-3 text-sm text-gray-600">
            <li>🟢 New user registered</li>
            <li>🛒 Order #1024 placed</li>
            <li>💳 Payment received</li>
            <li>📦 Product shipped</li>
          </ul>
        </div>

        {/* Chart Placeholder */}
        {/* Chart Section */}
<div className="bg-white rounded-xl shadow p-5">
  <h2 className="text-lg font-semibold mb-4">Performance</h2>

  <Line
    data={{
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      datasets: [
        {
          label: "Sales",
          data: [120, 190, 300, 250, 420, 380, 500],
          borderColor: "#111827",
          backgroundColor: "rgba(17, 24, 39, 0.1)",
          tension: 0.4,
          fill: true,
          pointRadius: 4,
        },
      ],
    }}
    options={{
      responsive: true,
      plugins: {
        legend: { display: false },
      },
      scales: {
        x: { grid: { display: false } },
        y: { grid: { color: "#e5e7eb" } },
      },
    }}
  />
</div>

      </div>

      {/* Bottom Section */}
      <div className="mt-6 bg-white rounded-xl shadow p-5">
        <h2 className="text-lg font-semibold mb-4">Latest Orders</h2>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead>
              <tr className="text-gray-500 border-b">
                <th className="p-2">Order ID</th>
                <th className="p-2">Customer</th>
                <th className="p-2">Status</th>
                <th className="p-2">Amount</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b">
                <td className="p-2">#1001</td>
                <td className="p-2">John Doe</td>
                <td className="p-2 text-green-500">Completed</td>
                <td className="p-2">$120</td>
              </tr>

              <tr className="border-b">
                <td className="p-2">#1002</td>
                <td className="p-2">Sarah Khan</td>
                <td className="p-2 text-yellow-500">Pending</td>
                <td className="p-2">$90</td>
              </tr>

              <tr>
                <td className="p-2">#1003</td>
                <td className="p-2">Ali Hasan</td>
                <td className="p-2 text-red-500">Cancelled</td>
                <td className="p-2">$60</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}