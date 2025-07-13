"use client";

import { useEffect, useState } from "react";
import { Check, Palette, Sun, Moon, Laptop } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { themes } from "@/components/color-theme-dropdown";
import {
  ColorTheme,
  useColorTheme,
} from "@/components/providers/theme-provider";
import { useTheme } from "next-themes";

export function SettingsClient() {
  const { colorTheme, setColorTheme } = useColorTheme();
  const { theme, setTheme } = useTheme();
  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
    push: true,
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="flex flex-col gap-6 p-6">
      <div>
        <h1 className="text-2xl font-bold">Settings</h1>
        <p className="text-muted-foreground">
          Customize your experience and manage preferences.
        </p>
      </div>

      <Separator />

      {/* General */}
      <div className="space-y-4 max-w-xl">
        <h2 className="text-xl font-semibold">General</h2>
        <div className="grid gap-4">
          <div>
            <Label htmlFor="name" className="mb-2">
              Full Name
            </Label>
            <Input id="name" defaultValue="Jamik Dash" />
          </div>
          <div>
            <Label htmlFor="email" className="mb-2">
              Email
            </Label>
            <Input id="email" type="email" defaultValue="jamik@example.com" />
          </div>
          <Button>Save</Button>
        </div>
      </div>

      <Separator />

      {/* Appearance */}
      <div className="space-y-4 max-w-xl">
        <h2 className="text-xl font-semibold">Appearance</h2>

        <div className="flex items-center justify-between">
          <Label>Theme Mode</Label>
          <div className="flex gap-2">
            <Button
              variant={theme === "light" ? "default" : "outline"}
              onClick={() => setTheme("light")}
            >
              <Sun className="w-4 h-4 mr-2" /> Light
            </Button>
            <Button
              variant={theme === "dark" ? "default" : "outline"}
              onClick={() => setTheme("dark")}
            >
              <Moon className="w-4 h-4 mr-2" /> Dark
            </Button>
            <Button
              variant={theme === "system" ? "default" : "outline"}
              onClick={() => setTheme("system")}
            >
              <Laptop className="w-4 h-4 mr-2" /> System
            </Button>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <Label>Color Theme</Label>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                <Palette className="w-4 h-4 mr-2" />
                {themes.find((t) => t.value === colorTheme)?.label}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {themes.map((theme) => (
                <DropdownMenuItem
                  key={theme.value}
                  onClick={() => setColorTheme(theme.value as ColorTheme)}
                  className="flex justify-between items-center"
                >
                  {theme.label}
                  {colorTheme === theme.value && (
                    <Check className="h-4 w-4 text-primary" />
                  )}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <Separator />

      {/* Security */}
      <div className="space-y-4 max-w-xl">
        <h2 className="text-xl font-semibold">Security</h2>
        <div className="grid gap-4">
          <div>
            <Label htmlFor="current-password" className="mb-2">
              Current Password
            </Label>
            <Input id="current-password" type="password" />
          </div>
          <div>
            <Label htmlFor="new-password" className="mb-2">
              New Password
            </Label>
            <Input id="new-password" type="password" />
          </div>
          <Button>Update Password</Button>
        </div>
      </div>

      <Separator />

      {/* Notifications */}
      <div className="space-y-4 max-w-xl">
        <h2 className="text-xl font-semibold">Notifications</h2>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label>Email Notifications</Label>
            <Switch
              checked={notifications.email}
              onCheckedChange={(v) =>
                setNotifications({ ...notifications, email: v })
              }
            />
          </div>
          <div className="flex items-center justify-between">
            <Label>SMS Notifications</Label>
            <Switch
              checked={notifications.sms}
              onCheckedChange={(v) =>
                setNotifications({ ...notifications, sms: v })
              }
            />
          </div>
          <div className="flex items-center justify-between">
            <Label>Push Notifications</Label>
            <Switch
              checked={notifications.push}
              onCheckedChange={(v) =>
                setNotifications({ ...notifications, push: v })
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
