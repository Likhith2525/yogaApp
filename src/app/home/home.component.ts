import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public us:UserService,private router:Router){

  }
cage:any;
userDetails:any;
  ngOnInit(): void {
  }

  completePayment(obj:any){
   // console.log(obj)
    if(obj.email=='' || obj.name=='' || obj.age==undefined|| obj.batch=='' ) alert(" FILL ALL DETAILS TO REGISTER")
   else{ this.us.createUser(obj).subscribe(
      res=>{
            this.userDetails=res.message

            alert(res.message)
            this.router.navigateByUrl('/usdetails')
      },
      err=>{
        console.log(err)
      }
    )
  }
}

}
