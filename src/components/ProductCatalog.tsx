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
  DialogFooter,
  DialogDescription,
  DialogClose,
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
  Package,
  Plus,
  Search,
  Edit,
  Trash2,
  Filter,
  Download,
  Barcode,
} from "lucide-react";

const ProductCatalog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [editingProduct, setEditingProduct] = useState(null);

  // Mock product data
  const products = [
    {
      id: "SKU001",
      name: "iPhone 15 Pro",
      category: "Electronics",
      price: 999.99,
      stock: 45,
      reorderPoint: 10,
      supplier: "Apple Inc.",
      status: "Active",
      description: "Latest iPhone with A17 Pro chip",
    },
    {
      id: "SKU002",
      name: "Nike Air Max 270",
      category: "Footwear",
      price: 129.99,
      stock: 23,
      reorderPoint: 15,
      supplier: "Nike Corp.",
      status: "Active",
      description: "Comfortable running shoes",
    },
    {
      id: "SKU003",
      name: "Samsung 55\" QLED TV",
      category: "Electronics",
      price: 799.99,
      stock: 8,
      reorderPoint: 5,
      supplier: "Samsung Electronics",
      status: "Low Stock",
      description: "4K Ultra HD Smart TV",
    },
    {
      id: "SKU004",
      name: "Office Ergonomic Chair",
      category: "Furniture",
      price: 299.99,
      stock: 12,
      reorderPoint: 8,
      supplier: "Herman Miller",
      status: "Active",
      description: "Ergonomic office chair with lumbar support",
    },
    {
      id: "SKU005",
      name: "MacBook Air M2",
      category: "Electronics",
      price: 1199.99,
      stock: 18,
      reorderPoint: 12,
      supplier: "Apple Inc.",
      status: "Active",
      description: "13-inch laptop with M2 chip",
    },
  ];

  const categories = ["all", "Electronics", "Footwear", "Furniture", "Clothing", "Books"];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getStatusColor = (status: string, stock: number, reorderPoint: number) => {
    if (stock <= reorderPoint) {
      return "bg-danger text-danger-foreground";
    }
    switch (status) {
      case "Active":
        return "bg-success text-success-foreground";
      case "Low Stock":
        return "bg-warning text-warning-foreground";
      case "Out of Stock":
        return "bg-danger text-danger-foreground";
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
            <h1 className="text-3xl font-bold text-foreground">Product Catalog</h1>
            <p className="text-muted-foreground">Manage your inventory and product information</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" className="gap-2" onClick={() => alert("Exporting CSV...")}>
              <Download className="h-4 w-4" />
              Export CSV
            </Button>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="gap-2 bg-gradient-primary">
                  <Plus className="h-4 w-4" />
                  Add Product
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>Add New Product</DialogTitle>
                </DialogHeader>
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
                    <Textarea id="description" placeholder="Enter product description" />
                  </div>
                  <div className="col-span-2 flex justify-end gap-2 pt-4">
                    <Button variant="outline">Cancel</Button>
                    <Button className="bg-gradient-primary">Add Product</Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* Filters */}
        <Card className="shadow-card">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    placeholder="Search products by name or SKU..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-48">
                    <Filter className="h-4 w-4 mr-2" />
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category === "all" ? "All Categories" : category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Products Table */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Package className="h-5 w-5 text-primary" />
              Products ({filteredProducts.length})
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>SKU</TableHead>
                    <TableHead>Product Name</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Stock</TableHead>
                    <TableHead>Reorder Point</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Supplier</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredProducts.map((product) => (
                    <TableRow key={product.id} className="hover:bg-muted/50">
                      <TableCell className="font-mono text-sm">{product.id}</TableCell>
                      <TableCell>
                        <div>
                          <p className="font-medium">{product.name}</p>
                          <p className="text-sm text-muted-foreground">{product.description}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">{product.category}</Badge>
                      </TableCell>
                      <TableCell className="font-medium">${product.price}</TableCell>
                      <TableCell>
                        <span className={product.stock <= product.reorderPoint ? "text-danger font-semibold" : ""}>
                          {product.stock}
                        </span>
                      </TableCell>
                      <TableCell>{product.reorderPoint}</TableCell>
                      <TableCell>
                        <Badge className={getStatusColor(product.status, product.stock, product.reorderPoint)}>
                          {product.stock <= product.reorderPoint ? "Low Stock" : product.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-sm">{product.supplier}</TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button
                                variant="outline"
                                size="sm"
                                className="h-8 w-8 p-0"
                                onClick={() => setEditingProduct(product)}
                              >
                                <Edit className="h-4 w-4" />
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-2xl">
                              <DialogHeader>
                                <DialogTitle>Edit Product</DialogTitle>
                              </DialogHeader>
                              <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                  <Label htmlFor="name">Product Name</Label>
                                  <Input
                                    id="name"
                                    defaultValue={editingProduct?.name}
                                  />
                                </div>
                                <div className="space-y-2">
                                  <Label htmlFor="sku">SKU</Label>
                                  <Input
                                    id="sku"
                                    defaultValue={editingProduct?.id}
                                  />
                                </div>
                                <div className="space-y-2">
                                  <Label htmlFor="category">Category</Label>
                                  <Select
                                    defaultValue={editingProduct?.category}
                                  >
                                    <SelectTrigger>
                                      <SelectValue placeholder="Select category" />
                                    </SelectTrigger>
                                    <SelectContent>
                                      <SelectItem value="electronics">
                                        Electronics
                                      </SelectItem>
                                      <SelectItem value="footwear">
                                        Footwear
                                      </SelectItem>
                                      <SelectItem value="furniture">
                                        Furniture
                                      </SelectItem>
                                      <SelectItem value="clothing">
                                        Clothing
                                      </SelectItem>
                                    </SelectContent>
                                  </Select>
                                </div>
                                <div className="space-y-2">
                                  <Label htmlFor="price">Price</Label>
                                  <Input
                                    id="price"
                                    type="number"
                                    defaultValue={editingProduct?.price}
                                  />
                                </div>
                                <div className="space-y-2">
                                  <Label htmlFor="stock">Stock</Label>
                                  <Input
                                    id="stock"
                                    type="number"
                                    defaultValue={editingProduct?.stock}
                                  />
                                </div>
                                <div className="space-y-2">
                                  <Label htmlFor="reorder">
                                    Reorder Point
                                  </Label>
                                  <Input
                                    id="reorder"
                                    type="number"
                                    defaultValue={editingProduct?.reorderPoint}
                                  />
                                </div>
                                <div className="col-span-2 space-y-2">
                                  <Label htmlFor="supplier">Supplier</Label>
                                  <Input
                                    id="supplier"
                                    defaultValue={editingProduct?.supplier}
                                  />
                                </div>
                                <div className="col-span-2 space-y-2">
                                  <Label htmlFor="description">
                                    Description
                                  </Label>
                                  <Textarea
                                    id="description"
                                    defaultValue={editingProduct?.description}
                                  />
                                </div>
                              </div>
                              <DialogFooter>
                                <DialogClose asChild>
                                  <Button variant="outline">Cancel</Button>
                                </DialogClose>
                                <Button
                                  className="bg-gradient-primary"
                                  onClick={() => {
                                    alert("Changes saved!");
                                  }}
                                >
                                  Save Changes
                                </Button>
                              </DialogFooter>
                            </DialogContent>
                          </Dialog>
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button
                                variant="outline"
                                size="sm"
                                className="h-8 w-8 p-0"
                              >
                                <Barcode className="h-4 w-4" />
                              </Button>
                            </DialogTrigger>
                            <DialogContent>
                              <DialogHeader>
                                <DialogTitle>
                                  Barcode for {product.name}
                                </DialogTitle>
                              </DialogHeader>
                              <div className="flex justify-center items-center p-4">
                                <p className="font-mono text-2xl tracking-widest">
                                  {`FAKE-BARCODE-${product.id}`}
                                </p>
                              </div>
                            </DialogContent>
                          </Dialog>
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button
                                variant="outline"
                                size="sm"
                                className="h-8 w-8 p-0 text-danger hover:bg-danger/10"
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </DialogTrigger>
                            <DialogContent>
                              <DialogHeader>
                                <DialogTitle>
                                  Are you sure you want to delete this product?
                                </DialogTitle>
                                <DialogDescription>
                                  This action cannot be undone. This will
                                  permanently delete the product{" "}
                                  <strong>{product.name}</strong>.
                                </DialogDescription>
                              </DialogHeader>
                              <DialogFooter>
                                <DialogClose asChild>
                                  <Button variant="outline">Cancel</Button>
                                </DialogClose>
                                <Button
                                  variant="destructive"
                                  onClick={() =>
                                    alert(`${product.name} deleted!`)
                                  }
                                >
                                  Delete
                                </Button>
                              </DialogFooter>
                            </DialogContent>
                          </Dialog>
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
    </div>
  );
};

export default ProductCatalog;
