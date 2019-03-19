declare module "quick-test" {
  function quickTest({
    description,
    expect,
    toBe
  }: {
    description?: string;
    expect: (...args: any) => any;
    toBe: any;
  }): string;
  export = quickTest;
}
