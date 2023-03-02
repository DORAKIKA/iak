import { site } from './config'

console.log(
    `%c IAK v${import.meta.env.PACKAGE_VERSION} %c https://github.com/DORAKIKA/iak `,
    'background:#030307 ; padding: 4px; border-radius: 3px 0 0 3px;  color: #fadfa3; font-size: 14px;',
    'background:#fadfa3 ; padding: 4px; border-radius: 0 3px 3px 0;  color: #fff; font-size: 14px;',
)

console.log(
    `%c ${site.name} %c ${site.slogan} `,
    'background:#35495e ; padding: 3px; border-radius: 3px 0 0 3px;  color: #fff; font-size: 16px;',
    'background:#905390 ; padding: 3px; border-radius: 0 3px 3px 0;  color: #fff; font-size: 16px;'
)

export default {}