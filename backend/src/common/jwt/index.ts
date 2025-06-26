import jwt from 'jsonwebtoken'

export class JwtService {

    static sign(payload: any) {
        return jwt.sign(payload, "test")
    }

    static verify(token: string) {
        return jwt.verify(token, "test" as string)
    }
}