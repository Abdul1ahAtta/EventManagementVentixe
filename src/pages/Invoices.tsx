
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { DashboardHeader } from "@/components/DashboardHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Invoices = () => {
  const invoices = [
    { id: "INV10011", date: "Feb 15, 2029 10:30 AM", amount: "$100", status: "Paid" },
    { id: "INV10012", date: "Feb 16, 2029 03:45 PM", amount: "$220", status: "Unpaid" },
    { id: "INV10013", date: "Feb 17, 2029 01:15 PM", amount: "$240", status: "Paid" },
    { id: "INV10015", date: "Feb 18, 2029 05:30 PM", amount: "$50", status: "Paid" },
    { id: "INV10016", date: "Feb 19, 2029 12:00 PM", amount: "$150", status: "Paid" },
    { id: "INV10017", date: "Feb 20, 2029 02:30 PM", amount: "$60", status: "Unpaid" },
    { id: "INV10018", date: "Feb 21, 2029 06:00 PM", amount: "$210", status: "Paid" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <DashboardSidebar />
      <div className="flex-1 flex flex-col">
        <DashboardHeader />
        <main className="flex-1 p-6 overflow-auto">
          <div className="grid grid-cols-12 gap-6">
            {/* Main Content */}
            <div className="col-span-12 lg:col-span-8 space-y-6">
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">Paid</p>
                        <p className="text-2xl font-bold">1,805</p>
                        <p className="text-xs text-gray-500">Last Month: 1,600</p>
                      </div>
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                        <span className="text-green-600">✓</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">Unpaid</p>
                        <p className="text-2xl font-bold">535</p>
                        <p className="text-xs text-gray-500">Last Month: 615</p>
                      </div>
                      <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                        <span className="text-pink-600">⏰</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">Overdue</p>
                        <p className="text-2xl font-bold">80</p>
                        <p className="text-xs text-gray-500">Last Month: 70</p>
                      </div>
                      <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                        <span className="text-red-600">⚠️</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Invoice List */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Invoice List</CardTitle>
                    <div className="flex space-x-2">
                      <Input placeholder="Search invoice" className="w-64" />
                      <Button className="bg-purple-600 hover:bg-purple-700">Add</Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {invoices.map((invoice) => (
                      <div key={invoice.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                        <div className="flex items-center space-x-4">
                          <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                          <div>
                            <p className="font-medium">{invoice.id}</p>
                            <p className="text-sm text-gray-600">{invoice.date}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4">
                          <span className="font-medium">{invoice.amount}</span>
                          <span className={`px-2 py-1 rounded text-xs ${
                            invoice.status === 'Paid' ? 'bg-green-100 text-green-600' : 'bg-blue-100 text-blue-600'
                          }`}>
                            {invoice.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Invoice Details Sidebar */}
            <div className="col-span-12 lg:col-span-4">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Invoice Details</CardTitle>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">Download</Button>
                      <Button variant="ghost" size="sm">←</Button>
                      <Button variant="ghost" size="sm">→</Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="border-b pb-4">
                      <h3 className="text-lg font-semibold"># INV10012</h3>
                      <div className="flex items-center space-x-2 mt-2">
                        <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded text-xs">Unpaid</span>
                      </div>
                      <div className="mt-4 text-sm space-y-1">
                        <p><span className="text-gray-600">Issued Date:</span> 2029/02/16, 03:45 PM</p>
                        <p><span className="text-gray-600">Due Date:</span> 2029/02/20, 11:59 PM</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-600 mb-2">Bill From</p>
                        <div>
                          <p className="font-medium">Event Management Co.</p>
                          <p className="text-gray-600">123 Sunset Avenue,</p>
                          <p className="text-gray-600">Los Angeles, CA,</p>
                          <p className="text-gray-600">90001</p>
                          <p className="text-gray-600">billing@eventmgmt.com</p>
                          <p className="text-gray-600">+1-800-555-1234</p>
                        </div>
                      </div>
                      <div>
                        <p className="text-gray-600 mb-2">Bill To</p>
                        <div>
                          <p className="font-medium">Alicia Smithson</p>
                          <p className="text-gray-600">789 Main Street,</p>
                          <p className="text-gray-600">Beverly Hills, CA,</p>
                          <p className="text-gray-600">90210</p>
                          <p className="text-gray-600">alicia.smithson@email.com</p>
                          <p className="text-gray-600">+1-310-555-6789</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-3">Ticket Details</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Ticket Category</span>
                          <span>Price</span>
                          <span>Qty</span>
                          <span>Amount</span>
                        </div>
                        <div className="flex justify-between border-t pt-2">
                          <span>Platinum</span>
                          <span>$120</span>
                          <span>1</span>
                          <span>$120</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Silver</span>
                          <span>$50</span>
                          <span>2</span>
                          <span>$100</span>
                        </div>
                        <div className="border-t pt-2 space-y-1">
                          <div className="flex justify-between">
                            <span>Sub Total</span>
                            <span>$220</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Tax (10%)</span>
                            <span>$22</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Fee</span>
                            <span>$5</span>
                          </div>
                          <div className="flex justify-between font-medium">
                            <span>Total</span>
                            <span>$247</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">Note</h4>
                      <p className="text-sm text-gray-600">
                        Please make payment before the due date to avoid any penalties or cancellation of your ticket. 
                        For any questions or concerns, contact our support team at support@eventmgmt.com or call 
                        +1-800-555-1234.
                      </p>
                    </div>

                    <div className="flex space-x-2">
                      <Button variant="outline" className="flex-1">Edit Invoice</Button>
                      <Button variant="outline" className="flex-1">Send Invoice</Button>
                      <Button variant="outline" className="flex-1">Hold Invoice</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Invoices;
