import { useNavigate, useParams } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Download, Share2, CheckCircle, Clock } from "lucide-react";
import { toast } from "sonner";

const InvoiceDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  
  // Mock data - would come from state/API in real app
  const invoice = {
    id: id,
    customer: "ABC Sdn Bhd",
    email: "abc@company.com",
    phone: "+60 12-345 6789",
    address: "123 Business Street, Kuala Lumpur, 50000",
    amount: 2500.00,
    status: "verified",
    date: "2025-10-08",
    eInvoiceNo: "E-2025-001-ABC",
    items: [
      { description: "Web Development Service", quantity: 1, price: 1500.00 },
      { description: "Mobile App Development", quantity: 1, price: 1000.00 },
    ],
    qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=E-2025-001-ABC"
  };

  const handleSendWhatsApp = () => {
    toast.success("Sending e-Invoice via WhatsApp AI Agent...");
  };

  const handleDownload = () => {
    toast.success("Downloading e-Invoice PDF...");
  };

  return (
    <div className="min-h-screen bg-background pb-20 px-4 pt-6">
      <div className="flex items-center gap-3 mb-6">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => navigate(-1)}
          className="h-8 w-8"
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-foreground">{invoice.id}</h1>
          <p className="text-sm text-muted-foreground">Invoice Details</p>
        </div>
        <Badge className={invoice.status === "verified" ? "bg-accent text-accent-foreground" : "bg-warning text-warning-foreground"}>
          {invoice.status === "verified" ? (
            <><CheckCircle className="h-3 w-3 mr-1" /> Verified</>
          ) : (
            <><Clock className="h-3 w-3 mr-1" /> Pending</>
          )}
        </Badge>
      </div>

      {invoice.status === "verified" && (
        <Card className="p-6 border-none shadow-sm mb-4 bg-accent/5">
          <div className="flex flex-col items-center text-center">
            <div className="w-48 h-48 bg-white p-4 rounded-xl mb-4 shadow-sm">
              <img 
                src={invoice.qrCode} 
                alt="e-Invoice QR Code"
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-sm font-medium text-foreground mb-1">e-Invoice Number</p>
            <p className="text-lg font-bold text-primary mb-4">{invoice.eInvoiceNo}</p>
            <div className="flex gap-2 w-full">
              <Button 
                onClick={handleSendWhatsApp}
                className="flex-1"
                variant="default"
              >
                <Share2 className="h-4 w-4 mr-2" />
                Send via WhatsApp
              </Button>
              <Button 
                onClick={handleDownload}
                variant="outline"
                className="flex-1"
              >
                <Download className="h-4 w-4 mr-2" />
                Download
              </Button>
            </div>
          </div>
        </Card>
      )}

      <Card className="p-4 border-none shadow-sm mb-4">
        <h2 className="text-lg font-semibold text-foreground mb-4">Customer Information</h2>
        <div className="space-y-3">
          <div>
            <p className="text-xs text-muted-foreground">Customer Name</p>
            <p className="text-sm font-medium text-foreground">{invoice.customer}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Email</p>
            <p className="text-sm font-medium text-foreground">{invoice.email}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Phone</p>
            <p className="text-sm font-medium text-foreground">{invoice.phone}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Address</p>
            <p className="text-sm font-medium text-foreground">{invoice.address}</p>
          </div>
        </div>
      </Card>

      <Card className="p-4 border-none shadow-sm mb-4">
        <h2 className="text-lg font-semibold text-foreground mb-4">Items</h2>
        <div className="space-y-3">
          {invoice.items.map((item, index) => (
            <div key={index} className="p-3 bg-muted/30 rounded-lg">
              <div className="flex justify-between items-start mb-2">
                <p className="text-sm font-medium text-foreground flex-1">{item.description}</p>
                <p className="text-sm font-semibold text-foreground">RM {item.price.toFixed(2)}</p>
              </div>
              <p className="text-xs text-muted-foreground">Quantity: {item.quantity}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 pt-4 border-t border-border">
          <div className="flex justify-between items-center">
            <span className="text-lg font-semibold text-foreground">Total Amount</span>
            <span className="text-2xl font-bold text-primary">RM {invoice.amount.toFixed(2)}</span>
          </div>
        </div>
      </Card>

      <Card className="p-4 border-none shadow-sm">
        <div className="space-y-2">
          <div className="flex justify-between">
            <p className="text-xs text-muted-foreground">Invoice Date</p>
            <p className="text-sm font-medium text-foreground">{invoice.date}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-xs text-muted-foreground">Status</p>
            <p className="text-sm font-medium text-foreground capitalize">{invoice.status}</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default InvoiceDetail;
