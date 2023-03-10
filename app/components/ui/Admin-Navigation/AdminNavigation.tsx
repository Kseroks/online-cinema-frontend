import { FC } from 'react'

import AdminNavItem from '@/ui/Admin-Navigation/AdminNavItem'

import { navItems } from '@/shared/data/AdminNavigationData'

import styles from './AdminNavigation.module.scss'

const AdminNavigation: FC = () => {
	return (
		<nav className={styles.nav}>
			<ul>
				{navItems.map((item) => (
					<AdminNavItem navItem={item} key={item.link} />
				))}
			</ul>
		</nav>
	)
}

export default AdminNavigation
