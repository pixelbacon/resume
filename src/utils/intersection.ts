export function intersection(a: any[], aa: any[]): any[] {
  return a.filter((item: any) => aa.includes(item));
}

export function intersects(a: any[], aa: any[]) {
  return !!intersection(a, aa).length;
}
