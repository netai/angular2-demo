export class UserModel {
    public firstname: string = '';
    public lastname: string = '';
    public phone: string = '';
    public city: string = '';
    public age: string = '';

    constructor(private data: any = {}){
        this.firstname = data.firstname?data.firstname.trim():'';
        this.lastname = data.lastname?data.lastname.trim():'';
        this.phone = data.phone?data.phone.trim():'';
        this.age = data.age?data.age.toString().trim():'';
        this.city = data.city?data.city.trim():'';
    }

    public validate(): any {}

}
