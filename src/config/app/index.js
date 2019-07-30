import checkIsMobile from 'utils/devices/checkIsMobile';


export default {
  isProduction: IS_PRODUCTION,
  isMobile: checkIsMobile(window.navigator.userAgent)
}