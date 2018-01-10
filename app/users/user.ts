export class user {
    constructor(Userid:number ,
        name: string,
        email: string,
        phone: string,
        street: string,
        suite: string,
        city: string,
        zipcode: string)
         {
             this.Userid=Userid;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.street = street;
         this.suite=suite;
        this.city = city;
        this.zipcode = zipcode;
    }
public Userid:number;
    name: string;
    email: string;
    phone: string;
    street: string;
    suite: string;
    city: string;
    zipcode: string;

    public getId() : number {
       return this.Userid;
   }
   
   public getname() : string {
       return this.name;
   }
   public getemail() : string {
       return this.email;
   }
   public getphone() : string {
       return this.phone;
   }
     public getstreet() : string {
       return this.street;
   }
    public getsuite() : string {
       return this.suite;
   }
   public getcity() : string {
       return this.city;
   }
  
   public getzipcode():string
   { return this.zipcode;}
}