"use client";

import { Fragment } from "react";
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
      <BreadcrumbList className="capitalize">
        {pathArray.map((item, i) => (
          <Fragment key={item.href}>
            <BreadcrumbItem>
              {i < pathArray.length - 1 ? (
                <BreadcrumbLink asChild>
                  <Link href={item.href}>{item.label}</Link>
                </BreadcrumbLink>
              ) : (
                <BreadcrumbPage>{item.label}</BreadcrumbPage>
              )}
            </BreadcrumbItem>
            {i < pathArray.length - 1 && <BreadcrumbSeparator />}
          </Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
