import { atom, useAtom } from "jotai";

const token = atom('');
export const useToken = () => useAtom(token);
