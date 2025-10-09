import { useNavigate, useLocation } from "react-router-dom";
import { Home, FileText, Plus, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border shadow-lg">
      <div className="max-w-lg mx-auto px-4 py-2">
        <div className="flex items-center justify-around">
          <Button
            variant="ghost"
            size="icon"
            className={`flex flex-col h-14 w-14 gap-1 ${
              isActive("/") ? "text-primary" : "text-muted-foreground"
            }`}
            onClick={() => navigate("/")}
          >
            <Home className="h-5 w-5" />
            <span className="text-xs">Home</span>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className={`flex flex-col h-14 w-14 gap-1 ${
              isActive("/invoices") ? "text-primary" : "text-muted-foreground"
            }`}
            onClick={() => navigate("/invoices")}
          >
            <FileText className="h-5 w-5" />
            <span className="text-xs">Invoices</span>
          </Button>

          <Button
            size="icon"
            className="h-14 w-14 rounded-full shadow-lg -mt-6"
            onClick={() => navigate("/create-invoice")}
          >
            <Plus className="h-6 w-6" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="flex flex-col h-14 w-14 gap-1 text-muted-foreground opacity-50"
            disabled
          >
            <FileText className="h-5 w-5" />
            <span className="text-xs">Reports</span>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className={`flex flex-col h-14 w-14 gap-1 ${
              isActive("/profile") ? "text-primary" : "text-muted-foreground"
            }`}
            onClick={() => navigate("/profile")}
          >
            <User className="h-5 w-5" />
            <span className="text-xs">Profile</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BottomNav;
