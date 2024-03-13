import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
    @ViewChild('addFamilyMemberRow') row!:ElementRef;
    deleteRow(drow:any){
      debugger
      drow.remove();
    }
    addRow(){

      const originalRowElement = this.row.nativeElement;
      console.log(originalRowElement)
      if(originalRowElement){
        const clonedRow = originalRowElement.cloneNode(true);
      const inputElements = clonedRow.querySelectorAll('select,input');
      inputElements.forEach((element: any) => {
        if (element.tagName.toLowerCase() === 'input' ) {
          element.value = '';
        } else if (element.tagName.toLowerCase() === 'select') {
          element.selectedIndex = 0;
        }
      });

      const trash = clonedRow.querySelector('.trash');
      if (trash) {
        trash.addEventListener('click', () => this.deleteRow(clonedRow));
      }
 
      originalRowElement.parentNode.insertBefore(clonedRow, originalRowElement.nextSibling);
      }
      
 
    }

}
