import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { KencanInterface } from 'src/app/core/interfaces/kencan.interface';
import { Observable } from 'rxjs';
import { KencanService } from 'src/app/core/services/kencan.service';

@Component({
  selector: 'app-step-four-form',
  templateUrl: './step-four-form.component.html',
  styleUrls: ['./step-four-form.component.scss'],
})
export class StepFourFormComponent implements OnInit, OnDestroy {
  @Input() public selectedKencanId!: string;

  public selectedKencan$!: Observable<KencanInterface>;
  private subscriptions: Subscription = new Subscription();
  public loading$!: Observable<boolean>;

  public biayaKencanControl: FormControl = new FormControl(null);

  constructor(private _kencanService: KencanService) {
    this.loading$ = this._kencanService.loading$;
  }

  ngOnInit() {
    this._kencanService.load();

    this.selectedKencan$ = this._kencanService.getByKey(this.selectedKencanId);
    this.subscriptions.add(
      this.selectedKencan$.subscribe((kencan: KencanInterface) => {
        this.biayaKencanControl = new FormControl(kencan.biaya, [
          Validators.required,
        ]);
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  gantiBiayaKencan(): void {
    this.selectedKencan$ = this._kencanService.selectEntityById(
      this.selectedKencanId
    );
    this.selectedKencan$.subscribe((kencan: KencanInterface) => {
      this._kencanService.update({
        ...kencan,
        ...{ biaya: this.biayaKencanControl.value },
      });
    });
  }
}
