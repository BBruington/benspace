export * from './lib/markdown';
export * from './lib/types';

/*
Note: The index.ts of every Nx library is like a public API 
for the other workspace projects. Only what gets exported via
this public API can be shared and used by others. The fact 
that you have to think about what to expose and what not, 
implicitly leads to a better architectural design (compared 
  to for instance just a folder structure)
*/
