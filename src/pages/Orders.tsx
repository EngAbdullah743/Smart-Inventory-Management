import Sidebar from "@/components/Sidebar";
import OrderManagement from "@/components/OrderManagement";

const Orders = () => {
  return (
    <div className="flex min-h-screen bg-gradient-dashboard">
      <Sidebar />
      <main className="flex-1">
        <OrderManagement />
      </main>
    </div>
  );
};

export default Orders;
