import { AppConfig } from '../types/types'
import { cbatmDark } from './variables/cbatmDark'
import { cbatmLight } from './variables/cbatmLight'

export const cbatmConfig: AppConfig = {
  appId: undefined,
  appName: 'Cryptobase ATM Wallet',
  appNameShort: 'Cryptobase',
  appStore: 'https://itunes.apple.com/app/id1344400091',
  configName: 'cryptobase',
  darkTheme: cbatmDark,
  defaultWallets: ['BTC', 'ETH', 'LTC', 'BCH', 'DASH'],
  knowledgeBase: 'https://support.edge.app/support/home',
  lightTheme: cbatmLight,
  notificationServers: ['https://notif1.edge.app'],
  phoneNumber: '+1-307-702-0115',
  referralServers: ['https://referral1.edge.app'],
  supportsEdgeLogin: true,
  supportEmail: 'support@cryptobaseatm.com',
  supportSite: 'https://cryptobaseatm.com',
  termsOfServiceSite: 'https://cryptobaseatm.com/terms-and-conditions/',
  website: 'https://cryptobaseatm.com',
  extraTab: {
    tabTitleKey: 'title_map',
    webviewUrl: 'https://cryptobaseatm.com/',
    extraTabBarIconFont: 'Feather',
    extraTabBarIconName: 'map-pin'
  },
  extraTab2: {
    tabTitleKey: 'title_receive',
    extraTab2BarIconFont: 'Feather',
    extraTab2BarIconName: 'arrow-down-left'
  }
}
