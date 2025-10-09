import { Card } from "@/components/ui/card";
import { TrendingUp, FileText, CheckCircle, Clock } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const revenueData = [
  { month: "Jan", amount: 12500 },
  { month: "Feb", amount: 18300 },
  { month: "Mar", amount: 15800 },
  { month: "Apr", amount: 22400 },
  { month: "May", amount: 25100 },
  { month: "Jun", amount: 28900 },
];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background pb-20 px-4 pt-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-foreground mb-1">Dashboard</h1>
        <p className="text-sm text-muted-foreground">Track your invoicing performance</p>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-6">
        <Card className="p-4 border-none shadow-sm">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10">
              <TrendingUp className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Total Revenue</p>
              <p className="text-xl font-bold text-foreground">$123,000</p>
            </div>
          </div>
        </Card>

        <Card className="p-4 border-none shadow-sm">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-accent/10">
              <CheckCircle className="h-5 w-5 text-accent" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Verified</p>
              <p className="text-xl font-bold text-foreground">48</p>
            </div>
          </div>
        </Card>

        <Card className="p-4 border-none shadow-sm">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-warning/10">
              <Clock className="h-5 w-5 text-warning" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Pending</p>
              <p className="text-xl font-bold text-foreground">12</p>
            </div>
          </div>
        </Card>

        <Card className="p-4 border-none shadow-sm">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-info/10">
              <FileText className="h-5 w-5 text-info" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Total Invoices</p>
              <p className="text-xl font-bold text-foreground">60</p>
            </div>
          </div>
        </Card>
      </div>

      <Card className="p-4 border-none shadow-sm">
        <h2 className="text-lg font-semibold text-foreground mb-4">Revenue Trends</h2>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={revenueData}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={12} />
            <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: "hsl(var(--card))", 
                border: "1px solid hsl(var(--border))",
                borderRadius: "var(--radius)"
              }} 
            />
            <Bar dataKey="amount" fill="hsl(var(--primary))" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </Card>
    </div>
  );
};

export default Dashboard;
