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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Building2,
  Plus,
  Search,
  Edit,
  MapPin,
  Package,
  Users,
  TrendingUp,
  AlertTriangle,
} from "lucide-react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

const Locations = () => {
  // Mock location data
  const locations = [
    {
      id: "LOC001",
      name: "Main Warehouse",
      type: "Warehouse",
      address: "1234 Industrial Blvd, Manufacturing District",
      city: "Los Angeles",
      state: "CA",
      zipCode: "90001",
      manager: "John Smith",
      phone: "+1-555-0101",
      email: "warehouse1@company.com",
      capacity: 10000,
      currentStock: 8420,
      products: 1247,
      staff: 15,
      status: "Active",
      lastUpdated: "2024-01-15 14:30",
    },
    {
      id: "LOC002",
      name: "Downtown Store",
      type: "Retail",
      address: "567 Main Street, Downtown",
      city: "Los Angeles",
      state: "CA",
      zipCode: "90012",
      manager: "Sarah Johnson",
      phone: "+1-555-0102",
      email: "downtown@company.com",
      capacity: 2000,
      currentStock: 1850,
      products: 456,
      staff: 8,
      status: "Active",
      lastUpdated: "2024-01-15 13:45",
    },
    {
      id: "LOC003",
      name: "North Distribution Center",
      type: "Distribution",
      address: "789 Logistics Way, North Industrial Park",
      city: "San Francisco",
      state: "CA",
      zipCode: "94102",
      manager: "Mike Wilson",
      phone: "+1-555-0103",
      email: "north.dc@company.com",
      capacity: 15000,
      currentStock: 12300,
      products: 2100,
      staff: 25,
      status: "Active",
      lastUpdated: "2024-01-15 12:20",
    },
    {
      id: "LOC004",
      name: "East Coast Hub",
      type: "Warehouse",
      address: "321 Commerce Drive, Business Park",
      city: "New York",
      state: "NY",
      zipCode: "10001",
      manager: "Lisa Brown",
      phone: "+1-555-0104",
      email: "eastcoast@company.com",
      capacity: 8000,
      currentStock: 6750,
      products: 890,
      staff: 12,
      status: "Active",
      lastUpdated: "2024-01-15 11:15",
    },
    {
      id: "LOC005",
      name: "South Regional Store",
      type: "Retail",
      address: "456 Shopping Center Blvd",
      city: "San Diego",
      state: "CA",
      zipCode: "92101",
      manager: "David Martinez",
      phone: "+1-555-0105",
      email: "south.store@company.com",
      capacity: 1500,
      currentStock: 980,
      products: 320,
      staff: 6,
      status: "Under Maintenance",
      lastUpdated: "2024-01-14 16:00",
    },
  ];

  const locationTypeData = [
    { name: "Warehouse", value: 40, color: "hsl(var(--primary))" },
    { name: "Retail", value: 30, color: "hsl(var(--success))" },
    { name: "Distribution", value: 30, color: "hsl(var(--warning))" },
  ];

  const capacityData = locations.map(loc => ({
    name: loc.name.split(" ")[0],
    capacity: loc.capacity,
    current: loc.currentStock,
    utilization: Math.round((loc.currentStock / loc.capacity) * 100)
  }));

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-success text-success-foreground";
      case "Under Maintenance":
        return "bg-warning text-warning-foreground";
      case "Inactive":
        return "bg-danger text-danger-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Warehouse":
        return "bg-primary text-primary-foreground";
      case "Retail":
        return "bg-success text-success-foreground";
      case "Distribution":
        return "bg-warning text-warning-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getCapacityStatus = (current: number, capacity: number) => {
    const percentage = (current / capacity) * 100;
    if (percentage > 90) return { color: "text-danger", status: "Critical" };
    if (percentage > 75) return { color: "text-warning", status: "High" };
    return { color: "text-success", status: "Good" };
  };

  const locationStats = [
    { title: "Total Locations", count: 5, trend: "+1 this quarter", icon: Building2 },
    { title: "Total Capacity", count: "36.5K", trend: "items capacity", icon: Package },
    { title: "Total Staff", count: 66, trend: "across all locations", icon: Users },
    { title: "Avg Utilization", count: "82%", trend: "+5% from last month", icon: TrendingUp },
  ];

  return (
    <div className="flex min-h-screen bg-gradient-dashboard">
      <Sidebar />
      <main className="flex-1 p-6">
        <div className="max-w-7xl mx-auto space-y-6">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Location Management</h1>
              <p className="text-muted-foreground">Manage warehouses, stores, and distribution centers</p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" className="gap-2" onClick={() => alert("Viewing map...")}>
                <MapPin className="h-4 w-4" />
                View Map
              </Button>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="gap-2 bg-gradient-primary">
                    <Plus className="h-4 w-4" />
                    Add Location
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle>Add New Location</DialogTitle>
                  </DialogHeader>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Location Name</Label>
                      <Input id="name" placeholder="Enter location name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="type">Type</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="warehouse">Warehouse</SelectItem>
                          <SelectItem value="retail">Retail Store</SelectItem>
                          <SelectItem value="distribution">Distribution Center</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="col-span-2 space-y-2">
                      <Label htmlFor="address">Address</Label>
                      <Textarea id="address" placeholder="Enter full address" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="manager">Manager</Label>
                      <Input id="manager" placeholder="Manager name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" placeholder="Phone number" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="capacity">Capacity</Label>
                      <Input id="capacity" type="number" placeholder="Storage capacity" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="Location email" />
                    </div>
                    <div className="col-span-2 flex justify-end gap-2 pt-4">
                      <Button variant="outline">Cancel</Button>
                      <Button className="bg-gradient-primary">Add Location</Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {locationStats.map((stat, index) => (
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

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Location Types */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Location Types</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={locationTypeData}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        dataKey="value"
                        label={({ name, value }) => `${name}: ${value}%`}
                      >
                        {locationTypeData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            {/* Capacity Utilization */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Capacity Utilization</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={capacityData}>
                      <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Bar dataKey="capacity" fill="hsl(var(--muted))" name="Capacity" />
                      <Bar dataKey="current" fill="hsl(var(--primary))" name="Current Stock" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Search and Filters */}
          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input placeholder="Search locations by name, address, or manager..." className="pl-10" />
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">All Types</Button>
                  <Button variant="outline" size="sm">Warehouse</Button>
                  <Button variant="outline" size="sm">Retail</Button>
                  <Button variant="outline" size="sm">Distribution</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Locations Table */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building2 className="h-5 w-5 text-primary" />
                All Locations ({locations.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Location</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Address</TableHead>
                      <TableHead>Manager</TableHead>
                      <TableHead>Capacity</TableHead>
                      <TableHead>Utilization</TableHead>
                      <TableHead>Products</TableHead>
                      <TableHead>Staff</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {locations.map((location) => {
                      const capacityStatus = getCapacityStatus(location.currentStock, location.capacity);
                      const utilizationPercent = Math.round((location.currentStock / location.capacity) * 100);

                      return (
                        <TableRow key={location.id} className="hover:bg-muted/50">
                          <TableCell>
                            <div>
                              <p className="font-medium">{location.name}</p>
                              <p className="text-sm text-muted-foreground">{location.id}</p>
                            </div>
                          </TableCell>
                          <TableCell>
                            <Badge className={getTypeColor(location.type)}>
                              {location.type}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <div>
                              <p className="text-sm">{location.address}</p>
                              <p className="text-xs text-muted-foreground">
                                {location.city}, {location.state} {location.zipCode}
                              </p>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div>
                              <p className="font-medium">{location.manager}</p>
                              <p className="text-xs text-muted-foreground">{location.phone}</p>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div>
                              <p className="font-medium">{location.currentStock.toLocaleString()}</p>
                              <p className="text-xs text-muted-foreground">
                                of {location.capacity.toLocaleString()}
                              </p>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <div className="w-16 bg-muted rounded-full h-2 overflow-hidden">
                                <div 
                                  className={`h-full transition-all ${
                                    utilizationPercent > 90 ? 'bg-danger' : 
                                    utilizationPercent > 75 ? 'bg-warning' : 'bg-success'
                                  }`}
                                  style={{ width: `${utilizationPercent}%` }}
                                />
                              </div>
                              <span className={`text-sm font-medium ${capacityStatus.color}`}>
                                {utilizationPercent}%
                              </span>
                            </div>
                          </TableCell>
                          <TableCell className="font-medium">{location.products}</TableCell>
                          <TableCell className="font-medium">{location.staff}</TableCell>
                          <TableCell>
                            <Badge className={getStatusColor(location.status)}>
                              {location.status}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <div className="flex gap-2">
                              <Button variant="outline" size="sm" className="h-8 w-8 p-0" onClick={() => alert(`Editing ${location.name}`)}>
                                <Edit className="h-4 w-4" />
                              </Button>
                              {utilizationPercent > 90 && (
                                <Button variant="outline" size="sm" className="h-8 w-8 p-0 text-warning" onClick={() => alert(`Alert for ${location.name}`)}>
                                  <AlertTriangle className="h-4 w-4" />
                                </Button>
                              )}
                            </div>
                          </TableCell>
                        </TableRow>
                      );
                    })}
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

export default Locations;
