"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";

export function AppBreadCrumb() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  const pathArray = segments.map((segment, index) => {
    const href = "/" + segments.slice(0, index + 1).join("/");
    const label = decodeURIComponent(segment.replace(/-/g, " "));
    return { href, label };
  });

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {pathArray.map((item, index) => (
          <BreadcrumbItem key={item.href}>
            {index < pathArray.length - 1 ? (
              <>
                <BreadcrumbLink asChild>
                  <Link href={item.href} className="capitalize">
                    {item.label}
                  </Link>
                </BreadcrumbLink>
                <BreadcrumbSeparator />
              </>
            ) : (
              <BreadcrumbPage className="capitalize">
                {item.label}
              </BreadcrumbPage>
            )}
          </BreadcrumbItem>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
