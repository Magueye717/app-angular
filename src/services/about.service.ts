import {Injectable} from '@angular/core';

@Injectable()
export class  AboutService {
  infos={
    nom:"Magueye",
    email:"magueye717@gmail.com",
    tel:"777902880"
  }

  comments=[
    {date:new Date() ,message:"A"},
    {date:new Date() ,message:"B"},
    {date:new Date() ,message:"C"},
  ];

  addComment(c){
    c.date=new Date();
    this.comments.push(c);
  }

  GetAllComments(){
    return this.comments;
  }
  GetInfo(){
    return this.infos;
  }
}
