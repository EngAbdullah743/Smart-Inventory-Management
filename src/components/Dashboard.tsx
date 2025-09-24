import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
} from "recharts";
import {
  Package,
  TrendingUp,
  ShoppingCart,
  AlertTriangle,
  Users,
  DollarSign,
  Truck,
  BarChart3,
} from "lucide-react";

const Dashboard = () => {
  const [showAddProductForm, setShowAddProductForm] = useState(false);
  const [showExportReport, setShowExportReport] = useState(false);
  // Mock data for charts
  const salesData = [
    { name: "Jan", value: 12400 },
    { name: "Feb", value: 19800 },
    { name: "Mar", value: 15200 },
    { name: "Apr", value: 21000 },
    { name: "May", value: 18600 },
    { name: "Jun", value: 24800 },
  ];

  const inventoryData = [
    { name: "Electronics", value: 35, color: "hsl(var(--primary))" },
    { name: "Clothing", value: 25, color: "hsl(var(--success))" },
    { name: "Home & Garden", value: 20, color: "hsl(var(--warning))" },
    { name: "Sports", value: 15, color: "hsl(var(--danger))" },
    { name: "Books", value: 5, color: "hsl(var(--muted-foreground))" },
  ];

  const lowStockItems = [
    { name: "iPhone 15 Pro", stock: 3, reorderPoint: 10, category: "Electronics" },
    { name: "Nike Air Max", stock: 2, reorderPoint: 8, category: "Footwear" },
    { name: "Samsung TV 55\"", stock: 1, reorderPoint: 5, category: "Electronics" },
    { name: "Office Chair", stock: 4, reorderPoint: 12, category: "Furniture" },
  ];

  const recentOrders = [
    { id: "ORD-001", customer: "TechMart Inc.", amount: 15400, status: "Shipped", date: "2024-01-15" },
    { id: "ORD-002", customer: "Retail Plus", amount: 8900, status: "Processing", date: "2024-01-14" },
    { id: "ORD-003", customer: "Global Store", amount: 22100, status: "Delivered", date: "2024-01-13" },
    { id: "ORD-004", customer: "Quick Sales", amount: 12300, status: "Pending", date: "2024-01-12" },
  ];

  const metrics = [
    {
      title: "Total Products",
      value: "2,847",
      change: "+12%",
      icon: Package,
      trend: "up",
    },
    {
      title: "Monthly Revenue",
      value: "$124,890",
      change: "+8.2%",
      icon: DollarSign,
      trend: "up",
    },
    {
      title: "Active Orders",
      value: "156",
      change: "-3%",
      icon: ShoppingCart,
      trend: "down",
    },
    {
      title: "Low Stock Items",
      value: "23",
      change: "+5",
      icon: AlertTriangle,
      trend: "warning",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Delivered":
        return "bg-success text-success-foreground";
      case "Shipped":
        return "bg-primary text-primary-foreground";
      case "Processing":
        return "bg-warning text-warning-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-dashboard p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Inventory Dashboard</h1>
            <p className="text-muted-foreground">Monitor your inventory and business performance</p>
          </div>
          <div className="flex gap-3">
            <Button
              variant="outline"
              className="gap-2"
              onClick={() => setShowExportReport(!showExportReport)}
            >
              <BarChart3 className="h-4 w-4" />
              Export Report
            </Button>
            <Button
              className="gap-2 bg-gradient-primary"
              onClick={() => setShowAddProductForm(!showAddProductForm)}
            >
              <Package className="h-4 w-4" />
              Add Product
            </Button>
          </div>
        </div>

        {showAddProductForm && (
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Add New Product</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Product Name</Label>
                  <Input id="name" placeholder="Enter product name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="sku">SKU</Label>
                  <Input id="sku" placeholder="Enter SKU" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="electronics">Electronics</SelectItem>
                      <SelectItem value="footwear">Footwear</SelectItem>
                      <SelectItem value="furniture">Furniture</SelectItem>
                      <SelectItem value="clothing">Clothing</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="price">Price</Label>
                  <Input id="price" type="number" placeholder="0.00" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="stock">Initial Stock</Label>
                  <Input id="stock" type="number" placeholder="0" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="reorder">Reorder Point</Label>
                  <Input id="reorder" type="number" placeholder="0" />
                </div>
                <div className="col-span-2 space-y-2">
                  <Label htmlFor="supplier">Supplier</Label>
                  <Input id="supplier" placeholder="Enter supplier name" />
                </div>
                <div className="col-span-2 space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Enter product description"
                  />
                </div>
                <div className="col-span-2 flex justify-end gap-2 pt-4">
                  <Button
                    variant="outline"
                    onClick={() => setShowAddProductForm(false)}
                  >
                    Cancel
                  </Button>
                  <Button
                    className="bg-gradient-primary"
                    onClick={() => {
                      alert("Product added!");
                      setShowAddProductForm(false);
                    }}
                  >
                    Add Product
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {showExportReport && (
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Export Report</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="reportType">Report Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select report type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sales">Sales Report</SelectItem>
                      <SelectItem value="inventory">
                        Inventory Report
                      </SelectItem>
                      <SelectItem value="orders">Orders Report</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="format">Format</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select format" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="csv">CSV</SelectItem>
                      <SelectItem value="pdf">PDF</SelectItem>
                      <SelectItem value="xlsx">XLSX</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="col-span-2 flex justify-end gap-2 pt-4">
                  <Button
                    variant="outline"
                    onClick={() => setShowExportReport(false)}
                  >
                    Cancel
                  </Button>
                  <Button
                    className="bg-gradient-primary"
                    onClick={() => {
                      alert("Report exported!");
                      setShowExportReport(false);
                    }}
                  >
                    Export
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <Card key={index} className="shadow-card hover:shadow-hover transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-muted-foreground text-sm font-medium">{metric.title}</p>
                    <p className="text-2xl font-bold text-foreground">{metric.value}</p>
                    <p className={`text-sm font-medium ${
                      metric.trend === 'up' ? 'text-success' : 
                      metric.trend === 'warning' ? 'text-warning' : 'text-danger'
                    }`}>
                      {metric.change} from last month
                    </p>
                  </div>
                  <div className={`p-3 rounded-lg ${
                    metric.trend === 'up' ? 'bg-success/10' : 
                    metric.trend === 'warning' ? 'bg-warning/10' : 'bg-danger/10'
                  }`}>
                    <metric.icon className={`h-6 w-6 ${
                      metric.trend === 'up' ? 'text-success' : 
                      metric.trend === 'warning' ? 'text-warning' : 'text-danger'
                    }`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Sales Trend */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                Sales Trend
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={salesData}>
                    <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Line 
                      type="monotone" 
                      dataKey="value" 
                      stroke="hsl(var(--primary))" 
                      strokeWidth={3}
                      dot={{ fill: "hsl(var(--primary))", strokeWidth: 2, r: 6 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Inventory Distribution */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Package className="h-5 w-5 text-primary" />
                Inventory by Category
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={inventoryData}
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      dataKey="value"
                      label={({ name, value }) => `${name}: ${value}%`}
                    >
                      {inventoryData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tables Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Low Stock Alert */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-warning" />
                Low Stock Alert
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {lowStockItems.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                    <div>
                      <p className="font-medium text-foreground">{item.name}</p>
                      <p className="text-sm text-muted-foreground">{item.category}</p>
                    </div>
                    <div className="text-right">
                      <Badge variant="outline" className="text-warning border-warning">
                        {item.stock} left
                      </Badge>
                      <p className="text-xs text-muted-foreground mt-1">
                        Reorder at {item.reorderPoint}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Orders */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Truck className="h-5 w-5 text-primary" />
                Recent Orders
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentOrders.map((order, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                    <div>
                      <p className="font-medium text-foreground">{order.id}</p>
                      <p className="text-sm text-muted-foreground">{order.customer}</p>
                      <p className="text-xs text-muted-foreground">{order.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-foreground">${order.amount.toLocaleString()}</p>
                      <Badge className={getStatusColor(order.status)}>
                        {order.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
