import { Button } from "@/components/ui/button";
import Sidebar from "@/components/Sidebar";

function InTheft() {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr] bg-gray-200">
      <div className="hidden border-r bg-muted/40 md:block">
        <Sidebar />
      </div>
      <div
        className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm"
        // x-chunk="dashboard-02-chunk-1"
      >
        <div className="flex flex-col items-center gap-1 text-center">
          <h3 className="text-2xl font-bold tracking-tight">
            You have no in-thefts
          </h3>
          <p className="text-sm text-muted-foreground">
            You can start review as soon as you add a device.
          </p>
          <Button className="mt-4">Add Device</Button>
        </div>
      </div>
    </div>
  );
}

export default InTheft;
