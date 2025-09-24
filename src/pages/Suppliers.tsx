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
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Truck,
  Plus,
  Search,
  Edit,
  Phone,
  Mail,
  MapPin,
  Star,
  DollarSign,
  Package,
  Clock,
} from "lucide-react";

const Suppliers = () => {
  // Mock supplier data
  const suppliers = [
    {
      id: "SUP001",
      name: "Apple Inc.",
      contact: "John Smith",
      email: "orders@apple.com",
      phone: "+1-408-996-1010",
      address: "1 Apple Park Way, Cupertino, CA 95014",
      category: "Electronics",
      rating: 4.8,
      totalOrders: 156,
      totalValue: 2840000,
      avgDeliveryTime: "5-7 days",
      status: "Active",
      lastOrder: "2024-01-15",
      paymentTerms: "Net 30",
      products: ["iPhones", "MacBooks", "iPads", "Accessories"],
    },
    {
      id: "SUP002",
      name: "Samsung Electronics",
      contact: "Kim Lee",
      email: "supply@samsung.com",
      phone: "+82-2-2255-0114",
      address: "129 Samsung-ro, Yeongtong-gu, Suwon-si, South Korea",
      category: "Electronics",
      rating: 4.6,
      totalOrders: 89,
      totalValue: 1650000,
      avgDeliveryTime: "7-10 days",
      status: "Active",
      lastOrder: "2024-01-12",
      paymentTerms: "Net 45",
      products: ["TVs", "Smartphones", "Tablets", "Home Appliances"],
    },
    {
      id: "SUP003",
      name: "Nike Corporation",
      contact: "Mike Johnson",
      email: "wholesale@nike.com",
      phone: "+1-503-671-6453",
      address: "One Bowerman Drive, Beaverton, OR 97005",
      category: "Footwear & Apparel",
      rating: 4.7,
      totalOrders: 234,
      totalValue: 890000,
      avgDeliveryTime: "3-5 days",
      status: "Active",
      lastOrder: "2024-01-14",
      paymentTerms: "Net 15",
      products: ["Sneakers", "Athletic Wear", "Accessories"],
    },
    {
      id: "SUP004",
      name: "Herman Miller",
      contact: "Sarah Wilson",
      email: "commercial@hermanmiller.com",
      phone: "+1-616-654-3000",
      address: "855 E Main Ave, Zeeland, MI 49464",
      category: "Furniture",
      rating: 4.9,
      totalOrders: 67,
      totalValue: 450000,
      avgDeliveryTime: "10-14 days",
      status: "Active",
      lastOrder: "2024-01-10",
      paymentTerms: "Net 30",
      products: ["Office Chairs", "Desks", "Storage Solutions"],
    },
    {
      id: "SUP005",
      name: "Local Electronics Ltd",
      contact: "David Brown",
      email: "orders@localelectronics.com",
      phone: "+1-555-0123",
      address: "123 Business Park, Local City, State",
      category: "Electronics",
      rating: 3.8,
      totalOrders: 23,
      totalValue: 125000,
      avgDeliveryTime: "2-3 days",
      status: "Review",
      lastOrder: "2024-01-08",
      paymentTerms: "Net 15",
      products: ["Cables", "Adapters", "Small Electronics"],
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-success text-success-foreground";
      case "Review":
        return "bg-warning text-warning-foreground";
      case "Inactive":
        return "bg-danger text-danger-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getRatingColor = (rating: number) => {
    if (rating >= 4.5) return "text-success";
    if (rating >= 4.0) return "text-warning";
    return "text-danger";
  };

  const supplierStats = [
    { title: "Total Suppliers", count: 24, trend: "+3 this month", icon: Truck },
    { title: "Active Suppliers", count: 19, trend: "79% active", icon: Package },
    { title: "Average Rating", count: "4.6", trend: "+0.2 improvement", icon: Star },
    { title: "Total Spend", count: "$6.2M", trend: "+12% this year", icon: DollarSign },
  ];

  return (
    <div className="flex min-h-screen bg-gradient-dashboard">
      <Sidebar />
      <main className="flex-1 p-6">
        <div className="max-w-7xl mx-auto space-y-6">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Supplier Management</h1>
              <p className="text-muted-foreground">Manage your supplier relationships and performance</p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" className="gap-2" onClick={() => alert("Importing suppliers...")}>
                <Package className="h-4 w-4" />
                Import Suppliers
              </Button>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="gap-2 bg-gradient-primary">
                    <Plus className="h-4 w-4" />
                    Add Supplier
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle>Add New Supplier</DialogTitle>
                  </DialogHeader>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Company Name</Label>
                      <Input id="name" placeholder="Enter company name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contact">Contact Person</Label>
                      <Input id="contact" placeholder="Enter contact name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="Enter email" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" placeholder="Enter phone number" />
                    </div>
                    <div className="col-span-2 space-y-2">
                      <Label htmlFor="address">Address</Label>
                      <Textarea id="address" placeholder="Enter full address" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="category">Category</Label>
                      <Input id="category" placeholder="e.g. Electronics, Furniture" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="terms">Payment Terms</Label>
                      <Input id="terms" placeholder="e.g. Net 30" />
                    </div>
                    <div className="col-span-2 flex justify-end gap-2 pt-4">
                      <Button variant="outline">Cancel</Button>
                      <Button className="bg-gradient-primary">Add Supplier</Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {supplierStats.map((stat, index) => (
              <Card key={index} className="shadow-card hover:shadow-hover transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-muted-foreground text-sm font-medium">{stat.title}</p>
                      <p className="text-2xl font-bold text-foreground">{stat.count}</p>
                      <p className="text-sm font-medium text-success">{stat.trend}</p>
                    </div>
                    <div className="p-3 rounded-lg bg-primary/10">
                      <stat.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Search and Filters */}
          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input placeholder="Search suppliers by name, category, or contact..." className="pl-10" />
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">All Categories</Button>
                  <Button variant="outline" size="sm">Electronics</Button>
                  <Button variant="outline" size="sm">Furniture</Button>
                  <Button variant="outline" size="sm">Apparel</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Suppliers Table */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Truck className="h-5 w-5 text-primary" />
                Supplier Directory ({suppliers.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Supplier</TableHead>
                      <TableHead>Contact Info</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Rating</TableHead>
                      <TableHead>Orders</TableHead>
                      <TableHead>Total Value</TableHead>
                      <TableHead>Delivery Time</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {suppliers.map((supplier) => (
                      <TableRow key={supplier.id} className="hover:bg-muted/50">
                        <TableCell>
                          <div>
                            <p className="font-medium">{supplier.name}</p>
                            <p className="text-sm text-muted-foreground">{supplier.id}</p>
                            <p className="text-xs text-muted-foreground mt-1">
                              Products: {supplier.products.slice(0, 2).join(", ")}
                              {supplier.products.length > 2 && "..."}
                            </p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="space-y-1">
                            <div className="flex items-center gap-1 text-sm">
                              <Mail className="h-3 w-3" />
                              <span className="truncate max-w-32">{supplier.email}</span>
                            </div>
                            <div className="flex items-center gap-1 text-sm">
                              <Phone className="h-3 w-3" />
                              <span>{supplier.phone}</span>
                            </div>
                            <div className="flex items-center gap-1 text-sm">
                              <MapPin className="h-3 w-3" />
                              <span className="truncate max-w-32">{supplier.address.split(",")[0]}</span>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">{supplier.category}</Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1">
                            <Star className={`h-4 w-4 ${getRatingColor(supplier.rating)}`} />
                            <span className="font-medium">{supplier.rating}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div>
                            <p className="font-medium">{supplier.totalOrders}</p>
                            <p className="text-xs text-muted-foreground">
                              Last: {supplier.lastOrder}
                            </p>
                          </div>
                        </TableCell>
                        <TableCell className="font-semibold">
                          ${supplier.totalValue.toLocaleString()}
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3 text-muted-foreground" />
                            <span className="text-sm">{supplier.avgDeliveryTime}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge className={getStatusColor(supplier.status)}>
                            {supplier.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm" className="h-8 w-8 p-0" onClick={() => alert(`Editing ${supplier.name}`)}>
                              <Edit className="h-4 w-4" />
                            </Button>
                          </div>
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

export default Suppliers;
