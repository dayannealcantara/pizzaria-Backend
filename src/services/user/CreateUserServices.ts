
interface Userrequest {
  name:string;
  email:string;
  password:string
}


class CreateUserService {
  async execute({name, email, password}: Userrequest) {
    return {ok:true}
  }
}

export { CreateUserService}