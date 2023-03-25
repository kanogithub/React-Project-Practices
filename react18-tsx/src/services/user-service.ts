import HttpService from "./http-service"

export interface UserType {
    id: number
    name: string
}

// class UserService {
//     _httpContext: HttpService<UserType>

//     constructor() {
//         this._httpContext = new HttpService<UserType>('/users')
//     }

//     getAllUsers() {
//         return this._httpContext.getAll()
//     }

//     addUser(_user: UserType) {
//         return this._httpContext.create(_user)
//     }

//     deleteUser(userId: number) {
//         return this._httpContext.delete(userId)
//     }

//     updateUser(_user: UserType) {
//         return this._httpContext.update(_user)
//     }
// }

export default new HttpService<UserType>('/users')