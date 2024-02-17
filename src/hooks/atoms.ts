import { atom } from 'jotai';

// 댓글 카운트
const commentCountAtom = atom(0);

// 검색 값
const searchValueAtom = atom('');

export { commentCountAtom, searchValueAtom };
