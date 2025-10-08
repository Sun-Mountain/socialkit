import type { JWT } from "next-auth/jwt";
import { userRolePermissions } from "@/lib/userRolePermissions";

export const checkAuth = (token: JWT | null, userId: string, property: string): boolean => {
  if (!token) return false;
  const permissions = userRolePermissions(token?.role).hasOwnProperty(property);

  if (token.id !== userId && !permissions) {
    return false;
  }

  return true;
}