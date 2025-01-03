import HeaderTab from './HeaderTab'
import HeaderNavbar from './HeaderNavbar'
import HeaderBanner from './HeaderBanner'
import HeaderSubmenu from './HeaderSubmenu'

export default function Header() {
  return (
    <div>
      <HeaderTab></HeaderTab>
      <HeaderNavbar></HeaderNavbar>
      <HeaderBanner></HeaderBanner>
      <HeaderSubmenu></HeaderSubmenu>
    </div>
  )
}
