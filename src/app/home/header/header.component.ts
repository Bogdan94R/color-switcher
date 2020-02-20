import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() files: string[];
  @Output() selectedFileName = new EventEmitter<string>();
  fileName: string;
  isOpen = false;

  constructor() { }

  ngOnInit() {
    this.fileName = this.files[0];
  }

  onToggleDropDown(): void {
    this.isOpen = !this.isOpen;
  }

  onSelectElement(fileName: string): void {
    this.onToggleDropDown();
    this.selectedFileName.emit(fileName);
  }

}
