import Sidebar from "@/components/Sidebar";
import ProductCatalog from "@/components/ProductCatalog";

const Catalog = () => {
  return (
    <div className="flex min-h-screen bg-gradient-dashboard">
      <Sidebar />
      <main className="flex-1">
        <ProductCatalog />
      </main>
    </div>
  );
};

export default Catalog;
