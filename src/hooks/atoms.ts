import { atom } from 'jotai';

/**
 * 댓글 관련 아톰
 */
// 댓글 값
const commentAtom = atom('');

// 댓글 카운트
const commentCountAtom = atom(0);

// 댓글 API 타입 구분
const commentSubmitType = atom('post');

// 검색 값
const searchValueAtom = atom('');

export { commentAtom, commentCountAtom, commentSubmitType, searchValueAtom };
