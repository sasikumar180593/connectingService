export class Employee {
    public id: string = '';
    public email: string = '';
    public firstName: string = '';
    public lastName: string = '';
     
    deserialize(input: any) {
        this.id = input.id;
        this.email = input.email;
        this.firstName = input.first_name;
        this.lastName = input.last_name;

        return this;
    }
}