const Dashboard = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
          <main className="flex-1 flex flex-col items-center justify-center p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl">
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <h2 className="text-xl font-semibold text-gray-700">Total Users</h2>
                <p className="text-4xl font-bold text-gray-900 mt-4">1,245</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <h2 className="text-xl font-semibold text-gray-700">Total Products</h2>
                <p className="text-4xl font-bold text-gray-900 mt-4">3,562</p>
              </div>
            </div>
          </main>
        </div>
      );
}
export default Dashboard;