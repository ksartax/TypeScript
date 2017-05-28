
class UsersTable extends Users
{
  private tableElement: string;

  constructor(tableElement: string){
    super();
    this.tableElement = tableElement;
    this.removeEvent();
    this.addUserEvent();
    this.setEditUserEvent();
    this.editUserEvent();
  }

  removeEvent(): void{
    $("table").on('click', ".remove", (el)=>{
        super.removeUser(new User(parseInt($(el.currentTarget).attr('data-id')), ""));
        $(".remove-tr-"+$(el.currentTarget).attr('data-id')).css("display","none");
    })
  }

  addUserEvent(): void{
    $("#userForm").on('click', 'button', (el) => {
      if(typeof $($("#userForm").find("#imie")).attr('data-id') === 'undefined'){
        this.pushUserTable(super.setUser(new User(0,$($("#userForm").find("#imie")).val())))
      }
    })
  }

  editUserEvent(): void{
    $("#userForm").on('click', 'button', (el) => {
      if(typeof $($("#userForm").find("#imie")).attr('data-id') !== 'undefined'){
        this.updateUserTd(super.updateUser(new User(parseInt($($("#userForm").find("#imie")).attr('data-id')), $($("#userForm").find("#imie")).val())));
      }
    })
  }

  setEditUserEvent(): void{
    $("table").on('click', '.edit', (el) => {
        $($("#userForm").find("#imie")).val(super.getUser(parseInt($(el.currentTarget).attr('data-id'))).getImie()).attr('data-id',$(el.currentTarget).attr('data-id'));
    })
  }

  getUserTd(user: User){
    return "<tr style='text-align: center' class='remove-tr-"+user.getId()+"'> <td> "
    + user.getId()
    + " </td> <td> "
    + user.getImie()
    + " </td> <td> <button data-id='"+user.getId()+"' class='remove'> Kasuj </button> <button data-id='"+user.getId()+"' class='edit'> Edytuj </button> </td> </tr>";
  }

  updateUserTd(user: User){
    $($("table").find(".remove-tr-"+user.getId()).find("td")[1]).text(user.getImie());
  }

  pushUserTable(user: User){
    $(this.tableElement).append(
        this.getUserTd(user)
    );
  }

  loadUsers(){
    for (var i = 0; i<super.getUsers().length; i++){
      $(this.tableElement).append(
          this.getUserTd(super.getUsers()[i])
      );
    }
  }

}

new UsersTable("table").loadUsers();
