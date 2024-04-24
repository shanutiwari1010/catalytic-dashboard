import { Link } from "react-router-dom";
import {
  Bell,
  CircleUser,
  Home,
  LineChart,
  Menu,
  Package,
  Package2,
  Search,
  ShoppingCart,
  Users,
  TriangleAlert,
  Car,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Bargraph from "@/components/Charts/Bargraph";
import LineGraph from "@/components/Charts/Linegraph";
import Areagraph from "@/components/Charts/Areagraph";
import Explorer from "@/components/Charts/Explorer";
import MapView from "@/components/Charts/MapView";
import { useState, useEffect } from "react";

const STATS = [
  {
    title: "In-Theft",
    icon: <Car />,
    key: "in_theft",
    value: "12",
    increment: "3",
  },
  {
    title: "Devices",
    icon: <Package />,
    key: "devices",
    value: "345",
    increment: "20",
  },
  {
    title: "Vehicles",
    icon: <Car />,
    key: "vehicles",
    value: "1234",
    increment: "50",
  },
  {
    title: "Customers",
    icon: <Car />,
    key: "customers",
    value: "5673",
    increment: "201",
  },
];

export default function Dashboard() {
  const [reportingData, setReportingData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getReportingData = async () => {
      try {
        const dataReq = await fetch("http://localhost:3000/data");
        if (!dataReq.ok) {
          throw new Error("Failed to fetch data");
        }
        const dataRes = await dataReq.json();
        setReportingData(dataRes);
      } catch (error) {
        setError(error.message);
        console.error("Error fetching data:", error);
      }
    };
    getReportingData();
  }, []);

  console.log(reportingData, "data");
  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!reportingData || reportingData.length === 0) {
    return <div>Loading...</div>;
  }
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link to="/" className="flex items-center gap-2 font-semibold">
              <Package2 className="h-6 w-6" />
              <span className="">Logo name</span>
            </Link>
            <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
              <Bell className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              <Link
                to="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <Home className="h-4 w-4" />
                Dashboard
              </Link>
              <Link
                to="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <TriangleAlert className="h-4 w-4" />
                inTheft
                {/* <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                  6
                </Badge> */}
              </Link>
              <Link
                to="#"
                className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary"
              >
                <Package className="h-4 w-4" />
                Devices{" "}
              </Link>
              <Link
                to="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <Car className="h-4 w-4" />
                Vehicles
              </Link>
              <Link
                to="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <Users className="h-4 w-4" />
                Customers
              </Link>
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <nav className="grid gap-2 text-lg font-medium">
                <Link
                  to="#"
                  className="flex items-center gap-2 text-lg font-semibold"
                >
                  <Package2 className="h-6 w-6" />
                  <span className="sr-only">Acme Inc</span>
                </Link>
                <Link
                  to="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <Home className="h-5 w-5" />
                  Dashboard
                </Link>
                <Link
                  to="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 text-foreground hover:text-foreground"
                >
                  <ShoppingCart className="h-5 w-5" />
                  Orders
                  <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                    6
                  </Badge>
                </Link>
                <Link
                  to="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <Package className="h-5 w-5" />
                  Products
                </Link>
                <Link
                  to="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <Users className="h-5 w-5" />
                  Customers
                </Link>
                <Link
                  to="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <LineChart className="h-5 w-5" />
                  Analytics
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <div className="w-full flex-1">
            <form>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search products..."
                  className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
                />
              </div>
            </form>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          <div className="flex items-center justify-center md:justify-between gap-4 flex-wrap">
            {STATS.map((item, index) => (
              <Card className="w-64 bg-primary text-white" key={index}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>{item.title}</CardTitle>
                    <span>{item.icon}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <h2 className="text-4xl font-bold">{item.value}</h2>
                  <span className="font-medium text-sm text-white">{`+${item.increment} from last month`}</span>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="grid grid-cols-3 flex-wrap p-4 gap-4 items-center justify-center rounded-lg border border-dashed shadow-sm">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">Reporting</CardTitle>
                  <Package />
                </div>
              </CardHeader>
              <CardContent> 
                <Bargraph
                  data={reportingData.reports}
                  legend={true}
                  categories={["1 day", "7 days", "30 days"]}
                  text={reportingData.reports[3].text}
                />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">Device Count</CardTitle>
                  <Car />
                </div>
              </CardHeader>
              <CardContent>
                <Bargraph
                  data={reportingData.deviceCount}
                  legend={true}
                  categories={["cus1", "cus2", "cus3"]}
                  text={reportingData.deviceCount[2].text}
                />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">Vehicle Count</CardTitle>
                  <Car />
                </div>
              </CardHeader>
              <CardContent>
                <Bargraph
                  data={reportingData.vehicleCount}
                  legend={true}
                  categories={["cus1", "cus2", "cus3"]}
                  text={reportingData.vehicleCount[2].text}
                />
              </CardContent>
            </Card>

            <Bargraph
              data={reportingData.vehicleCount}
              legend={true}
              categories={["cus1", "cus2", "cus3"]}
              text={reportingData.vehicleCount[2].text}
            />
            <Areagraph
              data={reportingData.deviceInfo}
              legend={true}
              text={"new/installed/active/total devices"}
            />
          </div>
        </main>
      </div>
    </div>
  );
}
