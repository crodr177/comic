import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
  isLiked: boolean;
  idClicked: number;
  clickedIds = [];

  @Input() id: number;

  constructor() { }

  ngOnInit(): void {
    console.log(this.id)
  }

  onClick(id) {
    this.idClicked = id;
    this.checkIfClickedId(this.idClicked);
  }

  checkIfClickedId(id) {
    if(this.clickedIds.includes(id)){
      this.removeLike(id)
    }
    else {
      this.setLike(id)
    }
  }

  setLike(id) {
    this.clickedIds.push(id);
    this.isLiked = true;
  }

  removeLike(id) {
    this.removeIdFromLikedArr(id);
    this.isLiked = false;
  }

  removeIdFromLikedArr(id) {
    var i = this.clickedIds.indexOf(id);
    this.clickedIds.splice(i, 1);
  }
}
