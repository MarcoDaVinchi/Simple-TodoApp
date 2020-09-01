export class Todo {
  constructor(
    public id: number = Math.round(Math.random() * 100),
    public title: string = '',
    public complete: boolean = false
  ) {
    this.id = id;
    this.title = title;
    this.complete = complete;
  }
}
