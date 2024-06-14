declare module 'js-cookie' {
    // 这里可以根据需要添加具体的类型声明
    export function set(name: string, value: any, options?: any): void;
    export function get(name: string): any;
    export function remove(name: string, options?: any): void;
    // 添加其他需要的函数声明
  }
  