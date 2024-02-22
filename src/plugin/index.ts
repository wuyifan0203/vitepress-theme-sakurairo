import type { EnhanceAppContext } from 'vitepress';
import { useNProgress } from './nprogress'

function installThemePlugin(ctx: EnhanceAppContext) {
    useNProgress(ctx);
}

export { installThemePlugin }