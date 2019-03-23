declare module "quick-test" {
  function quickTest({
    description,
    expect,
    toBe
  }: {
    description?: string;
    expect: any;
    toBe: any;
  }): string;
  export = quickTest;
}
