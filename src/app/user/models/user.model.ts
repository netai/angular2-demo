export class UserModel {

  public firstname: string = '';
  public lastname: string = '';
  public phone: string = '';
  public city: string = '';
  public age: number = null;

  constructor(private data: any = {}){
    this.firstname = data.firstname?data.firstname:'';
    this.lastname = data.lastname?data.lastname:'';
    this.phone = data.phone?data.phone:'';
    this.age = data.age?data.age:null;
    this.city = data.city?data.city:'';

      this.clean();

    }

    public clean(): void {
      this.firstname = this.firstname.trim();
      this.lastname = this.lastname.trim();
      this.phone = this.phone.trim();
      this.city = this.city.trim();
      this.age = Number(this.age);
    }

    public validate(): any {}

}
