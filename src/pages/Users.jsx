export default function Users() {
  const users = [
    { id: 1, name: "John Doe", email: "john@example.com", role: "Admin", status: "Active" },
    { id: 2, name: "Sarah Khan", email: "sarah@example.com", role: "User", status: "Pending" },
    { id: 3, name: "Ali Hasan", email: "ali@example.com", role: "Editor", status: "Active" },
    { id: 4, name: "Nusrat Jahan", email: "nusrat@example.com", role: "User", status: "Inactive" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Users</h1>
          <p className="text-gray-500">Manage all registered users</p>
        </div>

        <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800">
          + Add User
        </button>
      </div>

      {/* Users Table */}
      <div className="bg-white rounded-xl shadow overflow-x-auto">

        <table className="w-full text-sm text-left">
          <thead className="bg-gray-50 text-gray-500">
            <tr>
              <th className="p-4">Name</th>
              <th className="p-4">Email</th>
              <th className="p-4">Role</th>
              <th className="p-4">Status</th>
              <th className="p-4 text-right">Actions</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-b hover:bg-gray-50">

                <td className="p-4 font-medium text-gray-800">
                  {user.name}
                </td>

                <td className="p-4 text-gray-600">
                  {user.email}
                </td>

                <td className="p-4">
                  <span className="px-2 py-1 text-xs rounded bg-gray-200">
                    {user.role}
                  </span>
                </td>

                <td className="p-4">
                  <span
                    className={`px-2 py-1 text-xs rounded ${
                      user.status === "Active"
                        ? "bg-green-100 text-green-600"
                        : user.status === "Pending"
                        ? "bg-yellow-100 text-yellow-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {user.status}
                  </span>
                </td>

                <td className="p-4 text-right space-x-2">
                  <button className="text-blue-600 hover:underline">
                    Edit
                  </button>
                  <button className="text-red-600 hover:underline">
                    Delete
                  </button>
                </td>

              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </div>
  );
}