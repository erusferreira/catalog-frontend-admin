import { atom, useAtom } from "jotai";

const token = atom('');
export const useAdminToken = () => useAtom(token);

const authorized = atom(true);
export const useAuthorized = () => useAtom(authorized);

const userMerchant = atom('');
export const useAdminUserMerchant = () => useAtom(userMerchant);
