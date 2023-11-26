// import { atom, useAtom } from "jotai";

// const countAtom = atom(0);
// const useCount = () => useAtom(countAtom);

// export default useCount;


import { atom, useAtom } from "jotai";

const countAtom = atom(0);
export const useCount = () => useAtom(countAtom);

const token = atom('');
export const useToken = () => useAtom(token);
