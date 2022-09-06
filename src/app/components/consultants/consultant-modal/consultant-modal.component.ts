import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ConsultantsService } from 'src/app/core/services/consultants/consultants.service';

@Component({
  selector: 'app-consultant-modal',
  templateUrl: './consultant-modal.component.html',
  styleUrls: ['./consultant-modal.component.scss'],
})
export class ConsultantModalComponent implements OnInit {
  @Input() public data!: any;
  public textareaValue = '';
  @Output() passEntry: EventEmitter<void> = new EventEmitter();

  constructor(
    private consultantsService: ConsultantsService,
    private activeModal: NgbActiveModal
  ) {}

  ngOnInit() {
    this.setData();
  }

  public closeModal(result: any) {
    this.activeModal.close(result);
  }

  private setData() {
    this.textareaValue = this.data.body;
    console.log(this.data);
  }
  async onSubmit() {
    await this.consultantsService.putConsultants(
      this.data.id,
      this.data.header,
      this.data.body,
      this.data.type
    );
    // window.location.reload();
  }

  // private textareaValue = '';
  doTextareaValueChange(ev) {
    try {
      this.data.body = ev.target.value;
    } catch (e) {
      console.info('could not set textarea-value');
    }
  }
}
