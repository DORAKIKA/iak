interface ToastOptions {
  /**
   * 停留时间
   * @default 3000 ms
   */
  duration?: number;
}

/**
 * 发送一条提示
 * @param message 提示消息
 * @param options 选项
 */
export function toast(message: string, options: ToastOptions) {
  const { duration = 3000 } = options ?? {};
  /** @ts-ignore */
  window.SnackBar({
    message,
    fixed: true,
    position: "tc",
    timeout: duration,
  });
}
