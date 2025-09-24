import { useState } from "react";
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
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import {
  ShoppingCart,
  Plus,
  Search,
  Eye,
  Edit,
  Truck,
  Package,
  Clock,
  CheckCircle,
  AlertCircle,
  Filter,
} from "lucide-react";

const OrderManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  // Mock order data
  const salesOrders = [
    {
      id: "SO-001",
      customer: "TechMart Inc.",
      date: "2024-01-15",
      dueDate: "2024-01-20",
      items: 5,
      total: 15400.00,
      status: "Shipped",
      priority: "High",
    },
    {
      id: "SO-002",
      customer: "Retail Plus",
      date: "2024-01-14",
      dueDate: "2024-01-19",
      items: 3,
      total: 8900.00,
      status: "Processing",
      priority: "Medium",
    },
    {
      id: "SO-003",
      customer: "Global Store",
      date: "2024-01-13",
      dueDate: "2024-01-18",
      items: 8,
      total: 22100.00,
      status: "Delivered",
      priority: "Low",
    },
    {
      id: "SO-004",
      customer: "Quick Sales",
      date: "2024-01-12",
      dueDate: "2024-01-17",
      items: 2,
      total: 12300.00,
      status: "Pending",
      priority: "High",
    },
  ];

  const purchaseOrders = [
    {
      id: "PO-001",
      supplier: "Apple Inc.",
      date: "2024-01-15",
      expectedDate: "2024-01-25",
      items: 10,
      total: 25000.00,
      status: "Approved",
      priority: "High",
    },
    {
      id: "PO-002",
      supplier: "Samsung Electronics",
      date: "2024-01-14",
      expectedDate: "2024-01-22",
      items: 5,
      total: 12500.00,
      status: "Received",
      priority: "Medium",
    },
    {
      id: "PO-003",
      supplier: "Nike Corp.",
      date: "2024-01-13",
      expectedDate: "2024-01-20",
      items: 20,
      total: 8900.00,
      status: "Pending",
      priority: "Low",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Delivered":
      case "Received":
        return "bg-success text-success-foreground";
      case "Shipped":
      case "Approved":
        return "bg-primary text-primary-foreground";
      case "Processing":
        return "bg-warning text-warning-foreground";
      case "Pending":
        return "bg-muted text-muted-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High":
        return "bg-danger text-danger-foreground";
      case "Medium":
        return "bg-warning text-warning-foreground";
      case "Low":
        return "bg-success text-success-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Delivered":
      case "Received":
        return <CheckCircle className="h-4 w-4" />;
      case "Shipped":
      case "Approved":
        return <Truck className="h-4 w-4" />;
      case "Processing":
        return <Package className="h-4 w-4" />;
      case "Pending":
        return <Clock className="h-4 w-4" />;
      default:
        return <AlertCircle className="h-4 w-4" />;
    }
  };

  const orderStats = [
    { title: "Total Sales Orders", count: 156, trend: "+12%", icon: ShoppingCart },
    { title: "Pending Orders", count: 23, trend: "+5%", icon: Clock },
    { title: "Shipped Today", count: 8, trend: "+2%", icon: Truck },
    { title: "Purchase Orders", count: 45, trend: "+8%", icon: Package },
  ];

  return (
    <div className="min-h-screen bg-gradient-dashboard p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Order Management</h1>
            <p className="text-muted-foreground">Track and manage your sales and purchase orders</p>
          </div>
          <div className="flex gap-3">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" className="gap-2">
                  <Plus className="h-4 w-4" />
                  Purchase Order
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>Create Purchase Order</DialogTitle>
                </DialogHeader>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="supplier">Supplier</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select supplier" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="apple">Apple Inc.</SelectItem>
                        <SelectItem value="samsung">Samsung Electronics</SelectItem>
                        <SelectItem value="nike">Nike Corp.</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="expected">Expected Date</Label>
                    <Input id="expected" type="date" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="priority">Priority</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select priority" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="high">High</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="low">Low</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="notes">Notes</Label>
                    <Input id="notes" placeholder="Order notes" />
                  </div>
                  <div className="col-span-2 flex justify-end gap-2 pt-4">
                    <Button variant="outline">Cancel</Button>
                    <Button className="bg-gradient-primary">Create Order</Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="gap-2 bg-gradient-primary">
                  <Plus className="h-4 w-4" />
                  Sales Order
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>Create Sales Order</DialogTitle>
                </DialogHeader>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="customer">Customer</Label>
                    <Input id="customer" placeholder="Customer name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="due">Due Date</Label>
                    <Input id="due" type="date" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="priority">Priority</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select priority" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="high">High</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="low">Low</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="shipping">Shipping Address</Label>
                    <Input id="shipping" placeholder="Shipping address" />
                  </div>
                  <div className="col-span-2 flex justify-end gap-2 pt-4">
                    <Button variant="outline">Cancel</Button>
                    <Button className="bg-gradient-primary">Create Order</Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {orderStats.map((stat, index) => (
            <Card key={index} className="shadow-card hover:shadow-hover transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-muted-foreground text-sm font-medium">{stat.title}</p>
                    <p className="text-2xl font-bold text-foreground">{stat.count}</p>
                    <p className="text-sm font-medium text-success">{stat.trend} from last week</p>
                  </div>
                  <div className="p-3 rounded-lg bg-primary/10">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Orders Tabs */}
        <Card className="shadow-card">
          <CardHeader>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <CardTitle className="flex items-center gap-2">
                <ShoppingCart className="h-5 w-5 text-primary" />
                Order Management
              </CardTitle>
              <div className="flex gap-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    placeholder="Search orders..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 w-64"
                  />
                </div>
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="w-40">
                    <Filter className="h-4 w-4 mr-2" />
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="processing">Processing</SelectItem>
                    <SelectItem value="shipped">Shipped</SelectItem>
                    <SelectItem value="delivered">Delivered</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="sales" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="sales">Sales Orders</TabsTrigger>
                <TabsTrigger value="purchase">Purchase Orders</TabsTrigger>
              </TabsList>
              
              <TabsContent value="sales" className="mt-6">
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Order ID</TableHead>
                        <TableHead>Customer</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Due Date</TableHead>
                        <TableHead>Items</TableHead>
                        <TableHead>Total</TableHead>
                        <TableHead>Priority</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {salesOrders.map((order) => (
                        <TableRow key={order.id} className="hover:bg-muted/50">
                          <TableCell className="font-mono">{order.id}</TableCell>
                          <TableCell className="font-medium">{order.customer}</TableCell>
                          <TableCell>{order.date}</TableCell>
                          <TableCell>{order.dueDate}</TableCell>
                          <TableCell>{order.items}</TableCell>
                          <TableCell className="font-semibold">${order.total.toLocaleString()}</TableCell>
                          <TableCell>
                            <Badge className={getPriorityColor(order.priority)}>
                              {order.priority}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <Badge className={getStatusColor(order.status)}>
                              <div className="flex items-center gap-1">
                                {getStatusIcon(order.status)}
                                {order.status}
                              </div>
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <div className="flex gap-2">
                              <Button variant="outline" size="sm" className="h-8 w-8 p-0" onClick={() => alert(`Viewing order ${order.id}`)}>
                                <Eye className="h-4 w-4" />
                              </Button>
                              <Button variant="outline" size="sm" className="h-8 w-8 p-0" onClick={() => alert(`Editing order ${order.id}`)}>
                                <Edit className="h-4 w-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </TabsContent>
              
              <TabsContent value="purchase" className="mt-6">
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Order ID</TableHead>
                        <TableHead>Supplier</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Expected Date</TableHead>
                        <TableHead>Items</TableHead>
                        <TableHead>Total</TableHead>
                        <TableHead>Priority</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {purchaseOrders.map((order) => (
                        <TableRow key={order.id} className="hover:bg-muted/50">
                          <TableCell className="font-mono">{order.id}</TableCell>
                          <TableCell className="font-medium">{order.supplier}</TableCell>
                          <TableCell>{order.date}</TableCell>
                          <TableCell>{order.expectedDate}</TableCell>
                          <TableCell>{order.items}</TableCell>
                          <TableCell className="font-semibold">${order.total.toLocaleString()}</TableCell>
                          <TableCell>
                            <Badge className={getPriorityColor(order.priority)}>
                              {order.priority}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <Badge className={getStatusColor(order.status)}>
                              <div className="flex items-center gap-1">
                                {getStatusIcon(order.status)}
                                {order.status}
                              </div>
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <div className="flex gap-2">
                              <Button variant="outline" size="sm" className="h-8 w-8 p-0" onClick={() => alert(`Viewing order ${order.id}`)}>
                                <Eye className="h-4 w-4" />
                              </Button>
                              <Button variant="outline" size="sm" className="h-8 w-8 p-0" onClick={() => alert(`Editing order ${order.id}`)}>
                                <Edit className="h-4 w-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default OrderManagement;
