import { atom, useAtom } from "jotai";

const authorized = atom(true);
export const useAdminAuthorized = () => useAtom(authorized);
