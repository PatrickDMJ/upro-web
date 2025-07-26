"use client";

import Link from "next/link";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  User,
  LogOut,
  LayoutDashboard,
  Settings,
  Database,
} from "lucide-react";
import { Asterisk } from "lucide-react";

export function Navbar() {
  const { user, signOut, loading } = useAuth();

  const getInitials = (email: string) => {
    return email.charAt(0).toUpperCase();
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-black">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left - brand and primary nav links */}
        <div className="flex items-center gap-12">
          <Link href="/" className="flex items-center gap-2">
            <Asterisk className="h-8 w-8 text-[#00FF3C]" />
            <span className="text-xl font-bold text-[#00FF3C]">U-Pro</span>
          </Link>

          {/* Primary nav links */}
          <ul className="hidden items-center gap-10 md:flex">
            <li>
              <Link
                href="#"
                className="flex items-center gap-1 text-base text-white hover:text-[#00FF3C]"
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex items-center gap-1 text-base text-white hover:text-[#00FF3C]"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex items-center gap-1 text-base text-white hover:text-[#00FF3C]"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex items-center gap-1 text-base text-white hover:text-[#00FF3C]"
              >
                Partners
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex items-center gap-1 text-base text-white hover:text-[#00FF3C]"
              >
                Testimonials
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex items-center gap-1 text-base text-white hover:text-[#00FF3C]"
              >
                Trusted By Experts
              </Link>
            </li>
          </ul>
        </div>

        {/* Right - secondary actions */}
        <div className="flex items-center gap-6">
          <Link
            href="#"
            className="hidden text-white hover:text-[#00FF3C] md:inline"
          >
            Download app
          </Link>

          {/* Auth Section */}
          {loading ? (
            <div className="w-8 h-8 animate-pulse bg-white/20 rounded-full" />
          ) : user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="relative h-8 w-8 rounded-full hover:bg-white/10"
                >
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="bg-[#00FF3C] text-black">
                      {getInitials(user.email || "U")}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-56 bg-black border-white/20"
                align="end"
                forceMount
              >
                <DropdownMenuLabel className="font-normal text-white">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">Account</p>
                    <p className="text-xs leading-none text-white/60">
                      {user.email}
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-white/20" />
                <DropdownMenuItem
                  asChild
                  className="text-white hover:bg-white/10 focus:bg-white/10"
                >
                  <Link href="/dashboard" className="cursor-pointer">
                    <LayoutDashboard className="mr-2 h-4 w-4" />
                    <span>Dashboard</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem
                  asChild
                  className="text-white hover:bg-white/10 focus:bg-white/10"
                >
                  <Link href="/profile" className="cursor-pointer">
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem
                  asChild
                  className="text-white hover:bg-white/10 focus:bg-white/10"
                >
                  <Link href="/settings" className="cursor-pointer">
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem
                  asChild
                  className="text-white hover:bg-white/10 focus:bg-white/10"
                >
                  <Link href="/data-demo" className="cursor-pointer">
                    <Database className="mr-2 h-4 w-4" />
                    <span>Data Demo</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator className="bg-white/20" />
                <DropdownMenuItem
                  className="cursor-pointer text-red-400 hover:text-red-300 hover:bg-white/10 focus:text-red-300 focus:bg-white/10"
                  onClick={signOut}
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              {/* Vertical divider */}
              <span className="hidden h-5 w-px bg-white/20 md:inline-block" />

              <Link
                href="/auth?mode=signin"
                className="text-white hover:text-[#00FF3C]"
              >
                Log in
              </Link>

              <Button
                asChild
                className="rounded-full bg-[#00FF3C] px-6 py-2 text-black hover:bg-[#00e636]"
              >
                <Link href="/auth?mode=signup">Try it free</Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
