interface IakConfig {
  /** 默认主题 */
  defaultTheme: string;
  /** 可选主题 */
  themes: string[];
  /** emoji反应 */
  reactions?: {
    /** 是否启用 */
    enable: boolean;
  };
}

export function defineConfig<T extends Partial<IakConfig>>(config: T) {
  const defaultConfig: IakConfig = {
    defaultTheme: "light",
    themes: ["light", "dark"],
  };
  Object.assign(config, defaultConfig);

  const reactions = { enable: false };
  config.reactions ??= reactions;
  Object.assign(config.reactions, reactions);

  return config;
}
