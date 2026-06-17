import { useState } from "react";

export default function Orders() {
  const [search, setSearch] = useState("");

  const orders = [
    {
      id: "#ORD-1001",
      customer: "John Doe",
      total: 250,
      payment: "Paid",
      status: "Delivered",
      date: "2026-06-15",
    },
    {
      id: "#ORD-1002",
      customer: "Sarah Smith",
      total: 120,
      payment: "Pending",
      status: "Processing",
      date: "2026-06-16",
    },
    {
      id: "#ORD-1003",
      customer: "David Miller",
      total: 450,
      payment: "Paid",
      status: "Shipped",
      date: "2026-06-16",
    },
    {
      id: "#ORD-1004",
      customer: "Alex Johnson",
      total: 89,
      payment: "Failed",
      status: "Cancelled",
      date: "2026-06-17",
    },
  ];

  const filteredOrders = orders.filter(
    (order) =>
      order.id.toLowerCase().includes(search.toLowerCase()) ||
      order.customer.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">
          Orders Management
        </h1>

        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
          Export Orders
        </button>
      </div>

      {/* Search */}
      <div>
        <input
          type="text"
          placeholder="Search order..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-96 border rounded-lg px-4 py-2 focus:outline-none focus:ring"
        />
      </div>

      {/* Orders Table */}
      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left p-4">Order ID</th>
              <th className="text-left p-4">Customer</th>
              <th className="text-left p-4">Date</th>
              <th className="text-left p-4">Amount</th>
              <th className="text-left p-4">Payment</th>
              <th className="text-left p-4">Status</th>
              <th className="text-left p-4">Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredOrders.map((order) => (
              <tr
                key={order.id}
                className="border-t hover:bg-gray-50"
              >
                <td className="p-4 font-medium">
                  {order.id}
                </td>

                <td className="p-4">
                  {order.customer}
                </td>

                <td className="p-4">
                  {order.date}
                </td>

                <td className="p-4">
                  ${order.total}
                </td>

                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      order.payment === "Paid"
                        ? "bg-green-100 text-green-700"
                        : order.payment === "Pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {order.payment}
                  </span>
                </td>

                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      order.status === "Delivered"
                        ? "bg-green-100 text-green-700"
                        : order.status === "Processing"
                        ? "bg-blue-100 text-blue-700"
                        : order.status === "Shipped"
                        ? "bg-purple-100 text-purple-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>

                <td className="p-4 space-x-2">
                  <button className="bg-blue-500 text-white px-3 py-1 rounded">
                    View
                  </button>

                  <button className="bg-gray-700 text-white px-3 py-1 rounded">
                    Invoice
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filteredOrders.length === 0 && (
          <div className="text-center py-10 text-gray-500">
            No Orders Found
          </div>
        )}
      </div>
    </div>
  );
}