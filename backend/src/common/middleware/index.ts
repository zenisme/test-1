import { Request, Response, NextFunction } from 'express';
import { Role, rolePermission } from '../role-permission';
import { JwtService } from '../jwt';

export function permissionMiddleware(role: Role) {
    return (req: Request, res: Response, next: NextFunction) => {
        const userRole = req.body.user.role as Role
        if (userRole !== role) {
            res.status(403).json({ message: 'Forbidden' });
            return 
        }
        next();
    }
}

export function authMiddleware(req: Request, res: Response, next: NextFunction) {
    const whiteList = ['/api/users/login']
    if (whiteList.includes(req.path)) {
        next()
        return
    }
    const token = req.headers.authorization?.split(' ')[1]
    if (!token) {
        res.status(401).json({ message: 'Unauthorized' })
        return
    }
    const decoded = JwtService.verify(token)


    req.body = { ...req.body, user: decoded }
    next()
}
