import { Component } from '@angular/core';
import { UsersService } from './users.service';
import { user } from './user';
@Component({
  selector: 'users',
  templateUrl: `./user.component.html`
  ,
  providers: [UsersService]
})
export class UsersComponent {
  arrusers: user[] = new Array();
  artext: user[] = new Array();
  arrUserJosn: any[];
  ShowUsers: boolean = true;
  Showadduser: boolean = false;
  Showedituser: boolean = false;
errorsMassage:string="";

  UserToEdit: user;
  Id: number;
  name: string;
  email: string;
  phone: string;
  street: string;
  suite: string;
  city: string;
  zipcode: string;

  GoAddUser() {
    this.Showadduser = !this.Showadduser;
    this.ShowUsers = !this.ShowUsers;
  }
  GoEditUser() {
    this.ShowUsers = !this.ShowUsers;
    this.Showedituser = !this.Showedituser;
  }

  formaddnewuser(newuserform: any) {
    if (newuserform.valid) {
      console.log(newuserform);
      const body = { name: this.name, email: this.email, phone: this.phone, street: this.street, suite: this.suite, city: this.city, zipcode: this.zipcode };
      const req = this.service.adduser(body);
      req.subscribe(rsp => {
        let NewId = this.arrusers.length + 1;
        this.arrusers.push(new user(NewId, body.name, body.email, body.phone, body.street, body.suite, body.city, body.zipcode)),
          console.log("success : " + rsp); console.log(newuserform);
      },
        (err) => { console.log("error : " + err); });
    }

       this.errorsMassage="please field all required fild";
  }

  constructor(private service: UsersService) {

    const req = this.service.GetResponse();
    req.subscribe(rsp => {
      this.arrusers = rsp.json();
      this.arrUserJosn = rsp.json();
      this.arrusers = this.GetArrayOrder(this.arrUserJosn);
      console.log(this.arrusers);
    })
  }
  userdelet: user;
  deletuser(user: user) {
    this.userdelet = user;
  }
  delete() {
    let index = this.arrusers.indexOf(this.userdelet);
    this.arrusers.splice(index, 1);
    const req = this.service.DeleteUser(this.userdelet.Userid);
    req.subscribe(rsp => { console.log("Delete successed"); }, (err) => {
      window.alert("Delete is fild :  " + err)
    });

  }
  //---------------------------------------------------------------------------------------//
  edit(user: user) {
    this.UserToEdit = user;
    this.Id = user.Userid;
    this.name = user.name;
    this.email = user.email;
    this.phone = user.phone;
    this.street = user.street;
    this.suite = user.suite;
    this.city = user.city;
    this.zipcode = user.zipcode;
   this.GoEditUser();
  }
  SetEdit() {
    let EditUser = new user(this.Id, this.name, this.email, this.phone, this.street, this.suite, this.city, this.zipcode)
    return EditUser;
  }
  EsubmitHandler(trvFormEdit: any) {
    if (trvFormEdit.valid) {
      let index = this.arrusers.indexOf(this.UserToEdit);
      const body = { name: this.name, email: this.email, phone: this.phone, street: this.street, suite: this.suite, city: this.city, zipcode: this.zipcode };
      const req = this.service.Edituser(body, this.Id);
      req.subscribe(rsp => {
        this.arrusers[index] = this.SetEdit(); console.log("Edit successedd : " + rsp);console.log(this.SetEdit());
      },
        (err) => { console.log("error Edit fild : " + err); })
    }
        this.GoEditUser();
  }
  //---------------------------------------------------------------------------------------//
  GetArrayOrder(arr: any) {
    let arUser = new Array<user>();
    for (let index = 0; index < arr.length; index++) {
      let Nuser = new user(arr[index].id,
        arr[index].name,
        arr[index].email, arr[index].phone,
        arr[index].address.street,
        arr[index].address.suite,
        arr[index].address.city,
        arr[index].address.zipcode);
      arUser.push(Nuser);
    }
    console.log(arUser)
    return arUser;
  }
}
