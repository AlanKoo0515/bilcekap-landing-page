import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { User, Building2, Mail, Phone, Settings, LogOut, Bell, Shield } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const Profile = () => {
  return (
    <div className="min-h-screen bg-background pb-20 px-4 pt-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-foreground mb-1">Profile</h1>
        <p className="text-sm text-muted-foreground">Manage your account settings</p>
      </div>

      <Card className="p-6 border-none shadow-sm mb-4">
        <div className="flex items-center gap-4 mb-6">
          <Avatar className="h-20 w-20">
            <AvatarFallback className="bg-primary text-primary-foreground text-2xl">
              JD
            </AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-xl font-bold text-foreground">John Doe</h2>
            <p className="text-sm text-muted-foreground">Admin User</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10">
              <Building2 className="h-4 w-4 text-primary" />
            </div>
            <div className="flex-1">
              <p className="text-xs text-muted-foreground">Company</p>
              <p className="text-sm font-medium text-foreground">ABC Technologies Sdn Bhd</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10">
              <Mail className="h-4 w-4 text-primary" />
            </div>
            <div className="flex-1">
              <p className="text-xs text-muted-foreground">Email</p>
              <p className="text-sm font-medium text-foreground">john.doe@abctech.com</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10">
              <Phone className="h-4 w-4 text-primary" />
            </div>
            <div className="flex-1">
              <p className="text-xs text-muted-foreground">Phone</p>
              <p className="text-sm font-medium text-foreground">+60 12-345 6789</p>
            </div>
          </div>
        </div>
      </Card>

      <Card className="p-4 border-none shadow-sm mb-4">
        <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
          <Settings className="h-5 w-5" />
          Settings
        </h3>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center gap-3">
              <Bell className="h-4 w-4 text-muted-foreground" />
              <Label htmlFor="notifications" className="text-sm font-medium">
                Push Notifications
              </Label>
            </div>
            <Switch id="notifications" defaultChecked />
          </div>

          <div className="flex items-center justify-between py-2">
            <div className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-muted-foreground" />
              <Label htmlFor="email-alerts" className="text-sm font-medium">
                Email Alerts
              </Label>
            </div>
            <Switch id="email-alerts" defaultChecked />
          </div>

          <div className="flex items-center justify-between py-2">
            <div className="flex items-center gap-3">
              <Shield className="h-4 w-4 text-muted-foreground" />
              <Label htmlFor="auto-verify" className="text-sm font-medium">
                Auto-Submit to Portal
              </Label>
            </div>
            <Switch id="auto-verify" />
          </div>
        </div>
      </Card>

      <Card className="p-4 border-none shadow-sm mb-4">
        <Button variant="outline" className="w-full justify-start h-12">
          <User className="h-4 w-4 mr-3" />
          Edit Profile
        </Button>
      </Card>

      <Card className="p-4 border-none shadow-sm">
        <Button variant="destructive" className="w-full justify-start h-12">
          <LogOut className="h-4 w-4 mr-3" />
          Log Out
        </Button>
      </Card>
    </div>
  );
};

export default Profile;
