import { atom, useAtom } from "jotai";

const token = atom('');
export const useToken = () => useAtom(token);

const authorized = atom(true);
export const useAuthorized = () => useAtom(authorized);
