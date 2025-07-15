import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function AccountPage() {
  return (
    <div className="flex flex-col gap-6 p-6">
      <div>
        <h1 className="text-2xl font-bold">Account Settings</h1>
        <p className="text-muted-foreground">
          Manage your personal account details.
        </p>
      </div>

      <Separator />

      <form className="max-w-xl space-y-6">
        <div className="grid gap-4">
          <div>
            <Label htmlFor="name" className="mb-2">
              Full Name
            </Label>
            <Input
              id="name"
              placeholder="Your full name"
              defaultValue="Jamik Dash"
            />
          </div>

          <div>
            <Label htmlFor="email" className="mb-2">
              Email Address
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              defaultValue="jamik@example.com"
            />
          </div>

          <div>
            <Label htmlFor="username" className="mb-2">
              Username
            </Label>
            <Input
              id="username"
              placeholder="yourusername"
              defaultValue="jamikdash"
            />
          </div>
        </div>

        <Button type="submit">Update Account</Button>
      </form>
    </div>
  );
}
