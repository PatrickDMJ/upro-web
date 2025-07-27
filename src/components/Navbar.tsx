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
  Menu,
  X,
} from "lucide-react";
import { Asterisk } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const { user, signOut, loading } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const getInitials = (email: string) => {
    return email.charAt(0).toUpperCase();
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Skip Navigation Links */}
      <div className="sr-only focus-within:not-sr-only">
        <a
          href="#main-content"
          className="absolute top-0 left-0 z-[100] bg-upro-green text-black px-4 py-2 rounded-br-md focus:outline-none focus:ring-2 focus:ring-white"
        >
          Skip to main content
        </a>
        <a
          href="#navigation"
          className="absolute top-0 left-32 z-[100] bg-upro-green text-black px-4 py-2 rounded-br-md focus:outline-none focus:ring-2 focus:ring-white"
        >
          Skip to navigation
        </a>
      </div>

      <nav
        id="navigation"
        className="sticky top-0 z-50 w-full border-b bg-black"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Left - brand */}
          <Link href="/" className="flex items-center gap-2">
            <Asterisk className="h-8 w-8 text-[#00FF3C]" />
            <span className="text-xl font-bold text-[#00FF3C]">U-Pro</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-12">
            {/* Primary nav links */}
            <ul className="flex items-center gap-10" role="menubar"></ul>
          </div>

          {/* Right - secondary actions */}
          <div className="flex items-center gap-4 lg:gap-6">
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
                      <p className="text-sm font-medium leading-none">
                        Account
                      </p>
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
                {/* Vertical divider - hidden on mobile */}
                <span className="hidden lg:inline-block h-5 w-px bg-white/20" />

                <Link
                  href="/auth?mode=signin"
                  className="text-white hover:text-[#00FF3C] text-sm lg:text-base"
                >
                  Log in
                </Link>

                <Button
                  asChild
                  className="rounded-full bg-[#00FF3C] px-4 lg:px-6 py-2 text-black hover:bg-[#00e636] text-sm lg:text-base"
                >
                  <Link href="/auth?mode=signup">Try it free</Link>
                </Button>
              </>
            )}

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden p-2 focus:outline-none focus:ring-2 focus:ring-upro-green focus:ring-offset-2 focus:ring-offset-black"
              onClick={toggleMobileMenu}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={
                isMobileMenuOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-white" />
              ) : (
                <Menu className="h-6 w-6 text-white" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div
            id="mobile-menu"
            className="lg:hidden bg-black border-t border-white/20"
            role="menu"
            aria-label="Mobile navigation menu"
          >
            <div
              className="px-4 py-6 space-y-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {/* Mobile Navigation Links */}
              <div className="space-y-3" role="none">
                <Link
                  href="#features"
                  className="block text-white hover:text-[#00FF3C] py-2 text-base focus:outline-none focus:ring-2 focus:ring-upro-green focus:ring-offset-2 focus:ring-offset-black rounded px-2"
                  role="menuitem"
                >
                  Features
                </Link>
                <Link
                  href="/pricing"
                  className="block text-white hover:text-[#00FF3C] py-2 text-base focus:outline-none focus:ring-2 focus:ring-upro-green focus:ring-offset-2 focus:ring-offset-black rounded px-2"
                  role="menuitem"
                >
                  Pricing
                </Link>
                <Link
                  href="#contact"
                  className="block text-white hover:text-[#00FF3C] py-2 text-base focus:outline-none focus:ring-2 focus:ring-upro-green focus:ring-offset-2 focus:ring-offset-black rounded px-2"
                  role="menuitem"
                >
                  Contact
                </Link>
                <Link
                  href="/partners"
                  className="block text-white hover:text-[#00FF3C] py-2 text-base focus:outline-none focus:ring-2 focus:ring-upro-green focus:ring-offset-2 focus:ring-offset-black rounded px-2"
                  role="menuitem"
                >
                  Partners
                </Link>
                <Link
                  href="#testimonials"
                  className="block text-white hover:text-[#00FF3C] py-2 text-base focus:outline-none focus:ring-2 focus:ring-upro-green focus:ring-offset-2 focus:ring-offset-black rounded px-2"
                  role="menuitem"
                >
                  Testimonials
                </Link>
                <Link
                  href="#experts"
                  className="block text-white hover:text-[#00FF3C] py-2 text-base focus:outline-none focus:ring-2 focus:ring-upro-green focus:ring-offset-2 focus:ring-offset-black rounded px-2"
                  role="menuitem"
                >
                  Trusted By Experts
                </Link>
              </div>

              {/* Mobile Download App */}
              <div className="pt-4 border-t border-white/20" role="none">
                <Link
                  href="#contact"
                  className="block text-white hover:text-[#00FF3C] py-2 text-base"
                >
                  Download app
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
