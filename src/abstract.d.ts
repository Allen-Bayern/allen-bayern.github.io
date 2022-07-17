// This file is for global interfaces. 
// Because in TypeScript, the concept 'interface'
// is like abstract class in Java, I name the
// file 'abstract.d.ts'.

interface NavigationLinks {
  title: string,
  links?:  string | string[],
}

interface BlogPost {
  title: string,
  content: string,
  date: string,
}
