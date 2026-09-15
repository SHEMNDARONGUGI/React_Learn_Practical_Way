export type Info = {
  id: string;
  name: string;
  email: string;
};

export type AdminInfoList = Info & {
  adminId: string;
  phoneNo: string;
  role: string;
  isActive: boolean;
};
