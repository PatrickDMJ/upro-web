"use client";

import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";
import { ChildrenManagementTab } from "@/components/profile/ChildrenManagementTab";

export default function ProfilePage() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div className="min-h-[calc(100vh-4rem)] p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Profile</h1>

        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger
              value="profile"
              isActive={activeTab === "profile"}
              onClick={setActiveTab}
            >
              My Profile
            </TabsTrigger>
            <TabsTrigger
              value="children"
              isActive={activeTab === "children"}
              onClick={setActiveTab}
            >
              Children
            </TabsTrigger>
          </TabsList>

          {/* Profile Tab Content */}
          <TabsContent
            value="profile"
            activeValue={activeTab}
            className="mt-6"
          >
            <div className="max-w-2xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle>User Profile</CardTitle>
                  <CardDescription>Your account information</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Email</label>
                    <p className="text-sm text-muted-foreground">{user?.email}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium">User ID</label>
                    <p className="text-sm text-muted-foreground font-mono">
                      {user?.id}
                    </p>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Created</label>
                    <p className="text-sm text-muted-foreground">
                      {user?.created_at
                        ? new Date(user.created_at).toLocaleDateString()
                        : "N/A"}
                    </p>
                  </div>
                  <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <p className="text-blue-800 text-sm">
                      🔒 This profile page is automatically protected by the
                      (protected) route group.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Children Tab Content */}
          <TabsContent
            value="children"
            activeValue={activeTab}
            className="mt-6"
          >
            <ChildrenManagementTab />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
