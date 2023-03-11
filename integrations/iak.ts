import type { AstroConfig, AstroIntegration, InjectedScriptStage } from "astro"

import { version } from '../package.json'


var createIakIntergration = (options = {}) => {

    return {
        name: "iak",
        hooks: {
            "astro:config:setup": (config: {
                config: AstroConfig;
                command: 'dev' | 'build';
                isRestart: boolean;
                addWatchFile: (path: URL | string) => void;
              }) => {
                config.addWatchFile(new URL('../public/js/iak.js', import.meta.url))
                if(!config.isRestart){
                    console.log("  \x1B[46m IAK   \x1B[0m",'\x1B[36mv'+ version + '\x1B[0m');
                }else{
                    console.log(new Date().toLocaleTimeString(),'\x1B[36;1m[IAK]\x1B[0m', 'Restarted!')
                }
                
            }
        }
    }
}
export default createIakIntergration