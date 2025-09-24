import Sidebar from "@/components/Sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
import {
  Users,
  Plus,
  Search,
  Edit,
  Mail,
  Phone,
  MapPin,
  Shield,
  Clock,
  UserCheck,
} from "lucide-react";

const Team = () => {
  // Mock team data
  const teamMembers = [
    {
      id: "EMP001",
      name: "John Smith",
      email: "john.smith@company.com",
      phone: "+1-555-0101",
      role: "Warehouse Manager",
      department: "Operations",
      location: "Main Warehouse",
      permissions: ["Full Access", "User Management", "Reports"],
      status: "Active",
      lastLogin: "2024-01-15 14:30",
      joinDate: "2022-03-15",
      avatar: "/api/placeholder/40/40",
    },
    {
      id: "EMP002",
      name: "Sarah Johnson",
      email: "sarah.johnson@company.com",
      phone: "+1-555-0102",
      role: "Store Manager",
      department: "Retail",
      location: "Downtown Store",
      permissions: ["Store Access", "Inventory", "Sales"],
      status: "Active",
      lastLogin: "2024-01-15 13:45",
      joinDate: "2023-01-20",
      avatar: "/api/placeholder/40/40",
    },
    {
      id: "EMP003",
      name: "Mike Wilson",
      email: "mike.wilson@company.com",
      phone: "+1-555-0103",
      role: "Distribution Manager",
      department: "Logistics",
      location: "North Distribution Center",
      permissions: ["Distribution Access", "Shipping", "Orders"],
      status: "Active",
      lastLogin: "2024-01-15 12:20",
      joinDate: "2021-08-10",
      avatar: "/api/placeholder/40/40",
    },
    {
      id: "EMP004",
      name: "Lisa Brown",
      email: "lisa.brown@company.com",
      phone: "+1-555-0104",
      role: "Inventory Specialist",
      department: "Operations",
      location: "East Coast Hub",
      permissions: ["Inventory Access", "Stock Updates"],
      status: "Active",
      lastLogin: "2024-01-15 11:15",
      joinDate: "2023-05-12",
      avatar: "/api/placeholder/40/40",
    },
    {
      id: "EMP005",
      name: "David Martinez",
      email: "david.martinez@company.com",
      phone: "+1-555-0105",
      role: "Sales Associate",
      department: "Retail",
      location: "South Regional Store",
      permissions: ["Store Access", "Sales"],
      status: "On Leave",
      lastLogin: "2024-01-10 16:00",
      joinDate: "2023-11-01",
      avatar: "/api/placeholder/40/40",
    },
    {
      id: "EMP006",
      name: "Emma Davis",
      email: "emma.davis@company.com",
      phone: "+1-555-0106",
      role: "Procurement Manager",
      department: "Purchasing",
      location: "Main Warehouse",
      permissions: ["Full Access", "Supplier Management", "Purchase Orders"],
      status: "Active",
      lastLogin: "2024-01-15 10:30",
      joinDate: "2022-07-18",
      avatar: "/api/placeholder/40/40",
    },
    {
      id: "EMP007",
      name: "James Wilson",
      email: "james.wilson@company.com",
      phone: "+1-555-0107",
      role: "Stock Clerk",
      department: "Operations",
      location: "Main Warehouse",
      permissions: ["Inventory Access"],
      status: "Active",
      lastLogin: "2024-01-15 09:45",
      joinDate: "2023-09-05",
      avatar: "/api/placeholder/40/40",
    },
    {
      id: "EMP008",
      name: "Anna Garcia",
      email: "anna.garcia@company.com",
      phone: "+1-555-0108",
      role: "Quality Control",
      department: "Operations",
      location: "North Distribution Center",
      permissions: ["Quality Access", "Inventory"],
      status: "Active",
      lastLogin: "2024-01-15 08:20",
      joinDate: "2023-12-01",
      avatar: "/api/placeholder/40/40",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-success text-success-foreground";
      case "On Leave":
        return "bg-warning text-warning-foreground";
      case "Inactive":
        return "bg-danger text-danger-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getRoleColor = (role: string) => {
    if (role.includes("Manager")) return "bg-primary text-primary-foreground";
    if (role.includes("Specialist")) return "bg-warning text-warning-foreground";
    return "bg-muted text-muted-foreground";
  };

  const teamStats = [
    { title: "Total Team Members", count: 8, trend: "+2 this month", icon: Users },
    { title: "Active Users", count: 7, trend: "87.5% active", icon: UserCheck },
    { title: "Departments", count: 4, trend: "across locations", icon: Shield },
    { title: "Avg. Tenure", count: "1.8Y", trend: "years experience", icon: Clock },
  ];

  const departments = ["All", "Operations", "Retail", "Logistics", "Purchasing"];
  const roles = ["All", "Manager", "Specialist", "Associate", "Clerk"];

  return (
    <div className="flex min-h-screen bg-gradient-dashboard">
      <Sidebar />
      <main className="flex-1 p-6">
        <div className="max-w-7xl mx-auto space-y-6">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Team Management</h1>
              <p className="text-muted-foreground">Manage user accounts, roles, and permissions</p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" className="gap-2" onClick={() => alert("Sending invite...")}>
                <Mail className="h-4 w-4" />
                Send Invite
              </Button>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="gap-2 bg-gradient-primary">
                    <Plus className="h-4 w-4" />
                    Add Team Member
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle>Add New Team Member</DialogTitle>
                  </DialogHeader>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" placeholder="Enter full name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="Enter email" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" placeholder="Enter phone number" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="role">Role</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select role" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="manager">Manager</SelectItem>
                          <SelectItem value="specialist">Specialist</SelectItem>
                          <SelectItem value="associate">Associate</SelectItem>
                          <SelectItem value="clerk">Clerk</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="department">Department</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select department" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="operations">Operations</SelectItem>
                          <SelectItem value="retail">Retail</SelectItem>
                          <SelectItem value="logistics">Logistics</SelectItem>
                          <SelectItem value="purchasing">Purchasing</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="location">Location</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select location" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="main">Main Warehouse</SelectItem>
                          <SelectItem value="downtown">Downtown Store</SelectItem>
                          <SelectItem value="north">North Distribution Center</SelectItem>
                          <SelectItem value="east">East Coast Hub</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="col-span-2 flex justify-end gap-2 pt-4">
                      <Button variant="outline">Cancel</Button>
                      <Button className="bg-gradient-primary">Add Member</Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {teamStats.map((stat, index) => (
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
                    <Input placeholder="Search team members by name, email, or role..." className="pl-10" />
                  </div>
                </div>
                <div className="flex gap-2">
                  <Select defaultValue="All">
                    <SelectTrigger className="w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {departments.map((dept) => (
                        <SelectItem key={dept} value={dept}>{dept}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Select defaultValue="All">
                    <SelectTrigger className="w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {roles.map((role) => (
                        <SelectItem key={role} value={role}>{role}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Team Members Table */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                Team Members ({teamMembers.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Member</TableHead>
                      <TableHead>Role</TableHead>
                      <TableHead>Department</TableHead>
                      <TableHead>Location</TableHead>
                      <TableHead>Contact</TableHead>
                      <TableHead>Permissions</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Last Login</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {teamMembers.map((member) => (
                      <TableRow key={member.id} className="hover:bg-muted/50">
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <Avatar className="h-10 w-10">
                              <AvatarImage src={member.avatar} alt={member.name} />
                              <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium">{member.name}</p>
                              <p className="text-sm text-muted-foreground">{member.id}</p>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge className={getRoleColor(member.role)}>
                            {member.role}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">{member.department}</Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-3 w-3 text-muted-foreground" />
                            <span className="text-sm">{member.location}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="space-y-1">
                            <div className="flex items-center gap-1 text-sm">
                              <Mail className="h-3 w-3" />
                              <span className="truncate max-w-32">{member.email}</span>
                            </div>
                            <div className="flex items-center gap-1 text-sm">
                              <Phone className="h-3 w-3" />
                              <span>{member.phone}</span>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex flex-wrap gap-1">
                            {member.permissions.slice(0, 2).map((permission, idx) => (
                              <Badge key={idx} variant="secondary" className="text-xs">
                                {permission}
                              </Badge>
                            ))}
                            {member.permissions.length > 2 && (
                              <Badge variant="secondary" className="text-xs">
                                +{member.permissions.length - 2}
                              </Badge>
                            )}
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge className={getStatusColor(member.status)}>
                            {member.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-sm text-muted-foreground">
                          {member.lastLogin}
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm" className="h-8 w-8 p-0" onClick={() => alert(`Editing ${member.name}`)}>
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="sm" className="h-8 w-8 p-0" onClick={() => alert(`Managing permissions for ${member.name}`)}>
                              <Shield className="h-4 w-4" />
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

export default Team;
