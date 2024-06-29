import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Paystub } from '../models/paystub';
import { HttpClient } from '@angular/common/http';
import { PaystubsService } from '../services/paystubs.service';


@Component({
  selector: 'app-paystub',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './paystub.component.html',
  styleUrl: './paystub.component.css'
})

export class PaystubComponent implements OnInit{
  Paystubs?: Paystub [];
  constructor(private paystubservice: PaystubsService){};
  
  ngOnInit(): void{
    this.paystubservice.getData().subscribe(data => {
      this.Paystubs = data;
  });


}
  displayPaystub(){alert("hello")}


}

