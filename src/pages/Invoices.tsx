import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Plus, FileText, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const mockInvoices = [
  { 
    id: "INV-001", 
    customer: "ABC Sdn Bhd", 
    amount: 2500.00, 
    status: "verified", 
    date: "2025-10-08",
    eInvoiceNo: "E-2025-001-ABC"
  },
  { 
    id: "INV-002", 
    customer: "XYZ Corporation", 
    amount: 4800.00, 
    status: "pending", 
    date: "2025-10-08",
    eInvoiceNo: null
  },
  { 
    id: "INV-003", 
    customer: "Tech Solutions Ltd", 
    amount: 1200.00, 
    status: "verified", 
    date: "2025-10-07",
    eInvoiceNo: "E-2025-002-TSL"
  },
  { 
    id: "INV-004", 
    customer: "Global Trading Co", 
    amount: 3600.00, 
    status: "verified", 
    date: "2025-10-07",
    eInvoiceNo: "E-2025-003-GTC"
  },
  { 
    id: "INV-005", 
    customer: "Prime Services", 
    amount: 5200.00, 
    status: "pending", 
    date: "2025-10-06",
    eInvoiceNo: null
  },
];

const Invoices = () => {
  const navigate = useNavigate();

  const getStatusColor = (status: string) => {
    switch (status) {
      case "verified":
        return "bg-accent text-accent-foreground";
      case "pending":
        return "bg-warning text-warning-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background pb-20 px-4 pt-6">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Invoices</h1>
            <p className="text-sm text-muted-foreground">Manage all your invoices</p>
          </div>
          <Button 
            size="icon"
            className="h-12 w-12 rounded-full shadow-lg"
            onClick={() => navigate("/create-invoice")}
          >
            <Plus className="h-6 w-6" />
          </Button>
        </div>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search invoices..." 
            className="pl-10"
          />
        </div>
      </div>

      <div className="space-y-3">
        {mockInvoices.map((invoice) => (
          <Card 
            key={invoice.id}
            className="p-4 border-none shadow-sm cursor-pointer hover:shadow-md transition-shadow"
            onClick={() => navigate(`/invoice/${invoice.id}`)}
          >
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{invoice.id}</h3>
                  <p className="text-sm text-muted-foreground">{invoice.customer}</p>
                  {invoice.eInvoiceNo && (
                    <p className="text-xs text-muted-foreground mt-1">
                      e-Invoice: {invoice.eInvoiceNo}
                    </p>
                  )}
                </div>
              </div>
              <Badge className={getStatusColor(invoice.status)}>
                {invoice.status}
              </Badge>
            </div>
            <div className="flex items-center justify-between mt-3 pt-3 border-t border-border">
              <span className="text-xs text-muted-foreground">{invoice.date}</span>
              <span className="text-lg font-bold text-primary">RM {invoice.amount.toFixed(2)}</span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Invoices;
