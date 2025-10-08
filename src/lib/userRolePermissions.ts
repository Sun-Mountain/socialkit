const superPermissions = {
  canCreateAdmin: true,
  canReadAdmin: true,
  canUpdateAdmin: true,
  canDeleteAdmin: true,
};

const adminPermissions = {
  canCreateAny: true,
  canReadAny: true,
  canUpdateAny: true,
  canDeleteAny: true,
};

const betaPermissions = {
  canCreateBeta: true,
  canReadBeta: true,
  canUpdateBeta: true,
  canDeleteBeta: true,
};

const userPermissions = {
  canCreateOwn: true,
  canReadOwn: true,
  canUpdateOwn: true,
  canDeleteOwn: true,
  canReadFriends: true,
};

export const userRolePermissions = (role: string) => {
  switch (role) {
    case "SUPER":
      return {
        ...superPermissions,
        ...adminPermissions,
        ...betaPermissions,
        ...userPermissions,
      };
    case "ADMIN":
      return {
        ...adminPermissions,
        ...betaPermissions,
        ...userPermissions,
      };
    case "BETA":
      return {
        ...betaPermissions,
        ...userPermissions,
      };
    case "USER":
      return {
        ...userPermissions,
      };
    default:
      return {};
  }
};