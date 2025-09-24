import Sidebar from "@/components/Sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  BarChart3,
  Package,
  AlertTriangle,
  TrendingUp,
  Search,
  Download,
  RefreshCw,
  MapPin,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const Inventory = () => {
  // Mock inventory data
  const inventoryData = [
    {
      id: "SKU001",
      name: "iPhone 15 Pro",
      category: "Electronics",
      location: "Warehouse A",
      currentStock: 45,
      reservedStock: 8,
      availableStock: 37,
      reorderPoint: 10,
      maxStock: 100,
      lastUpdated: "2024-01-15 14:30",
      status: "Good",
    },
    {
      id: "SKU002",
      name: "Nike Air Max 270",
      category: "Footwear",
      location: "Warehouse B",
      currentStock: 23,
      reservedStock: 15,
      availableStock: 8,
      reorderPoint: 15,
      maxStock: 50,
      lastUpdated: "2024-01-15 13:45",
      status: "Low Stock",
    },
    {
      id: "SKU003",
      name: "Samsung 55\" QLED TV",
      category: "Electronics",
      location: "Warehouse A",
      currentStock: 8,
      reservedStock: 3,
      availableStock: 5,
      reorderPoint: 5,
      maxStock: 25,
      lastUpdated: "2024-01-15 12:20",
      status: "Critical",
    },
    {
      id: "SKU004",
      name: "Office Ergonomic Chair",
      category: "Furniture",
      location: "Warehouse C",
      currentStock: 12,
      reservedStock: 2,
      availableStock: 10,
      reorderPoint: 8,
      maxStock: 30,
      lastUpdated: "2024-01-15 11:15",
      status: "Good",
    },
  ];

  const stockMovementData = [
    { date: "Jan 10", inbound: 45, outbound: 32 },
    { date: "Jan 11", inbound: 28, outbound: 41 },
    { date: "Jan 12", inbound: 35, outbound: 29 },
    { date: "Jan 13", inbound: 52, outbound: 38 },
    { date: "Jan 14", inbound: 41, outbound: 45 },
    { date: "Jan 15", inbound: 38, outbound: 33 },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Good":
        return "bg-success text-success-foreground";
      case "Low Stock":
        return "bg-warning text-warning-foreground";
      case "Critical":
        return "bg-danger text-danger-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getStockPercentage = (current: number, max: number) => {
    return Math.round((current / max) * 100);
  };

  return (
    <div className="flex min-h-screen bg-gradient-dashboard">
      <Sidebar />
      <main className="flex-1 p-6">
        <div className="max-w-7xl mx-auto space-y-6">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Inventory Tracking</h1>
              <p className="text-muted-foreground">Real-time stock levels and movement tracking</p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" className="gap-2" onClick={() => alert("Exporting report...")}>
                <Download className="h-4 w-4" />
                Export Report
              </Button>
              <Button variant="outline" className="gap-2" onClick={() => alert("Syncing stock...")}>
                <RefreshCw className="h-4 w-4" />
                Sync Stock
              </Button>
            </div>
          </div>

          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="shadow-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-muted-foreground text-sm font-medium">Total Items</p>
                    <p className="text-2xl font-bold text-foreground">2,847</p>
                    <p className="text-sm font-medium text-success">+12% from last month</p>
                  </div>
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Package className="h-6 w-6 text-primary" />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-muted-foreground text-sm font-medium">Low Stock Items</p>
                    <p className="text-2xl font-bold text-foreground">23</p>
                    <p className="text-sm font-medium text-warning">Need attention</p>
                  </div>
                  <div className="p-3 rounded-lg bg-warning/10">
                    <AlertTriangle className="h-6 w-6 text-warning" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-muted-foreground text-sm font-medium">Total Value</p>
                    <p className="text-2xl font-bold text-foreground">$1.2M</p>
                    <p className="text-sm font-medium text-success">+8.5% value</p>
                  </div>
                  <div className="p-3 rounded-lg bg-success/10">
                    <TrendingUp className="h-6 w-6 text-success" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-muted-foreground text-sm font-medium">Locations</p>
                    <p className="text-2xl font-bold text-foreground">5</p>
                    <p className="text-sm font-medium text-muted-foreground">Active warehouses</p>
                  </div>
                  <div className="p-3 rounded-lg bg-muted/10">
                    <MapPin className="h-6 w-6 text-muted-foreground" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Stock Movement Chart */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-primary" />
                Stock Movement (Last 7 Days)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={stockMovementData}>
                    <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Bar dataKey="inbound" fill="hsl(var(--success))" name="Inbound" />
                    <Bar dataKey="outbound" fill="hsl(var(--primary))" name="Outbound" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Inventory Table */}
          <Card className="shadow-card">
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <CardTitle>Real-time Stock Levels</CardTitle>
                <div className="flex gap-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input placeholder="Search inventory..." className="pl-10 w-64" />
                  </div>
                  <Select defaultValue="all">
                    <SelectTrigger className="w-40">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Locations</SelectItem>
                      <SelectItem value="warehouse-a">Warehouse A</SelectItem>
                      <SelectItem value="warehouse-b">Warehouse B</SelectItem>
                      <SelectItem value="warehouse-c">Warehouse C</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>SKU</TableHead>
                      <TableHead>Product</TableHead>
                      <TableHead>Location</TableHead>
                      <TableHead>Current Stock</TableHead>
                      <TableHead>Available</TableHead>
                      <TableHead>Reserved</TableHead>
                      <TableHead>Stock Level</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Last Updated</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {inventoryData.map((item) => (
                      <TableRow key={item.id} className="hover:bg-muted/50">
                        <TableCell className="font-mono text-sm">{item.id}</TableCell>
                        <TableCell>
                          <div>
                            <p className="font-medium">{item.name}</p>
                            <p className="text-sm text-muted-foreground">{item.category}</p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">{item.location}</Badge>
                        </TableCell>
                        <TableCell className="font-semibold">{item.currentStock}</TableCell>
                        <TableCell className="text-success">{item.availableStock}</TableCell>
                        <TableCell className="text-warning">{item.reservedStock}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <div className="w-20 bg-muted rounded-full h-2 overflow-hidden">
                              <div 
                                className={`h-full transition-all ${
                                  getStockPercentage(item.currentStock, item.maxStock) > 50 
                                    ? 'bg-success' 
                                    : getStockPercentage(item.currentStock, item.maxStock) > 20 
                                    ? 'bg-warning' 
                                    : 'bg-danger'
                                }`}
                                style={{ width: `${getStockPercentage(item.currentStock, item.maxStock)}%` }}
                              />
                            </div>
                            <span className="text-sm text-muted-foreground">
                              {getStockPercentage(item.currentStock, item.maxStock)}%
                            </span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge className={getStatusColor(item.status)}>
                            {item.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-sm text-muted-foreground">
                          {item.lastUpdated}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Inventory;
