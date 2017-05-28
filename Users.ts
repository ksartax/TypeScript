
interface UserOperations
{

  getUser(id: number): User;
  setUser(user: User): User;
  removeUser(user: User): User[];
  updateUser(user: User): User;

}

class Users implements UserOperations
{

  private user: Array<User> = new Array(
    new User(1, "Damian"),
    new User(2, "Maciek"),
    new User(3, "Kuba"),
    new User(4, "Haniek"),
    new User(5, "Seba"),
    new User(6, "Kamil")
  );

  getUsers(){
    return this.user;
  }

  setUsers(users: User[]){
    this.user = users;
  }

  getUser(id: number): User{
    return this.getUsers().filter(function(item){
      return item.getId() == id;
    })[0];
  };

  setUser(user: User): User {
    var idN = this.getUsers()[this.getUsers().length - 1].getId();
    idN += 1;
    user.setId(idN);
    this.getUsers().push(user);
    return user;
  };

  removeUser(user: User): User[] {
    this.setUsers(this.getUsers().filter(function(item){
      return item.getId() != user.getId()
    }))

    return this.getUsers();
  };

  updateUser(user: User): User {
    this.getUsers().filter(function(item){
      return item.getId() == user.getId() ? user : item
    });

    return user;
  };

}
