export class Task{
    public userID: string='';
    public id: string='';
    public title: string='';
    public completedStatus: string='';

    deserialize(input: any){
        this.userID=input.userId;
        this.id=input.id;
        this.title=input.title;
        this.completedStatus=input.completed;
        
        return this;
    }

}