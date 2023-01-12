import { FC } from 'react'

import AdminTableHeader from '@/ui/AdminTable/AdminTableHeader'
import AdminTableItem from '@/ui/AdminTable/AdminTableItem'
import { ITableItem } from '@/ui/AdminTable/admint-table-interface'
import SkeletonLoader from '@/ui/SkeletonLoader/SkeletonLoader'

import styles from './AdminTable.module.scss'

interface IAdminTable {
	tableItem: ITableItem[]
	isLoading: boolean
	headerItems: string[]
	removeHandler: (userId: string) => void
}

const AdminTable: FC<IAdminTable> = ({
	tableItem,
	headerItems,
	removeHandler,
	isLoading,
}) => {
	return (
		<div>
			<AdminTableHeader headerItems={headerItems} />

			{isLoading ? (
				<SkeletonLoader count={1} height={48} className="mt-4" />
			) : tableItem.length ? (
				tableItem.map((tableItem) => (
					<AdminTableItem
						key={tableItem._id}
						tableItem={tableItem}
						removeHandler={removeHandler}
					/>
				))
			) : (
				<div className={styles.notFound}>Elements not found</div>
			)}
		</div>
	)
}

export default AdminTable
