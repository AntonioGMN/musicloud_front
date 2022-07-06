import { Outlet } from 'react-router-dom';

import DashboardLayout from '../../layouts/Dashboard/DashboardLayout';

export default function Dashboard() {
	return (
		<DashboardLayout>
			<Outlet />
		</DashboardLayout>
	);
}
