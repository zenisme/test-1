import express from 'express';
import { LeaveApplicationRoutes } from './modules/leave-application/leave-application.routes';
import { LeaveTypeRoutes } from './modules/leave-type/leave-type.routes';
import { LeaveBalanceRoutes } from './modules/leave-balance/leave-balance.routes';
import { EmployeeRoutes } from './modules/employee/employee.routes';
import { UserRoutes } from './modules/user/user.routes';
import { authMiddleware } from './common/middleware';
import cors from 'cors';
const app = express();

app.use(express.json());
app.use(cors())

// Routes
app.use('/api/leave-applications', authMiddleware, LeaveApplicationRoutes);
app.use('/api/leave-types', authMiddleware, LeaveTypeRoutes);
app.use('/api/leave-balances', authMiddleware, LeaveBalanceRoutes);
app.use('/api/users', UserRoutes);


app.listen(8000, () => {
    console.log('Server is running on port 8000')
})
