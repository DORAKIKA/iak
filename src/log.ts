import { site } from './config'

console.log(
    `%c IAK %c ${import.meta.env.PACKAGE_VERSION} %c https://github.com/DORAKIKA/iak`,
    'background:#35495e ; padding: 2px; border-radius: 3px 0 0 3px;  color: #fff; font-size: 16px;',
    'background:#32c9eb ; padding: 2px; border-radius: 0 3px 3px 0;  color: #fff; font-size: 16px;',
    'padding: 2px; font-size: 16px;'
)

console.log(
    `%c ${site.name} %c ${site.description}`,
    'background:#35495e ; padding: 3px; border-radius: 3px 0 0 3px;  color: #fff; font-size: 16px;',
    'background:#905390 ; padding: 3px; border-radius: 0 3px 3px 0;  color: #fff; font-size: 16px;'
)

export default {}