import Sidebar from "@/components/Sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import {
  Settings as SettingsIcon,
  User,
  Bell,
  Shield,
  Database,
  Palette,
  Globe,
  Save,
  Download,
  Upload,
} from "lucide-react";

const Settings = () => {
  return (
    <div className="flex min-h-screen bg-gradient-dashboard">
      <Sidebar />
      <main className="flex-1 p-6">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Settings</h1>
              <p className="text-muted-foreground">Manage your application preferences and configurations</p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" className="gap-2" onClick={() => alert("Exporting settings...")}>
                <Download className="h-4 w-4" />
                Export Settings
              </Button>
              <Button className="gap-2 bg-gradient-primary" onClick={() => alert("Saving changes...")}>
                <Save className="h-4 w-4" />
                Save Changes
              </Button>
            </div>
          </div>

          {/* Settings Tabs */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <SettingsIcon className="h-5 w-5 text-primary" />
                Application Settings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="general" className="w-full">
                <TabsList className="grid w-full grid-cols-6">
                  <TabsTrigger value="general">General</TabsTrigger>
                  <TabsTrigger value="notifications">Notifications</TabsTrigger>
                  <TabsTrigger value="security">Security</TabsTrigger>
                  <TabsTrigger value="inventory">Inventory</TabsTrigger>
                  <TabsTrigger value="integrations">Integrations</TabsTrigger>
                  <TabsTrigger value="backup">Backup</TabsTrigger>
                </TabsList>

                {/* General Settings */}
                <TabsContent value="general" className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground">Company Information</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="company">Company Name</Label>
                        <Input id="company" defaultValue="InvenTrack Solutions" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="timezone">Timezone</Label>
                        <Select defaultValue="pst">
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
                            <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
                            <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
                            <SelectItem value="mst">Mountain Standard Time (MST)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="currency">Default Currency</Label>
                        <Select defaultValue="usd">
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="usd">US Dollar (USD)</SelectItem>
                            <SelectItem value="eur">Euro (EUR)</SelectItem>
                            <SelectItem value="gbp">British Pound (GBP)</SelectItem>
                            <SelectItem value="cad">Canadian Dollar (CAD)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="language">Language</Label>
                        <Select defaultValue="en">
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="en">English</SelectItem>
                            <SelectItem value="es">Español</SelectItem>
                            <SelectItem value="fr">Français</SelectItem>
                            <SelectItem value="de">Deutsch</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="address">Company Address</Label>
                      <Textarea id="address" placeholder="Enter company address" 
                        defaultValue="1234 Business Park Drive, Suite 100, City, State 12345" />
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground">Display Preferences</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label className="text-base">Dark Mode</Label>
                          <div className="text-sm text-muted-foreground">
                            Switch to dark theme
                          </div>
                        </div>
                        <Switch onClick={() => alert("Toggling dark mode...")} />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label className="text-base">Compact View</Label>
                          <div className="text-sm text-muted-foreground">
                            Reduce spacing in tables
                          </div>
                        </div>
                        <Switch defaultChecked onClick={() => alert("Toggling compact view...")} />
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* Notifications Settings */}
                <TabsContent value="notifications" className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground">Email Notifications</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label className="text-base">Low Stock Alerts</Label>
                          <div className="text-sm text-muted-foreground">
                            Get notified when items reach reorder point
                          </div>
                        </div>
                        <Switch defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label className="text-base">Order Status Updates</Label>
                          <div className="text-sm text-muted-foreground">
                            Notifications for order changes
                          </div>
                        </div>
                        <Switch defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label className="text-base">Daily Reports</Label>
                          <div className="text-sm text-muted-foreground">
                            Daily summary of inventory status
                          </div>
                        </div>
                        <Switch />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label className="text-base">Weekly Analytics</Label>
                          <div className="text-sm text-muted-foreground">
                            Weekly performance reports
                          </div>
                        </div>
                        <Switch defaultChecked />
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground">Alert Thresholds</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="critical">Critical Stock Level (%)</Label>
                        <Input id="critical" type="number" defaultValue="10" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="warning">Warning Stock Level (%)</Label>
                        <Input id="warning" type="number" defaultValue="25" />
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* Security Settings */}
                <TabsContent value="security" className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground">Access Control</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label className="text-base">Two-Factor Authentication</Label>
                          <div className="text-sm text-muted-foreground">
                            Require 2FA for all users
                          </div>
                        </div>
                        <Switch />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label className="text-base">Session Timeout</Label>
                          <div className="text-sm text-muted-foreground">
                            Auto-logout after inactivity
                          </div>
                        </div>
                        <Switch defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label className="text-base">Audit Logging</Label>
                          <div className="text-sm text-muted-foreground">
                            Track all user actions
                          </div>
                        </div>
                        <Switch defaultChecked />
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground">Password Policy</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="minLength">Minimum Length</Label>
                        <Input id="minLength" type="number" defaultValue="8" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="expiry">Password Expiry (days)</Label>
                        <Input id="expiry" type="number" defaultValue="90" />
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <Label className="text-base">Require Special Characters</Label>
                        <Switch defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label className="text-base">Require Numbers</Label>
                        <Switch defaultChecked />
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* Inventory Settings */}
                <TabsContent value="inventory" className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground">Stock Management</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="autoReorder">Auto-Reorder Level (%)</Label>
                        <Input id="autoReorder" type="number" defaultValue="20" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="leadTime">Default Lead Time (days)</Label>
                        <Input id="leadTime" type="number" defaultValue="7" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="safetyStock">Safety Stock (%)</Label>
                        <Input id="safetyStock" type="number" defaultValue="15" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="countCycle">Stock Count Cycle (days)</Label>
                        <Input id="countCycle" type="number" defaultValue="30" />
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground">Barcode Settings</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label className="text-base">Auto-Generate SKUs</Label>
                          <div className="text-sm text-muted-foreground">
                            Automatically create SKUs for new products
                          </div>
                        </div>
                        <Switch defaultChecked />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="skuPrefix">SKU Prefix</Label>
                        <Input id="skuPrefix" defaultValue="INV" />
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* Integrations Settings */}
                <TabsContent value="integrations" className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground">Third-Party Integrations</h3>
                    <div className="space-y-4">
                      <Card>
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="p-2 rounded-lg bg-primary/10">
                                <Database className="h-5 w-5 text-primary" />
                              </div>
                              <div>
                                <h4 className="font-semibold">QuickBooks</h4>
                                <p className="text-sm text-muted-foreground">Accounting integration</p>
                              </div>
                            </div>
                            <Button variant="outline" size="sm" onClick={() => alert("Configuring QuickBooks...")}>Configure</Button>
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="p-2 rounded-lg bg-success/10">
                                <Globe className="h-5 w-5 text-success" />
                              </div>
                              <div>
                                <h4 className="font-semibold">Shopify</h4>
                                <p className="text-sm text-muted-foreground">E-commerce sync</p>
                              </div>
                            </div>
                            <Button variant="outline" size="sm" onClick={() => alert("Managing Shopify connection...")}>Connected</Button>
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="p-2 rounded-lg bg-warning/10">
                                <Shield className="h-5 w-5 text-warning" />
                              </div>
                              <div>
                                <h4 className="font-semibold">API Access</h4>
                                <p className="text-sm text-muted-foreground">REST API configuration</p>
                              </div>
                            </div>
                            <Button variant="outline" size="sm" onClick={() => alert("Managing API keys...")}>Manage Keys</Button>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </TabsContent>

                {/* Backup Settings */}
                <TabsContent value="backup" className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground">Data Backup</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label className="text-base">Automatic Backups</Label>
                          <div className="text-sm text-muted-foreground">
                            Schedule regular data backups
                          </div>
                        </div>
                        <Switch defaultChecked />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="frequency">Backup Frequency</Label>
                        <Select defaultValue="daily">
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="hourly">Hourly</SelectItem>
                            <SelectItem value="daily">Daily</SelectItem>
                            <SelectItem value="weekly">Weekly</SelectItem>
                            <SelectItem value="monthly">Monthly</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="retention">Retention Period (days)</Label>
                        <Input id="retention" type="number" defaultValue="30" />
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground">Data Export/Import</h3>
                    <div className="flex gap-4">
                      <Button variant="outline" className="gap-2" onClick={() => alert("Exporting all data...")}>
                        <Download className="h-4 w-4" />
                        Export All Data
                      </Button>
                      <Button variant="outline" className="gap-2" onClick={() => alert("Importing data...")}>
                        <Upload className="h-4 w-4" />
                        Import Data
                      </Button>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Last backup: January 15, 2024 at 2:30 AM
                    </p>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Settings;
