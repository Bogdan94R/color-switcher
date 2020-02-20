import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

interface FileObject {
  name: string;
  selected: boolean;
}

@Component({
  selector: 'app-select-drop-down',
  templateUrl: './select-drop-down.component.html',
  styleUrls: ['./select-drop-down.component.scss']
})
export class SelectDropDownComponent implements OnInit {

  @Input() files: string[];
  @Output() selectElement = new EventEmitter<string>();
  fileName = '';
  isOpen = false;
  fileObjects: FileObject[] = [];

  constructor() {}

  ngOnInit() {
    this.fileObjects = this.files.map(item => ({name: item, selected: false}));
  }

  onToggleDropDown(): void {
    this.isOpen = !this.isOpen;
  }

  onSelectElement(file: FileObject) {
    this.fileName = file.name;
    this.changeSelectedState();
    this.onToggleDropDown();
    this.selectElement.emit(file.name);
  }

  private changeSelectedState(): void {
    this.updateSelectItem();
  }

  private updateSelectItem(): void {
    this.fileObjects = this.fileObjects.map(item => {
      item.selected = item.name === this.fileName;
      return item;
    });
  }

}
