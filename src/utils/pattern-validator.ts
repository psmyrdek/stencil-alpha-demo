import XRegExp from 'xregexp';

export const validate = (pattern: string, input: string) => XRegExp(pattern).test(input)